<script>
	import AuthContext from './context/AuthContext/Provider.svelte'
	import Main from './Main.svelte'
</script>

<AuthContext>
	<Main />
</AuthContext>
