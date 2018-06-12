import axios from 'axios';
import Vue from '$vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      items: []
    },
    created: function() {
      const vm = this;
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function (response){
          vm.items = response.data.bpi;
          console.log(vm.items);
        })
      }
  })
})
