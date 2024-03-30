Profile Service

The Profile Service of Learn Sphere provides endpoints to manage user profiles including creation, retrieval, update, and deletion. It utilizes Firebase Firestore as the database for storing user profiles.
Setup

    Clone the repository.
    Install dependencies by running npm install.

    Ensure you have Firebase credentials in the profile_key.js file.
    Ensure you have secrets in a .env file.

Available Endpoints
Welcome Message

    GET /api/profile-service/
        Returns a welcome message indicating successful connection to the Profile Service.

Get Profile Information

    GET /api/profile-service/info
        Retrieves the profile information of the authenticated user.

Create Profile

    POST /api/profile-service/info
        Creates a new profile for the authenticated user.

Get Profile by User ID

    GET /api/profile-service/info/:userId
        Retrieves the profile information of a user specified by their user ID.

Edit Profile

    PUT /api/profile-service/edit
        Edits the profile of the authenticated user.

Get All Profiles

    GET /api/profile-service/all
        Retrieves information of all user profiles.

Reset Profile

    POST /api/profile-service/reset
        Resets the profile of the authenticated user.

Middleware

    Authentication Middleware: Ensures that endpoints are accessed only by authenticated users. This middleware is applied to routes where authentication is required.

Database Functions

    getProfile: Retrieves profile information of a user from the database.
    getAllProfiles: Retrieves profile information of all users from the database.
    createProfile: Creates a new profile for a user in the database.
    editProfile: Edits the profile of a user in the database.
    deleteProfile: Deletes the profile of a user from the database.

Usage

    Start the Profile Service by running npm start.
    Access the endpoints using the specified routes.
