
<button
    {...$$props}
    use:forwardEvents
    className={'button ' + ($$props.className || '')}
>
    <slot />
</button>

<script>
import { current_component } from 'svelte/internal'
import { forwardEventsBuilder } from '../utils/forwardEvents'

$: forwardEvents = forwardEventsBuilder(current_component)

</script>

<style>

button {
    background: none;
    background-color: #ff3e00;
    border-radius: 5px;
    padding: 10px 5px;
    color: white;
    border: none;
}

</style>
