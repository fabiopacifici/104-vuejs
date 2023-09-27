import {reactive} from 'vue'
import axios from 'axios';

export const state = reactive({
  // State
  base_url: 'https://rickandmortyapi.com/api/character',
  characters: null,
  info: null,
  loading: true,
  searchText: '',
  characterStatus: '',

  // Actions
  fetchData(url) {

    //console.log(this, this.base_url);
    axios
      .get(url)
      .then(response => {
        console.log(response);
        this.characters = response.data.results
        this.info = response.data.info
      })
      .catch(error => {
        console.log('Error:');
        console.error(error);
      })
  }
})