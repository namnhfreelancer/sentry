variable "gcp_project_id" {
  description = "The ID of the GCP project"
  type        = string
}

variable "gcp_region" {
  description = "The region of the GCP project"
  type        = string
}

variable "gcp_zone" {
  description = "The zone of the GCP project"
  type        = string
}

variable "parent_chain_rpc_url" {
  description = "The URL of the parent chain RPC node"
  type        = string
}

variable "bucket_name" {
  description = "The name of the bucket to be used to store challenge information in for the public node. This needs to be unique across all of GCP."
  type        = string
}
