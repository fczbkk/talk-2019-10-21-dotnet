<template>
  <div>
    <p>
      Template:<br>
      {{ count }}
    </p>
    <p>
      Bind:<br>
      <input :value="count" />
    </p>
    <p>
      Model:<br>
      <input v-model="count" />
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 10
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
