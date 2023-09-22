<script>
export default {
  name: 'AppTitle',

  data(){
    return {
      message: 'hello Vite! Component'
    }
  }
}
</script>

<template>
  <h1 class="title">{{ message }}</h1>
</template>

<style scoped>
.title {
  color: red;
}
</style>
