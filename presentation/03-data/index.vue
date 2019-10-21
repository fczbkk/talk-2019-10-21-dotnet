<template>
  <div>
    <p>
      Template:<br>
      {{ quantity }}
    </p>
    <p>
      Bind:<br>
      <input :value="quantity" />
    </p>
    <p>
      Model:<br>
      <input v-model="quantity" />
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        quantity: 10
      }
    }
  }
</script>

<style scoped>
  input {
    font-weight: bold;
    padding: 0.5em 1em;
    border: 2px solid #004E98;
    text-align: right;
    background: #EBEBEB;
  }
</style>
