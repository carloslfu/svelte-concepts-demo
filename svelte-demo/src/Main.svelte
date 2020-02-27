<script>
import { getAuth } from './context/AuthContext/Provider.svelte'

import Home from './Home.svelte'
import Button from './components/Button.svelte'

let { status, login, logout } = getAuth()

</script>

{#if $status === 'unauth'}
  <div>
    <header>
      <Button on:click={login}>Log-in</Button>
    </header>
    Unauthenticated
  </div>
{:else if $status === 'pending'}
  <div>
    <header>
      pending ...
    </header>
    Authenticating...
  </div>
{:else if $status === 'auth'}
  <div>
    <header>
      <Button on:click={logout}>Log-out</Button>
    </header>
    <Home />
  </div>
{:else}    <!-- error state -->
  <div>
    Error while login <Button on:click={login}>Try again</Button>
  </div>
{/if}
