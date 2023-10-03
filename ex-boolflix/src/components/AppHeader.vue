<template>
    <header class="d-flex justify-content-between p-3">

      <div class="logo text-danger">
        FABIOFLIX
      </div>

      <SearchBox @perform-search="getData"></SearchBox>


    </header>

</template>

<script>
import SearchBox from "./SearchBox.vue";
import {state} from '../state.js';
  export default {
    name: 'AppHeader',
    components:{
      SearchBox
    },
    data(){
      return {
        state
      }
    },
    methods: {
      getData() {
      this.state.fetchResults();
    },
    }
  }
</script>

<style lang="scss" scoped>

</style>