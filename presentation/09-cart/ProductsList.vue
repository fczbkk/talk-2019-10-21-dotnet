<template>
  <div class="productsList">
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
  import ProductItem from './ProductItem'
  export default {
    components: { ProductItem },
    props: ['products']
  }
</script>

<style scoped>
  .productsList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 1em;
    grid-row-gap: 1em;
  }
</style>
