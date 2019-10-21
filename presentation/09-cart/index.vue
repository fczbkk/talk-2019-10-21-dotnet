<template>
  <div>
    <the-cart />
    <products-list :products="products" />
  </div>
</template>

<script>
  import { products } from '../data'
  import ProductsList from './ProductsList'
  import TheCart from './TheCart'

  export default {
    components: { TheCart, ProductsList },
    data () {
      return {
        products: products
      }
    }
  }
</script>

<style scoped>

</style>
