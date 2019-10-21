<template>
  <div>
    <quantity-editor :value="quantity" />
    <p>{{ quantity }}</p>
  </div>
</template>

<script>
  import QuantityEditor from './QuantityEditor'
  export default {
    components: { QuantityEditor },
    data () {
      return {
        quantity: 5
      }
    }
  }
</script>

<style scoped>

</style>
