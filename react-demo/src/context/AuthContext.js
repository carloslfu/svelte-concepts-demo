import React from 'react'
import * as auth from '../services/auth'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
    const [status, setStatus] = React.useState('unauth') // 'unauth' | 'pending' | 'auth' | 'error'
    const [error, setError] = React.useState('')

    const login = () => {
        setStatus('pending')
        auth.login()
            .then(() => {
                setStatus('auth')
            })
            .catch(err => {
                setStatus('error')
                setError(err)
            })
    }

    const logout = () => {
        setStatus('unauth')
    }

    return <AuthContext.Provider value={{ status, error, login, logout }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
