import { getRedirectResult } from 'firebase/auth'
import styled from 'styled-components'
import {
  auth,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import SignUpForm from './SignUpForm'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
