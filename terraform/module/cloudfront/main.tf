resource "aws_cloudfront_origin_access_control" "cloudfront" {
  name                              = "${var.RESOURCES_PREFIX}-frontend-s3-oac"
  description                       = "Cloud Front S3 OAC"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
  

}


resource "aws_cloudfront_distribution" "bloodbridge_cloudfront_distribution" {

  origin {
    domain_name              = var.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.cloudfront.id
    origin_id                = "s3-${var.bucket_name}"

  }

  enabled             = true
  default_root_object = "index.html" # << Always serve index.html for SPA


viewer_certificate {
  cloudfront_default_certificate = true
}

  
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id       = "s3-${var.bucket_name}"
     viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

   # Optional: CloudFront function for SPA rewrites
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite_index.arn
    }
  }


  # === CUSTOM ERROR RESPONSES ===
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
    error_caching_min_ttl = 0
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
    error_caching_min_ttl = 0
  }

  price_class = "PriceClass_200"

restrictions {
        geo_restriction {
        restriction_type = "none"
        locations = []
        }
    }
tags = {
    Environment = "production"
    Name = "Frontend App"
  }
}


# resource "aws_cloudfront_function" "rewrite_index" {
#   name    = "-rewrite-index"
#   runtime = "cloudfront-js-1.0"
#   publish = true

#   comment = "Map folder routes to index.html and drop trailing slash"

#   code = <<-EOT
#     function handler(event) {
#     var req = event.request;
#     var uri = req.uri;

#     // 1) If this is an asset under /_next/, let it pass through
#     if (uri.startsWith('/_next/')) {
#       return req;
#     }

#     // 2) If it ends in a file extension (e.g. .css, .js, .svg), let it pass through
#     if (uri.match(/\/[^/]+\.[^/]+$/)) {
#       return req;
#     }

#     // 3) Otherwise treat it as a "page" route: drop any trailing slash
#     //    and serve the folder's index.html
#     var base = uri.endsWith('/') ? uri.slice(0, -1) : uri;
#     req.uri = base + '/index.html';
#     return req;
# }
#     }
#   EOT 
#  }

resource "aws_cloudfront_function" "rewrite_index" {
  name    = "${var.RESOURCES_PREFIX}-rewrite-index"
  runtime = "cloudfront-js-1.0"
  publish = true
  comment = "SPA route handling for Next.js export"

  code = <<-EOT
    function handler(event) {
      var request = event.request;
      var uri = request.uri;

      // Allow Next.js assets
      if (uri.indexOf('/_next/') === 0) {
        return request;
      }

      // Allow static files with extensions
      if (uri.match(/\/[^\/]+\.[^\/]+$/)) {
        return request;
      }

      // If ends with slash → add index.html
      if (uri.charAt(uri.length - 1) === '/') {
        request.uri = uri + 'index.html';
        return request;
      }

      // Otherwise, map clean route (e.g. /about → /about/index.html)
      request.uri = uri + '/index.html';
      return request;
}

  EOT
}



##=====================================================================================
# POLICY FOR CLOUDFRONT TO ACCESS S3 BUCKET
##========================================================================================

resource "aws_s3_bucket_policy" "cloudfront_access" {
  bucket = var.bucket_name

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid = "AllowCloudFrontServicePrincipalReadOnly",
        Effect = "Allow",
        Principal = {
          Service = "cloudfront.amazonaws.com"
        },
        Action = "s3:GetObject",
        Resource = "arn:aws:s3:::${var.bucket_name}/*",
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.bloodbridge_cloudfront_distribution.arn

            
          }
        }
      }
    ]
  })
}

##=====================================================================================
# Public Access Block (must allow OAC access)
##=====================================================================================
resource "aws_s3_bucket_public_access_block" "frontend" {
  bucket                  = var.bucket_name
  block_public_acls       = true
  block_public_policy     = false  # allow policy-based access
  ignore_public_acls      = true
  restrict_public_buckets = false
}



