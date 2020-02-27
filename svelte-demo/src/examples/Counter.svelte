<div class="container">
  <h3>Counter example</h3>
  Count: {count} <br/>
  Derived value: {count * 2} <br/>
  <br/>
  Derived state (through reactive expresions): <br/>
  <div class="derivedState">
    1 time: {derived} <br/>
    2 time: {derived} <br/>
    3 time: {derived} <br/>
    4 time: {derived} <br/>
    5 time: {derived} <br/>
    6 time: {derived} <br/>
    7 time: {derived} <br/>
  </div>
  <button on:click={decrement}>Decrement</button>
  <button on:click={reset}>Reset</button>
  <button on:click={increment}>Increment</button>
</div>

<script>

// local state
let count = 0

// reactive expression ala React, dependencies are detected automatically
$: derived = Math.round(Math.E * count / Math.E * 100)

const decrement = () => {
  count -= 1
}

const reset = () => {
  count = 0
}

const increment = () => {
  count += 1
}

</script>

<style>

.container {
  font-size: 18px;
}

.derivedState {
  padding: 10px;
}

</style>