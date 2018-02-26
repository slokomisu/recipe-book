import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const fbConfig = {
    apiKey: "AIzaSyDx9X0HZB28w_u9xbUbkOD2dP1C53FY5Q0",
    authDomain: "family-library-260fa.firebaseapp.com",
    databaseURL: "https://family-library-260fa.firebaseio.com",
    projectId: "family-library-260fa",
    storageBucket: "family-library-260fa.appspot.com",
    messagingSenderId: "387541166306"
  };

firebase.initializeApp(fbConfig)
export default firebase
