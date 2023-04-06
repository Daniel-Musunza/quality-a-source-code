const functions = require("firebase-functions");
const admin = require ("firebase-admin");
admin.initializeApp();
exports.addAdminRole = functions.https.onCall((data, context) => {
    return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true,
            reviewer: false,
            freelancer: false,
        })
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made an admin`,
        }
    }).catch((err) => {
        console.log(err);
    })
});

exports.addReviewerRole = functions.https.onCall((data, response) => {
    return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: false,
            reviewer: true,
            freelancer: false,
        })
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made a Reviewer`,
        }
    }).catch((err) => {
        console.log(err);
    })
});

exports.addFreelancerRole = functions.https.onCall((data, response) => {
    return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: false,
            reviewer: false,
            freelancer: true,
        })
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made a Freelancer`,
        }
    }).catch((err) => {
        console.log(err);
    })
});
