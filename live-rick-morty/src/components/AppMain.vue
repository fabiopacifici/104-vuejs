<script>
import { state } from "../state.js";

export default {
  name: 'AppMain',
  data() {
    return {
      state
    }
  },
  created() {
    state.fetchData()
  }
}
</script>
<template>
  <main class="mt-5">

    <!-- <SearchBox></SearchBox> -->

    <!-- <CharactersList></CharactersList> -->

    <section class="characters" v-if="state.characters">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-3 g-3">
          <div class="col" v-for="character in state.characters">
            <div class="card">
              <img :src='character.image' alt='' />
              <div class="card-body">
                <h4>{{ character.name }}</h4>
                <div class="meta">
                  status: {{ character.status }}
                  species: {{ character.species }}
                </div>
                <!-- /.meta -->
              </div>
            </div>
          </div>
          <!-- <CharacterItem></CharacterItem> -->
        </div>
      </div>
    </section>
    <div class="loader text-center" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </svg>
      <span>Loading</span>
    </div>


  </main>
</template>

<style lang="scss" scoped></style>