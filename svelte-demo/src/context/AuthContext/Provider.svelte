<slot />

<script>

import { setContext, getContext } from 'svelte'
import { writable, get } from 'svelte/store'
import * as auth from '../../services/auth'
import { AuthContextKey } from './key'

let status = writable('unauth') // 'unauth' | 'pending' | 'auth' | 'error'
let error = writable('')

const login = () => {
    status.update(() => 'pending')
    auth.login()
        .then(() => {
            status.update(() => 'auth')
        })
        .catch(err => {
            status.update(() => 'error')
            error.update(() => err)
        })
}

const logout = () => {
    status.update(() => 'unauth')
}

setContext(AuthContextKey, { status, error, login, logout })

</script>

<script context="module">

export const getAuth = () => {
    const context = getContext(AuthContextKey)
    if (!context) {
        throw new Error("getAuth must be used within a component that provide using setAuth")
    }
    return context
}

</script>
