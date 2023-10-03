<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { state } from './state';
export default {
  name: 'App',
  data(){
    return {
      state
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  mounted(){
    this.state.query = 'Star wars';
    this.state.fetchResults();
  }
}
</script>

<template>
  <AppHeader></AppHeader>



  <!-- Banner (prende la prima immagine dei risultati al caricamento pagina) -->
  <div class="banner" :style="{backgroundImage: 'url(https://image.tmdb.org/t/p/w342/' + this.state.results.movies.results[0].backdrop_path + ')', height: '400px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}" v-if="this.state.results.movies != ''">
   <div class="container p-4">
    <div class="text-white p-3 bg-dark">
       <h1 class="">
          {{ this.state.results.movies.results[0].title }}
        </h1>
        <p>{{ this.state.results.movies.results[0].overview }}</p>
     </div>
   </div>
  </div>

  <AppMain></AppMain>

  <AppFooter></AppFooter>
</template>

<style lang="scss">
.movies-section,
.tv-section {


  .card {
    overflow: hidden;
    transition: all 1s;

    &:hover {
      scale: 1.1;
      box-shadow: 0 0 10px #13806c;
      z-index: 1;
    }

    .poster {
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;

    }

    .card-body {
      display: none;
      height: 100%;

      .rating {
        color: yellow;
      }

      .overview {
        overflow-y: auto;
        max-height: 40%;
      }
    }

    &:hover .poster {
      filter: brightness(0.2);
    }


    &:hover .card-body {
      display: block;
      color: white;

    }
  }
}
</style>
