<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      menu: [
        {
          href: '#',
          text: 'Home',
          current: false
        },
        {
          href: '#',
          text: 'About',
          current: false
        },
        {
          href: '#',
          text: 'Product',
          current: true
        },
        {
          href: '#',
          text: 'Contacts',
          current: false
        }
      ]
    }
  }
}
</script>
<template>
  <nav class="navbar navbar-expand justify-content-center">
    <div class="nav navbar-nav">
      <a :href="item.href" class="nav-item nav-link" :class="{ 'active-item': item.current }" v-for="item in menu">
        {{ item.text }}
      </a>
    </div>
  </nav>
</template>


<style lang="scss" scoped>

nav {
  a {
    color: red;
    
    &:hover {
      color: pink;
    }
  }
}



</style>