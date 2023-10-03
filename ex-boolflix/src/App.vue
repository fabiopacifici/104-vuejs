<script>
import AppHeader from './components/AppHeader.vue';
import { state } from './state.js';
export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      state,
      languages: ['it', 'en', 'fr']
    }
  },
  methods: {
    
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

  <AppHeader></AppHeader>
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
