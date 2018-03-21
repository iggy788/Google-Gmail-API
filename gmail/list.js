"use strict";

const { google } = require("googleapis");
const sampleClient = require("../sampleclient");

const gmail = google.gmail({
	version: "v1",
	auth: sampleClient.oAuth2Client
});

function runSample(callback) {
	gmail.users.messages.list(
		{
			userId: "me"
		},
		(err, res) => {
			if (err) {
				throw err;
			}
			console.log(res.data);
			callback(res.data);
		}
	);
}

const scopes = ["https://www.googleapis.com/auth/gmail.readonly"];

if (module === require.main) {
	sampleClient.authenticate(scopes, err => {
		if (err) {
			throw err;
		}
		runSample(() => {
			/* sample complete */
		});
	});
}
