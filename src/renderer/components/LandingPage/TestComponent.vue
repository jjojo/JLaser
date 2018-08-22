<template>
    <div>
        <p>Test Component!</p>
        <p>My firstname is: {{firstname}}</p>
        <p class="name-color">My lastname is: {{lastname}}</p>
        This is a counter using the global application state!
        count: {{count}}
        <button :onclick="increment"> increment</button>
        <button> decrement</button>
    </div>
</template>

<script>
  import Counter from './../../store/modules/Counter'

  export default {
    data () {
      return {
        count: Counter.state.main,
        firstname: 'Jonas',
        lastname: 'Johansson'
      }
    },
    methods: {
      increment: Counter.actions.someAsyncTask()
    }
  }
</script>

<style scoped>
    .name-color {
        color: red;
    }

</style>