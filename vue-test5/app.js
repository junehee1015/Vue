const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(value) {
      if(value >= 37) {
        // const that = this;
        // setTimeout(function() {
        //   that.counter = 0;
        // }, 1000);
        setTimeout(() => {
          this.counter = 0;
        }, 1000);
      }
    }
  },
  computed: {
    result() {
      if(this.counter === 0) {
        return this.counter;
      }else if(this.counter < 37) {
        return this.counter + ' ' + 'Not there yet';
      }else {
        return this.counter + ' ' + 'Too much!';
      }
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  }
});

app.mount('#assignment');