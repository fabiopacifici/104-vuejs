<script>
import products from "../data/products.js";
import ProductItem from "./ProductItem.vue";
export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  data() {
    return {
      products
    }
  }

}
</script>
<template>
  <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">

    <ProductItem :image="product.src" :title="product.titolo" v-for="product in products" />

  </div>
</template>


<style lang="scss" scoped></style>