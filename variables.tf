variable "project_id" {
  type        = string
  description = "GCP project ID"
}

variable "region" {
  type        = string
  description = "GCP region"
}

variable "credentials_json" {
  type        = string
  description = "GCP service account credentials in JSON"
  sensitive   = true
}
