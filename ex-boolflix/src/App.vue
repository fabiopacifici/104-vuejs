<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { state } from './state.js';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,

  },
}
</script>

<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>
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
