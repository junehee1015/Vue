const app = Vue.createApp({
  data() {
    return {
      name: '조준희',
      age: 29,
      imgSrc: 'vue.png'
    };
  },
  methods: {
    in5YearsAge() {
      return this.age + 5;
    },
    randomNum() {
      return Math.random();
    }
  }
});

app.mount('#assignment');