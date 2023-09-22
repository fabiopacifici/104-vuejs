<script>
import AppTitle from './components/AppTitle.vue';
import AppBanner from './components/AppBanner.vue';

export default {

  data() {
    return {
      message: 'Hello Vite!'
    }
  },
  components: {
    AppTitle,
    AppBanner

  }
}

</script>

<template>
  <AppTitle />
  <!--  <AppTitle></AppTitle>
    
    <app-title></app-title> -->

  <h3 class="title">Hello</h3>

  <AppBanner></AppBanner>

</template>

<style></style>
