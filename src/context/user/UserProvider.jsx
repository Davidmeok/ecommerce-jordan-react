import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase/config'
import { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({ children }) => {
  const [user, updateUser] = useState(false)

  const signUp = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = () => {
    console.log('sign in')
  }

  const signInWithGoogle = () => {
    console.log('sign in with google')
  }
  const signInWithFacebook = () => {
    console.log('sign in with facebook')
  }
  const signInWithGithub = () => {
    console.log('sign in with github')
  }
  const signInWithTwitter = () => {
    console.log('sign in with twitter')
  }

  const signOut = () => {
    console.log('sign out')
  }

  const data = {
    user,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    signInWithTwitter,
    signOut
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }
