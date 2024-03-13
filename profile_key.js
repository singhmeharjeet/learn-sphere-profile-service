const env = require("dotenv").config();

exports.credentials = {
  type: "service_account",
  project_id: "profile-service-db",
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key,
  client_email: "firebase-adminsdk-pculy@profile-service-db.iam.gserviceaccount.com",
  client_id: "104993135053184059495",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pculy%40profile-service-db.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
