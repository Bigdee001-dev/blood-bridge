output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.bloodbridge_cloudfront_distribution.domain_name
}

output "oac_id" {
  description = "ID of the CloudFront Origin Access Control"
  value       = aws_cloudfront_origin_access_control.cloudfront.id
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.bloodbridge_cloudfront_distribution.id
}

output "cloudfront_distribution_arn" {
  description = "ARN of the CloudFront Distribution"
  value       = aws_cloudfront_distribution.bloodbridge_cloudfront_distribution.arn
}
