<script>
export default {
  name: 'CardItem',
  props: {
    card: Object
  }
}
</script>
<template>
  <div class="card">
    <img class="card-img" :src="card.card_images[0].image_url" alt="">
    <div class="card-body">
      <h3>
        {{ card.name }}
      </h3>
      <div class="meta" v-show="card.archetype != null">
        {{ card.archetype }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>