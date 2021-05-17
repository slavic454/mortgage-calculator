terraform {
  backend "s3" {
    bucket = "terraform-state-bilicki-2"
    region = "eu-west-2"
    key = "s3/mortgage-calculator"
  }
}

provider "aws" {
  region = "eu-west-2"
}

locals { s3_origin_id = "mortgage-calculator" }

resource "aws_s3_bucket" "terraform-state-bilicki-2" {

  bucket = "terraform-state-bilicki-2"

  lifecycle {
    prevent_destroy = true
  }

  versioning {
    enabled = true
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

}

resource "aws_s3_bucket" "mortgage-calculator-bilicki" {

  bucket = "mortgage-calculator-bilicki"

  website {
    index_document = "index.html"
  }
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.mortgage-calculator-bilicki.bucket_regional_domain_name
    origin_id   = local.s3_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_200"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
