import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from '../config/firebase'
import store from '../redux/store'
import { createFirestoreInstance } from 'redux-firestore'

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

export const firestore = firebase.firestore()
