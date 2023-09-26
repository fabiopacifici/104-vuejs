<script>
export default {
  name: 'ProductItem',
  //props: ['image', 'title']
  props: {
    image: String,
    title: String
  }
}
</script>

<template>
  <div class="col">
    <div class="product card h-100">
      <img :src="image" alt="" class="card-img-top">
      <div class="card-body">
        <h4 class="text-muted">{{ title }}</h4>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>