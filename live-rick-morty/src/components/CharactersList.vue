<script>
import { state } from "../state.js";
import CharacterItem from './CharacterItem.vue';

export default {
  name: 'CharactersList',
  components: {
    CharacterItem
  },
  data(){
    return {
      state
    }
  }

}
</script>
<template>
  <section class="characters">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-3 g-3">

        <CharacterItem :character="character" v-for="character in state.characters" />

      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>