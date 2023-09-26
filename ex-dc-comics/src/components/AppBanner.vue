<script>
export default {
  name: 'AppBanner',
  data() {
    return {
      items: [
        {
          icon: 'buy-comics-digital-comics.png',
          text: 'Digital Comics'
        },
        {
          icon: 'buy-comics-merchandise.png',
          text: 'DC Merchandise'
        },
        {
          icon: 'buy-comics-subscriptions.png',
          text: 'Subscription'
        },
        {
          icon: 'buy-comics-shop-locator.png',
          text: 'Comic Shop locator'
        },
        {
          icon: 'buy-dc-power-visa.svg',
          text: 'DC Power Visa'
        }
      ]
    }
  },
  methods: {
    getImagePath(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href
    }
  }
}
</script>
<template>
  <div class="banner">

    <div class="container">
      <div class="row row-cols-2 row-cols-lg-5">

        <div class="col" v-for="item in items">
          <div class="item d-flex align-items-center gap-1">
            <img :src="getImagePath(item.icon)" alt="">
            <span class="">{{item.text}}</span>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped></style>