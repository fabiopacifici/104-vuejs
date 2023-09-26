<script>
import comics from '../data/comics.js'
import ComicItem from "./ComicItem.vue";
  export default {
    name: 'ComicsList',
    components: {
      ComicItem
    },
    data() {
      return {
        comics
      }
    }
  }
</script>


<template>
  <section class="comics_list">

    <div class="container">
      <h3 class="title mb-3">
        Current Series
      </h3>


      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">

        <ComicItem :comic="comic" v-for="comic in comics" />

      </div>
      <!-- /.row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 -->



    </div>

  </section>
</template>

<style lang="scss" scoped>

</style>