const { createApp } = Vue
createApp({
  data() {
    return {
      randomNumber: '',
      error: false
    }
  },
  mounted(){
    console.log('hi there');

    console.log(axios);
    /* axios.get returs a promis (una promessa... ti rispondo prima o poi) */
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/int')
    .then(response=>{
      /* The request response is available in the then method */
      console.log(response); // the whole response object
      console.log(response.data); // the whole data response
      console.log(response.data.response);

      this.randomNumber = response.data.response
    })
    .catch(error =>{
      /* Handle a request error */
      console.log(error);
      console.log(error.message);
      this.error = error.message
    })


  }
}).mount('#app')