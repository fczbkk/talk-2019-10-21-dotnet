<template>
  <div class="productItem">
    <h3>{{ productData.title }}</h3>
    <div class="content">
      <div><img :src="'http://localhost:3000/images/' + productData.image"></div>
      <div class="price">{{ productData.price }},- Kč</div>
      <quantity-editor v-model="quantity" />
    </div>
  </div>
</template>

<script>
  import QuantityEditor from './QuantityEditor'

  export default {
    components: { QuantityEditor },
    props: [
      'productData'
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

  .productItem h3 {
    background: #3A6EA5;
    color: #EBEBEB;
    margin: 0;
    font-size: 1em;
  }

  .productItem img {
    height: 100px;
  }

  .productItem h3, .productItem .content {
    padding: 1em;
  }

  .price {
    font-size: 2em;
    font-weight: bold;
    padding: 0.25em;
  }
</style>
