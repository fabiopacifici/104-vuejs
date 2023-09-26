<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header id="app_header">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">

          <img width="50" src="../assets/img/logo.png" alt="">

        </a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav_dc"
          aria-controls="main_nav_dc" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav_dc">
          <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page">Characters</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Comics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Games</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Collectibles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Vieos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fans</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shop</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>

  </header>
</template>



<style lang="scss" scoped></style>