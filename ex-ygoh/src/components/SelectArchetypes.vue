<script>
import {state} from '../state.js'

export default {
  name: 'SelectArchetypes',
  emits: ['filter'],
  data(){
    return {
      state
    }
  }
}
</script>

<template>
  <div class="filter">
    <select name="archetype" id="archetype" @change="$emit('filter')" v-model="state.selectedArchetype">
      <option value="">Select an archetype</option>
      <option :value="archetype.archetype_name" v-for="archetype in state.archetypes">{{ archetype.archetype_name }}</option>
    </select>
  </div>
</template>


<style lang="scss" scoped></style>