<template>
  <div class="productItem">
    <header>{{ product.title }}</header>
    <div class="content">
      <div><img :src="'http://localhost:3000/images/' + product.image"></div>
      <div class="price">{{ product.price }},- Kč</div>
      <quantity-editor v-model="quantity" />
    </div>
  </div>
</template>

<script>
  import QuantityEditor from './QuantityEditor'

  export default {
    components: { QuantityEditor },
    props: [
      'product'
    ],
    data () {
      return {
        quantity: 0
      }
    }
  }
</script>

<style scoped>
  .productItem {
    font-family: sans-serif;
    border: 2px solid #3A6EA5;
  }

  .productItem header {
    background: #3A6EA5;
    color: #EBEBEB;
    margin: 0;
    font-size: 1em;
  }

  .productItem img {
    height: 100px;
  }

  .productItem header, .productItem .content {
    padding: 1em;
  }

  .price {
    font-size: 2em;
    font-weight: bold;
    padding: 0.25em;
  }
</style>
