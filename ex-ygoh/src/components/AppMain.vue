<script>
import { state } from '../state.js'

import SelectArchetypes from './SelectArchetypes.vue'
import CardsList from './CardsList.vue'
export default {
  components: {
    SelectArchetypes,
    CardsList
  },
  data() {
    return {
      state,
    }
  },
  methods: {
    filterByArchetype() {
      console.log('filtering...');
      const url = this.state.base_url + `&archetype=${this.state.selectedArchetype}`
      this.state.fetchCards(url);
    },
  },

}
</script>
<template>
  <main>

    <SelectArchetypes @filter="filterByArchetype" />

    <CardsList />
  </main>
</template>


<style lang="scss" scoped></style>