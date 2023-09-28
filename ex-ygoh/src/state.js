import { reactive } from 'vue'
import axios from 'axios'
export const state = reactive({
  /* State */
  mock_server: 'https://0e8d2c2e-7c7a-4bab-baaa-235c7b8d1165.mock.pstmn.io/',
  archetypes_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  selectedArchetype: '',
  cards: [],
  archetypes: [],
  error: '',

  /* Actions */
  fetchCards(url) {
    axios.get(url)
      .then(respo => {
        console.log(respo);
        this.cards = respo.data.data;
      }).catch(error => {
        console.error(error.message);
        this.error = error.message;
      })
  },
  fetchArchetypes(url){
    axios.get(url)
      .then(res => {
        console.log(res.data);
        this.archetypes = res.data
      }).catch(err => {
        console.error(err.message);
      })
  }
})