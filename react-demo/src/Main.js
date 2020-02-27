import React from 'react'
import { useAuth } from './context/AuthContext'

import { Home } from './Home'
import { Button } from './components/Button'

export const Main = () => {
  const auth = useAuth()
  return (
    auth.status === 'unauth' ? (
      <div>
        <header>
          <Button onClick={auth.login}>Log-in</Button>
        </header>
        Unauthenticated
      </div>
    ) : auth.status === 'pending' ? (
      <div>
        <header>
          pending ...
        </header>
        Authenticating...
      </div>
    ) : auth.status === 'auth' ? (
      <div>
        <header>
          <Button onClick={auth.logout}>Log-out</Button>
        </header>
        <Home />
      </div>
    ) : ( // error state
      <div>
        Error while login <Button onClick={auth.login}>Try again</Button>
      </div>
    )
  )
}
