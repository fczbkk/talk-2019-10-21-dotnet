<template>
  <div>
    <product-item :product="product" />
  </div>
</template>

<script>
  import {products} from '../data'
  import ProductItem from './ProductItem'

  export default {
    components: { ProductItem },
    data () {
      return {
        product: products[0]
      }
    }
  }
</script>

<style scoped>

</style>
