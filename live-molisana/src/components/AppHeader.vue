<script>
import AppLogo from './AppLogo.vue';
import AppMenu from './AppMenu.vue';

export default {
  name : 'AppHeader',
  components: {
    AppLogo,
    AppMenu
  }
}
</script>

<template>
    <header id="app_header" class="text-center">

     <AppLogo></AppLogo>
     <AppMenu></AppMenu>

    </header>
    <!-- /#app_header -->
</template>


<!-- app_header style not scoped it takes effect on AppMenu -->
<style lang="scss">
@use '../assets/scss/partials/variables' as *;

#app_header {
  background-color: $molisana_light;
  a.active-item {
    background-color: $molisana_secondary;
  }

}
</style>