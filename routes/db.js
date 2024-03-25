const env = require("dotenv").config();

// -----------------------Firebase Firestore setup----------------------
const admin = require("firebase-admin");
const { credentials } = require("../profile_key.js");
// console.log(credentials);
admin.initializeApp({
	credential: admin.credential.cert(credentials),
});

const db = admin.firestore();
// ------------------------------------------------------------------------

// do a database lookup here
const getProfile = async (username) => {
	const query_return = await db
		.collection("profiles")
		.where("username", "==", username)
		.get();

	if (!query_return.empty) {
		const doc = query_return.docs[0];
		const profileData = doc.data();

		return { success: true, message: "Profile found", user: profileData };
	} else {
		return { success: false, message: "Profile not found" };
	}
};

const createProfile = async function (username, profile_image) {
	const DB_profile = await getProfile(username);

	if (DB_profile.success === true) {
		return {
			success: false,
			message: "User profile already exists",
		};
	} else {
		const profileJson = {
			username: username,
			img: profile_image,
		};

		const db_response = await db
			.collection("profiles")
			.doc(profileJson.username)
			.set(profileJson);

		return {
			success: true,
			message: "Profile created",
			user: {
				username: profileJson.username,
				img: profileJson.profileImg,
			},
		};
	}
};

module.exports = { getProfile, createProfile };
