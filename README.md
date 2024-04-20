![LearnSphere Service Titles Profile](https://github.com/singhmeharjeet/learn-sphere-profile-service/assets/32851308/1ae739d6-e90c-4726-bab8-94830814fd93)

The Profile Service of Learn Sphere provides endpoints to manage user profiles including creation, retrieval, update, and deletion. It utilizes Firebase Firestore as the database for storing user profiles.
Setup

    Clone the repository.
    Install dependencies by running npm install.

    Ensure you have Firebase credentials in the profile_key.js file.
    Ensure you have private_key, private_key_id, and MY_SECRET in a .env file.


Available Endpoints
Welcome Message

    GET /api/profile-service/

    Returns a welcome message indicating successful connection to the Profile Service.


Get Profile Information

    GET /api/profile-service/info

    Retrieves the profile information of the authenticated user.
    
        Request Body: (note: request body is not required as token includes this information)
            username: Unique username of the user.
            
    Response:
            success: Indicates if the operation was successful.
            message: Information message.
            profile: Details of the created profile.

Create Profile

    POST /api/profile-service/info

    Creates a new profile for the authenticated user only if Profile does not exist for user.

        Request Body: (note: request body is not required as token includes this information)
            username: Unique username of the user.
            role: Role of the user (e.g., admin, teacher, student).

        Response:
            success: Indicates if the operation was successful.
            message: Information message.
            profile: Details of the created profile.

Get Profile by User ID

    GET /api/profile-service/info/:userId

    Retrieves the profile information of a user specified by their user ID.
        Response:
            success: Indicates if the operation was successful.
            message: Information message.
            profile: Details of the requested user profile.

Edit Profile

    PUT /api/profile-service/edit

    Edits the profile of the authenticated user or an admin.

        Request Body:
            newProfileData: Updated profile data.

        Response:
            success: Indicates if the operation was successful.
            message: Information message.
            profile: Details of the updated profile.

Reset Profile

    POST /api/profile-service/reset

    Resets the profile of the authenticated user.

        Request Body:
            userId: ID of the user whose profile needs to be reset.
            profileImg: New profile image (optional).
            biography: New biography (optional).

        Response:
            success: Indicates if the operation was successful.
            message: Information message.
            profile: Details of the reset profile.

Get All Profiles

    GET /api/profile-service/all

    Retrieves information of all user profiles.
        Response:
            success: Indicates if the operation was successful.
            message: Information message.
            profile: Array of user profiles.

Error Handling

In case of errors, appropriate HTTP status codes are returned along with error messages in the response body.


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
