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
  <input type="search" v-model="state.query">
  <button @click="getData">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
      viewBox="0 0 460 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
    </svg>
    Search
  </button>

  <!-- Movies 
  <h2>Movies</h2>
  <ul>
    <li v-for="movie in state.movies">
      {{ movie.original_title }}
      {{ movie.title }}

       {{ movie.original_language }} 
       <img :src="`https://flagsapi.com/${movie.original_language.toUpperCase()}/flat/64.png`" :alt="movie.original_language"> 
       


      <img :src="getFlagImage(movie.original_language)" alt="" v-if="isFlag(movie.original_language)">
      <span v-else>
        Lang: {{ movie.original_language }}
      </span>



      {{ movie.vote_average }}
    </li>
  </ul>
-->
  <!-- TV
  <h2>TV</h2>
  <ul>
    <li v-for="tv_show in state.tv">
      {{ tv_show.original_name }}
      {{ tv_show.name }}

      {{ tv_show.original_language }}
      <img :src="`https://flagsapi.com/${tv_show.original_language.toUpperCase()}/flat/64.png`" :alt="tv_show.original_language"> 



      <img :src="getFlagImage(tv_show.original_language)" alt="" v-if="isFlag(tv_show.original_language)">
      <span v-else>
        Lang: {{ tv_show.original_language }}
      </span>



      {{ tv_show.vote_average }}
    </li>
  </ul>
 -->


  <!-- Option 2 Movies/TV -->

  <section v-for="(records, key) in state.results">
    <h2>
      {{ key }}
    </h2>

    <div v-for="item in records.results">

      <template v-if="key === 'movies'">
        {{ item.original_title }}
        {{ item.title }}
      </template>
      <template v-else>
        {{ item.original_name }}
        {{ item.name }}
      </template>

      <img :src="getFlagImage(item.original_language)" alt="" v-if="isFlag(item.original_language)">
      <span v-else>
        Lang: {{ item.original_language }}
      </span>



      {{ item.vote_average }}

    </div>

  </section>
</template>

<style></style>
