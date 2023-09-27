<script>
export default {
  name: 'CharacterItem',
  props: {
    character: Object
  }

}
</script>

<template>
  <div class="col">
    <div class="card">
      <img :src='character.image' alt='' />
      <div class="card-body">
        <h4>{{ character.name }}</h4>
        <div class="meta">
          status: {{ character.status }}
          species: {{ character.species }}
        </div>
        <!-- /.meta -->
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>