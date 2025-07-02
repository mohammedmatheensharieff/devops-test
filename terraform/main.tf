provider "google" {
  project     = var.project_id
  region      = var.region
  credentials = var.credentials_json
}

resource "google_artifact_registry_repository" "naya_registry" {
  location      = var.region
  repository_id = "nayaregistry"
  format        = "DOCKER"
  description   = "Docker repo for Naya Studio images"
}
