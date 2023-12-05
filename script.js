'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      list: [],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.apiUrl).then((results) => {
        this.list.push(results.data.response);
      });
    }
  },
}).mount('#app');
