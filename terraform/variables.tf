variable "project_id" {
  type = string
}

variable "region" {
  type    = string
  default = "ap-south1"
}

variable "credentials_json" {
  type      = string
  sensitive = true
}
