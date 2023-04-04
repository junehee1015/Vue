const app = Vue.createApp({
  data() {
    return {
      text1: '',
      text2: ''
    };
  },
  methods: {
    showAlert() {
      alert('Show Alert');
    },
    output1(e) {
      this.text1 = e.target.value;
    },
    output2(e) {
      this.text2 = e.target.value;
    }
  }
});

app.mount('#assignment');