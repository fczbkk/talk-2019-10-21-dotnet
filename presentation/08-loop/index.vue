<template>
  <div>
    <product-item :productData="productData" />
  </div>
</template>

<script>
  import {products} from '../data'
  import ProductItem from './ProductItem'

  export default {
    components: { ProductItem },
    data () {
      return {
        productData: products[0]
      }
    }
  }
</script>

<style scoped>

</style>
