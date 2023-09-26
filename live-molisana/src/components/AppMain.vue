<script>
import ProductList from './ProductList.vue';
export default {
  name: 'AppMain',
  components: {
    ProductList
  }
}
</script>
<template>
  <main id="app_main" class="py-5">

    <div class="container text-center">

      <ProductList />

    </div>
  </main>
  <!-- /#app_main -->
</template>

<style lang="scss" scoped></style>