const app = Vue.createApp({
  data() {
    return {
      htmlCode: '<h3>Vue data 내에서 HTML태그 사용</h3>',
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if(randomNumber < 0.5) {
        return this.courseGoalA;
      }else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');