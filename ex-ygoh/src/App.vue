<script>
import {state} from './state.js'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      state,
    }
  },
 
  mounted() {
    this.state.fetchCards(this.state.base_url);

    this.state.fetchArchetypes(this.state.archetypes_url)

  }
}

</script>

<template>


  <AppHeader />

  <AppMain />

</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: white;
  box-shadow: 0 0 5px #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  padding: 1rem;

  nav {
    a {
      text-decoration: none;
      color: #333;
    }
  }
}

main {

  .container {
    width: 80%;
    max-width: 1140px;
    margin: auto;
  }

  .cards {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .card {
      width: calc(100% / 5 - 1rem);
      padding: 0.5rem;
      background-color: orange;
      position: relative;
      img {
        max-width: 100%;
      }
      .card-body {
        padding: 0.5rem;
        .title {
          color: #e3e3e3
        }
        .meta {
          position: absolute;
          bottom: 1rem;
          right: -0.5rem;
          background-color: #333;
          color: white;
          font-size: 10px;
          border-radius: 10px;
          display: inline-block;
          padding: 0.25rem 0.5rem;
        }
      }

    }

  }
}
</style>
