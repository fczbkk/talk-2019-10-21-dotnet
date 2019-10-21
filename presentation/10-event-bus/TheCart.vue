<template>
  <div id="cart">
    <header>🛒 Cart</header>
    <ul>
      <li
        v-for="(quantity, id) in itemsInCart"
        :key="id"
      >
        {{ quantity }} &times; {{ id }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { EventBus } from './event-bus'

  export default {
    data () {
      return {
        itemsInCart: {}
      }
    },
    created () {
      EventBus.$on('change-quantity', ({id, quantity}) => {
        if (quantity > 0) {
          this.$set(this.itemsInCart, id, quantity)
        } else {
          this.$delete(this.itemsInCart, id)
        }
      })
    }
  }
</script>

<style scoped>
  #cart {
    font-family: sans-serif;
    margin-bottom: 1em;
  }

  header, ul {
    padding: 1em;
  }

  header {
    background: #3A6EA5;
    color: #EBEBEB;
    margin: 0;
    font-size: 1em;
  }

  ul {
    border: 2px solid #3A6EA5;
    padding: 1em;
    list-style: none;
    margin: 0;
  }
</style>
