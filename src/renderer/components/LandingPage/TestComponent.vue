<template>
    <div>
        <p>Test Component!</p>
        <p>My firstname is: {{firstname}}</p>
        <p class="name-color">My lastname is: {{lastname}}</p>
        This is a counter using the global application state!
        count: {{Counter.main}}
        <button v-on:click="increment"> increment</button>
        <button v-on:click="decrement"> decrement</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Counter from './../../store/modules/Counter'

export default {
  data () {
    return {
      count: this.$store.state.Counter.main,
      firstname: 'Jonas',
      lastname: 'Johansson',
      increment: () => Counter.actions.incrementCounter(this.$store),
      decrement: () => Counter.actions.decrementCounter(this.$store)
    }
  },
  computed: mapState(['Counter'])
}
</script>

<style scoped>
.name-color {
  color: red;
}
</style>