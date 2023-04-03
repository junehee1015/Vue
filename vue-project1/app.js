const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if(randomNumber < 0.5) {
        return 'Finish the course!';
      }else {
        return 'Learn Vue';
      }
    }
  }
});

app.mount('#user-goal');