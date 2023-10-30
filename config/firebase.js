import { initializeApp } from "firebase/app";
const app = require('firebase/app')

require('firebase/auth')

// const config = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID
// }

const config = {
    apiKey: "AIzaSyDbqm2v35rPJpSDsBVNHyvM2otTPIGbcNY",
    authDomain: "foodverse-9c107.firebaseapp.com",
    databaseURL: "https://foodverse-9c107.firebaseio.com",
    projectId: "foodverse-9c107",
    storageBucket: "foodverse-9c107.appspot.com",
    messagingSenderId: "448768560222",
    appId: "1:448768560222:web:da19e9d99021ca81e238cf"
  };
  

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
    }

    doCreateUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password)
    }
}

const firebase = new Firebase()

module.exports = firebase

const app = initializeApp(config);