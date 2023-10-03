import axios from 'axios'
import { reactive } from 'vue'

export const state = reactive({
  /* State */
  base_url: 'https://api.themoviedb.org/3/',
  movies_endpoint: 'search/movie',
  tv_endpoint: 'search/tv',
  api_key: '2359f781fb69650ce40103ad0e605538',
  query: '',
  movies: [],
  tv: [],
  results: {
    movies: '',
    tv: '',
  },

  /* Actions */
  fetchMovies(url) {
    axios.get(url)
      .then(response => {
        console.log(response);
        this.movies = response.data.results
      })
      .catch(error => {
        console.log(error);
      })
  },

  fetchTV(url) {
    axios.get(url)
      .then(response => {
        console.log(response);
        this.tv = response.data.results
      })
      .catch(error => {
        console.log(error);
      })
  },
  getMovies(url) {
    return axios.get(url)
  },
  getShows(url) {
    return axios.get(url)
  },
  fetchResults() {

    const url_movies = this.base_url + this.movies_endpoint + `?api_key=${this.api_key}&query=${this.query}`;

    const url_tv = this.base_url + this.tv_endpoint + `?api_key=${this.api_key}&query=${this.query}`;

    Promise
      .all([this.getMovies(url_movies), this.getShows(url_tv)])
      .then(([movies, tv]) => {
        console.log(movies.data, tv.data);

        console.log(this.results);
        this.results.movies = movies.data
        this.results.tv = tv.data
      })
  }





})