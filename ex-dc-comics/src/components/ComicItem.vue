<script>
export default {

  name: 'ComicItem',
  props : {
    comic: Object
  }

}
</script>
<template>
  <div class="col">
    <div class="comic">
      <img class="thumb" :src='comic.thumb' alt='' />
      <h5>{{ comic.series }}</h5>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>