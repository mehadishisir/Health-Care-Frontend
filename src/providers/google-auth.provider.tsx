import { GoogleOAuthProvider } from '@react-oauth/google'
import React, { ReactNode } from 'react'

export default function GoogleAuthProvider({children}:{children:ReactNode}) {
    const clientId = process.env.NEXT_GOOGLE_CLIENT_ID

    if(!clientId){
        return<>{children}</>
    }
  return (
    <GoogleOAuthProvider clientId={clientId}>
        {children}
    </GoogleOAuthProvider>
  )
}
