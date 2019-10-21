<template>
  <div>
    <products-list :products="products" />
  </div>
</template>

<script>
  import {products} from '../data'
  import ProductsList from './ProductsList'

  export default {
    components: { ProductsList },
    data () {
      return {
        products
      }
    }
  }
</script>

<style scoped>

</style>
