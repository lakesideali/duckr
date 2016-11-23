import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBMSqTKnZb1C0BR-FRdcdVyPxzAIgt_goQ",
  authDomain: "duckr-1d335.firebaseapp.com",
  databaseURL: "https://duckr-1d335.firebaseio.com",
  storageBucket: "duckr-1d335.appspot.com",
  messagingSenderId: "425824921582"
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 300000
