<script>
import AppHeader from './components/AppHeader.vue'
import HeroImage from './components/HeroImage.vue'
import ComicsList from './components/ComicsList.vue'
import AppBanner from './components/AppBanner.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroImage,
    ComicsList,
    AppBanner
  }
}
</script>

<template>
  <AppHeader />
  <main>


    <HeroImage />


    <ComicsList />
    <!-- /.comics_list -->

    <AppBanner />
    <!-- /.banner -->

  </main>
</template>