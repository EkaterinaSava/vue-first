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
var demoApp3 = new Vue({
  el: '#demo-app-3',

  data: {
    linkAddress: 'https://www.google.ru',
    linkText: 'Это ссылка на Google'
  }
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #4 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp4 = new Vue({
  el: '#demo-app-4',

  data: {
    name: 'Kate',
    country: 'Russia'
  },

  template: '<div>Name: {{ name }}, Country: {{ country }}</div>'
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #5 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp5 = new Vue({
  el: '#demo-app-5',

  data: {
    counter: 0
  },

  methods: {

    increase: function() {
      this.counter++;
    },

    decrease: function() {
      if ( this.counter > 0 ) {
        this.counter--;
      }
    }
  }
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #6-1 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp6part1 = new Vue({
  el: '#demo-app-6-1',

  data: {
    name: 'Ekaterina'
  }
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #6-2 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp6part2 = new Vue({
  el: '#demo-app-6-2',

  data: {
    number: 1
  },

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


/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #7 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp7part1 = new Vue({
  el: '#demo-app-7-1',

  data: {
    name: 'Kate',
    age: '17'
  },

  computed: {
    checkAccess: function() {
      if ( this.age >= 18 ) {
        return 'разрешен';
      }
      else {
        return 'запрещен';
      }
    }
  }
})

var demoApp7part2 = new Vue({
  el: '#demo-app-7-2',

  data: {
    firstName: 'Екатерина',
    middleName: 'Олеговна',
    lastName: 'Сава'
  },

  computed: {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
      },

      // не очень я поняла, зачем это нужно и что с этим делать
      // не доросла еще, видимо. ладно, может потом пойму
      set: function(newFullName) {
        var names = newFullNameSplit.split[' '];
        this.firstName = names[0];
        this.middleName = names[1];
        this.lastName = names[2];
      }
    }
  }
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #7 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */


/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #7 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */


/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #7 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
