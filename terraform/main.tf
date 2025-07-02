terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 4.0.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
  credentials = var.credentials_json
}

resource "google_artifact_registry_repository" "naya_repo" {
  provider = google
  location     = var.region
  repository_id = "nayaregistry"
  description   = "Docker repo for Naya frontend and backend"
  format        = "DOCKER"
}
