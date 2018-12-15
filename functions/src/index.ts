import * as functions from 'firebase-functions'
import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as cors from 'cors'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Express setup
const app = express()
const corsHandler = cors({ origin: true })
const API_VERSION = '1.0.0'

// Express Path handler
app.use(bodyParser.json())

app.get(`/helloRecoome`, (request, response) => {
  return corsHandler(request, response, () =>
    response.send({
      title: 'Hello Recommendation'
    })
  )
})

app.get(`/test/:quote`, (request, response) => {
  return corsHandler(request, response, () =>
    response.send({
      title: request.params.quote
    })
  )
})

export const api = functions.https.onRequest(app)
