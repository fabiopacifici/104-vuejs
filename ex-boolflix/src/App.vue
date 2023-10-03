<script>
import { state } from './state.js';
export default {
  name: 'App',
  data() {
    return {
      state,
      languages: ['it', 'en', 'fr']
    }
  },
  methods: {
    getData() {
      /* option 1     
      console.log('filter all movies/TV');
          const url_movies = this.state.base_url + this.state.movies_endpoint + `?api_key=${this.state.api_key}&query=${this.state.query}`;
          console.log(url_movies);
          this.state.fetchMovies(url_movies) */

      /*  const url_tv =  this.state.base_url + this.state.tv_endpoint + `?api_key=${this.state.api_key}&query=${this.state.query}`;
       this.state.fetchTV(url_tv) */

      /* Option 2 - advanced */
      this.state.fetchResults();
    },
    isFlag(lang) {
      if (this.languages.includes(lang)) {
        return true
      }
      return false
    },
    getFlagImage(lang) {
      return new URL(`./assets/img/${lang}.png`, import.meta.url).href
    },
    getPosterPath(name) {
      return `https://image.tmdb.org/t/p/w342/${name}`
    },
    getVote(vote) {
      return Math.ceil(vote / 2)
    }
  },

  /* 
  All records will be on page load
  mounted(){
    const url = this.state.base_url + `?api_key=${this.state.api_key}&query=Matrix`;
    console.log(url);
    this.state.fetchMovies(url)
  } */
}
</script>

<template>
  <header class="d-flex justify-content-between p-3">

    <div class="logo text-danger">
      FABIOFLIX
    </div>

    <div class="search_box input-group mb-3 w-auto">
      <input class="form-control" type="search" v-model="state.query" @keyup.enter="getData"
        aria-describedby="searchBarElement" placeholder="Search movies or tv shows">
      <span class="input-group-text flex-grow-0" id="searchBarElement">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
          viewBox="0 0 460 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
        </svg>
      </span>
    </div>

  </header>

  <section :class="key + '-section'" v-for="(records, key) in state.results" v-show="state.results.movies != ''">

    <div class="container">
      <h2 class="text-uppercase text-muted fs-5 mt-4 mb-2">
        {{ key }}
      </h2>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
        <div class="col" v-for="item in records.results">
          <div class="card h-100 position-relative border-0">

            <img class="poster card-img-top" :src="getPosterPath(item.poster_path)" alt="" v-if="item.poster_path">
            <img class="poster card-img-top" width="342" src="./assets/img/poster_placeholder.png" v-else>

            <div class="card-body position-absolute">
              <template v-if="key === 'movies'">
                <h6 class="text-muted">
                  {{ item.original_title }}
                </h6>
                <h3>
                  {{ item.title }}
                </h3>
              </template>
              <template v-else>
                <h6 class="text-muted">
                  {{ item.original_name }}
                </h6>
                <h3>
                  {{ item.name }}
                </h3>
              </template>

              <img width="64" :src="getFlagImage(item.original_language)" alt="" v-if="isFlag(item.original_language)">
              <span v-else>
                Lang: {{ item.original_language }}
              </span>

              {{ item.vote_average }}

              <div class="rating d-flex">

                <template v-for="star in getVote(item.vote_average)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </template>

                <template v-for="empty_star in 5 - getVote(item.vote_average)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
                    viewBox="0 0 16 16">
                    <path
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </template>
              </div>


              <div class="overview">
                {{ item.overview }}
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>



  </section>
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
