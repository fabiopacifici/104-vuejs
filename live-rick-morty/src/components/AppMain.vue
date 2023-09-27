<script>
import { state } from "../state.js";
import CharactersList from "./CharactersList.vue";
import PageLoader from './PageLoader.vue';
import SearchBox from './SearchBox.vue';
export default {
  name: 'AppMain',
  components: {
    CharactersList,
    PageLoader,
    SearchBox
  },
  data() {
    return {
      state
    }
  },
  methods: {
    searchCharacter() {
      console.log('searching...', this.state.searchText);
      const url = this.state.base_url + `?name=${this.state.searchText}&status=${this.state.characterStatus}`
      console.log(url);
      this.state.fetchData(url)
      //this.state.searchText = ''
    }
  },
  created() {

    setTimeout(() => {
      state.fetchData(this.state.base_url)
    }, 2000)

  }
}
</script>
<template>
  <main class="mt-5">



    <SearchBox @perform-search="searchCharacter"></SearchBox>
    <CharactersList v-if="state.characters"></CharactersList>
    <PageLoader v-else />

  </main>
</template>

<style lang="scss" scoped></style>