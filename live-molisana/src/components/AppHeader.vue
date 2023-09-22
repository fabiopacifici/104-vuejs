<script>
import AppLogo from './AppLogo.vue';
export default {
  name : 'AppHeader',
  components: {
    AppLogo
  }
}
</script>

<template>
    <header id="app_header" class="text-center">

     <AppLogo></AppLogo>
      <nav class="navbar navbar-expand justify-content-center">
          <div class="nav navbar-nav">
              <a class="nav-item nav-link" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
              <a class="nav-item nav-link" href="#">About</a>
              <a class="nav-item nav-link active-item"  href="#">Products</a>
              <a class="nav-item nav-link" href="#">Contacts</a>

          </div>
      </nav>

    </header>
    <!-- /#app_header -->
</template>



<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#app_header {
  background-color: $molisana_light;
  a.active-item {
    background-color: $molisana_secondary;
  }

}
</style>