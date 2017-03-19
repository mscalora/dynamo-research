var functions = require('firebase-functions');
const SafeStringify = require('safe-json-stringify');
// Start writing Firebase Functions
// https://firebase.google.com/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {

  require('@google-cloud/debug-agent').start({ allowExpressions: true });

  functions.database.ref('entries').push({
    when: Date.now(),
    who: 'helloWorld',
    message: '<code>' + SafeStringify(request, null, 2) + '</code>',
    type: 'html'
  });
  
  response.send("Hello from Firebase!");
});
