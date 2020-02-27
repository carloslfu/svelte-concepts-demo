<div class="container">
  <h3>List example</h3>
  <input bind:value={inputText} />
  <Button on:click={addItem}>Add Item</Button>
  <ul>
    {#each list as item, idx}
      <li>
        {item} <button on:click={() => removeItem(idx)}>x</button>
      </li>
    {/each}
  </ul>
</div>
  
<script>

import Button from '../components/Button.svelte'

// local state binding
let inputText = ''
// ----

let list = []

const removeItem = idx => {
  const newList = [...list]
  newList.splice(idx, 1)
  list = newList
}

const addItem = () => {
  if (inputText !== '') {
    list = [...list, inputText]
    inputText = ''
  }
}

</script>

<style>

.container {
  font-size: 18px;
}

</style>
