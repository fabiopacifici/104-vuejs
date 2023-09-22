const { createApp } = Vue
createApp({
  data() {
    return {
      base_url: 'https://flynn.boolean.careers/exercises/api/random/mail',
      limit: 10,
      emails: []
    }
  },
  methods:{

    fetchEmailAddress(){

      for (let i = 0; i < this.limit; i++) {

        axios
          .get(this.base_url)
          .then(response => {
            console.log(response.data.response);
            this.emails.push(response.data.response)
          })

      }
    }

  },
  mounted() {

    this.fetchEmailAddress()

  }
}).mount('#app')


/* 

Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/