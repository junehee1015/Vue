const app = Vue.createApp({
  data() {
    return {
      getGoal: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.getGoal);
    }
  }
});

app.mount('#user-goals');
