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
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
