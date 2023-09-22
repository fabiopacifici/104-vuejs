<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
    data() {
        
        return {
            message: 'Hello Vuejs+Vite!'
        };
    },
    components: { HelloWorld }
}
</script>

<template>
  <h1>{{message}}</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsam obcaecati. Provident totam facilis porro eligendi ex officiis, eos ipsam eius nam magni, odit dolore non nostrum molestias aperiam cum?</p>

 <hello-world/>
  
</template>

<style></style>
