#!/usr/bin/env bash

curl -fSL "https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip" -o /tmp/terraform.zip
unzip -o /tmp/terraform.zip -d /tmp
rm -f /tmp/terraform.zip
sudo mv /tmp/terraform /usr/local/bin/terraform
sudo chmod 755 /usr/local/bin/terraform
