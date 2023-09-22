<script>
import AppLogo from './AppLogo.vue';
export default {
  name: 'AppFooter',
  components: {
    AppLogo
  }
}
</script>

<template>
  <footer id="app_footer">

    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">

        <div class="col">
          <AppLogo></AppLogo>
        </div>
        <div class="col">

          <h3>Panificio</h3>
          <ul class="list-unstyled">
            <li>Lorem.</li>
            <li>Dignissimos.</li>
            <li>Tenetur?</li>
            <li>Amet!</li>
          </ul>

        </div>
        <div class="col">
          <h3>Pasta</h3>
          <ul class="list-unstyled">
            <li>Lorem.</li>
            <li>Dignissimos.</li>
            <li>Tenetur?</li>
            <li>Amet!</li>
          </ul>
        </div>

      </div>
    </div>



  </footer>
  <!-- /#app_footer -->
</template>



<style lang="scss" scoped>

#app_footer {
  padding: 2rem 0;
  background-image: url('../assets/img/footer-montagne-bottom.jpg');
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>