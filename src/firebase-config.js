import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCyd1816yoaTdeGhA75WVpsO9NOwpPo2Ko",
  authDomain: "argon-react-firebase-auth.firebaseapp.com",
  projectId: "argon-react-firebase-auth",
  storageBucket: "argon-react-firebase-auth.appspot.com",
  messagingSenderId: "487202280236",
  appId: "1:487202280236:web:1584e6eb324bc47bb75289",
  measurementId: "G-XRFK8138WC"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)