resource "random_id" "s3_suffix" {
  byte_length = 4
}

locals {
  RESOURCES_PREFIX = "${lower(var.ENV)}-bloodbridge"
  ACCOUNTID        = data.aws_caller_identity.current.account_id
  INFO_EMAIL       = "bloodbridgenaija@gmail.com"



  common_tags = {
    environment = var.ENV
    project     = "bloodbridge"
  }
}



module "frontend_s3" {
  source           = "./module/frontend_s3"
  ACCOUNTID     = local.ACCOUNTID

  }

module "cloudfront" {
  source                      = "./module/cloudfront"
  RESOURCES_PREFIX            = local.RESOURCES_PREFIX
  bucket_regional_domain_name = module.frontend_s3.bucket_regional_domain_name
  bucket_name                   = module.frontend_s3.bucket_name

  }

