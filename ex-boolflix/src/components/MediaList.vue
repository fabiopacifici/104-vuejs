<script>
import MediaItem from './MediaItem.vue';
export default {
  name: 'MediaList',
  props: ['title', 'records'],
  components: {
    MediaItem
  }
}
</script>

<template>
  <section :class="title + '-section'">

    <div class="container">
      <h2 class="text-uppercase text-muted fs-5 mt-4 mb-2">
        {{ title }}
      </h2>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
        
        <MediaItem v-for="item in records.results" :key="item.id" :item="item" :title="title"></MediaItem>
        
      </div>
    </div>


  </section>
</template>



<style lang="scss" scoped></style>