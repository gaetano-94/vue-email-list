'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: 'https://flynn.boolean.careers/exercises/api/random/mail',
    };
  },
}).mount('#app');

axios
  .get('https://flynn.boolean.careers/exercises/api/random/mail')
  .then((response) => {
    console.log(response.data);
  });
