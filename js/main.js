/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #1 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp1 = new Vue({

  el: '#demo-app-1',

  data: {
    msg: 'Hello, world!'
  },

  methods: {
    setMessage: function(event) {
      this.msg = event.target.value;
    }
  }

})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #2 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var userDataForApp2 = {
  name: 'Kate',
  country: 'Russia',
  city: 'Perm'
}

var demoApp2 = new Vue({
  el: '#demo-app-2',

  data: userDataForApp2,

  methods: {
    factorial: function(number) {
      var result = 1;
      for(var i = 1; i <= number; i++) {
        result = result * i;
      }
      return result;
    }
  }
})

demoApp2.city = 'Moscow';

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #3 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
