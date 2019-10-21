<template>
  <div>
    <button @click="quantity--">-</button>
    <input v-model="quantity" size="3" />
    <button @click="quantity++">+</button>
  </div>
</template>

<script>
  export default {
    props: [
      'value'
    ],
    data () {
      return {
        quantity: this.value
      }
    }
  }
</script>

<style scoped>
  input, button {
    font-weight: bold;
    padding: 0.5em 1em;
    border: 2px solid #004E98;
  }
  input {
    text-align: right;
    background: #EBEBEB;
  }
  button {
    background: #3A6EA5;
    color: #EBEBEB;
  }
  button:hover {
    background: #FF6700;
  }
</style>
