provider "aws" {
  region = "eu-west-2"
}

resource "aws_s3_bucket" "mortgage-calculator-bucket" {
  bucket = "mortgage-calculator"

  website {
    index_document = "index.html"
  }
}
