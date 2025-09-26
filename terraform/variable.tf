variable "region" {
  default = "us-east-1"
}

variable "ENV" {
  type    = string
  default = "dev"
}
data "aws_caller_identity" "name" {}

# variable "bucket_name" {
#   description = "This is the frontend application name"
#   default = "safespacefrontend"
# }