terraform {
  backend "s3" {
    bucket = "terraform-state-bilicki"
    region = "eu-west-2"
    key = "s3/mortgage-calculator"
  }
}

provider "aws" {
  region = "eu-west-2"
}

resource "aws_s3_bucket" "terraform-state-bilicki" {

  bucket = "terraform-state-bilicki"

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
