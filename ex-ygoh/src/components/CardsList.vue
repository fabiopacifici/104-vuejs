<script>
import CardItem from './CardItem.vue'
import { state } from '../state.js'
export default {
  name: 'CardsList',
  components: { CardItem },
  data() {
    return {
      state
    }
  }
}
</script>
<template>
  <section>

    <div class="container">
      <div class="cards">
        <CardItem :card="card" v-for="card in state.cards" />
      </div>
    </div>

  </section>
</template>


<style lang="scss" scoped></style>