var demoAppNumber1 = new Vue({

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
