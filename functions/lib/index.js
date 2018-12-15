"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
// Express setup
const app = express();
const corsHandler = cors({ origin: true });
const API_VERSION = '1.0.0';
// Express Path handler
app.use(bodyParser.json());
app.get(`/helloRecoome`, (request, response) => {
    return corsHandler(request, response, () => response.send({
        title: 'Hello Recommendation'
    }));
});
app.get(`/test/:quote`, (request, response) => {
    return corsHandler(request, response, () => response.send({
        title: request.params.quote
    }));
});
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map