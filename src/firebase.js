import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const fbConfig = {
  apiKey: 'AIzaSyDCBfCy4iZFr8VeDvfpmZvEXuVoJciRwOM',
  authDomain: 'udemy-ng-http-a0245.firebaseapp.com',
  databaseURL: 'https://udemy-ng-http-a0245.firebaseio.com',
  projectId: 'udemy-ng-http-a0245',
  storageBucket: 'udemy-ng-http-a0245.appspot.com',
  messagingSenderId: '829420822651'
}

firebase.initializeApp(fbConfig)
export default firebase