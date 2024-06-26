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
		.where("userId", "==", username)
		.get();

	if (!query_return.empty) {
		const doc = query_return.docs[0];
		const profileData = doc.data();
		return {
			success: true,
			message: "Profile found",
			user: {
				userId: profileData.userId,
				profileImg: profileData.profileImg,
				biography: profileData.biography,
				name: profileData.name,
				role: profileData.role,
			},
		};
	} else {
		return { success: false, message: "Profile not found" };
	}
};

const createProfile = async function ({ username, role, name }) {
	try {
		const DB_profile = await getProfile(username);

		if (DB_profile.success === true) {
			return {
				success: false,
				message: "User profile already exists",
			};
		} else {
			const profileJson = {
				userId: username,
				profileImg: "",
				biography: "No Bio",
				name: name,
				role: role,
			};

			await db
				.collection("profiles")
				.doc(profileJson.userId)
				.set(profileJson);

			return {
				success: true,
				message: "Profile created",
				user: {
					userId: profileJson.userId,
					profileImg: profileJson.profileImg,
					biography: profileJson.biography,
					name: profileJson.name,
					role: profileJson.role,
				},
			};
		}
	} catch (error) {
		console.error("Error creating profile:", error);
		return { success: false, message: error.message };
	}
};

const editProfile = async (username, updatedProfileData) => {
	try {
		const profileRef = db.collection("profiles").doc(username);
		const profileDoc = await profileRef.get();

		if (!profileDoc.exists) {
			return { success: false, message: "Profile not found" };
		}

		await profileRef.update(updatedProfileData);

		return { success: true, message: "Profile updated successfully" };
	} catch (error) {
		console.error("Error editing profile:", error);
		return { success: false, message: "Internal Server Error" };
	}
};

const getAllProfiles = async () => {
	try {
		const querySnapshot = await db.collection("profiles").get();

		const profiles = [];
		querySnapshot.forEach((doc) => {
			profiles.push(doc.data());
		});
		return {
			success: true,
			message: "Profiles retrieved successfully",
			profiles: profiles,
		};
	} catch (error) {
		console.error("Error getting all profiles:", error);
		return { success: false, message: "Internal Server Error" };
	}
};

const deleteProfile = async (username) => {
	try {
		const profileRef = db.collection("profiles").doc(username);

		const profileDoc = await profileRef.get();
		if (!profileDoc.exists) {
			return { success: false, message: "Profile not found" };
		}

		await profileRef.delete();

		return { success: true, message: "Profile deleted successfully" };
	} catch (error) {
		console.error("Error deleting profile:", error);
		return { success: false, message: "Internal Server Error" };
	}
};

module.exports = {
	getProfile,
	getAllProfiles,
	createProfile,
	editProfile,
	deleteProfile,
};
