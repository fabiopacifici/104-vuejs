<script>
import { state } from '../state.js';
import MediaList from './MediaList.vue';
export default {
  name: 'AppMain',
  data() {
    return {
      state,
    };
  },

  components: { MediaList }
}
</script>


<template>
  <main>

    <MediaList v-for="(records, title) in state.results" v-show="state.results.movies != ''" :title="title"
      :records="records">
    </MediaList>
  </main>
</template>
<style lang="scss" scoped>

main {
  min-height: 80vh;
}
</style>