import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { Main } from './Main'

export const App = () => (
  <AuthProvider>
    <Main />
  </AuthProvider>
)
