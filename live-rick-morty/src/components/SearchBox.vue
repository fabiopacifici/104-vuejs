<script>
import { state } from '../state.js';

export default {
  name: 'SearchBox',
  emits: ['performSearch'],
  data() {
    return {
      state
    }
  }
}
</script>
<template>
  <div class="container">
    <h6>Filters</h6>
    <div class="searchbox mb-3 d-flex">
      <input class="form-control" type="search" v-model="state.searchText" placeholder="Search a character"
        @keyup.enter="$emit('performSearch')">
        <small></small>


      <select class="form-control" name="status" id="status" @change="$emit('performSearch')" v-model="state.characterStatus">
        <option value="" disabled>Select a status</option>
        <option value="alive">Alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>

      </select>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>