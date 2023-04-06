const app = Vue.createApp({
  data() {
    return {
      getTask: '',
      tasks: [],
      showTask: true,
    };
  },
  computed: {
    btnCaption() {
      return this.showTask ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.getTask);
    },
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    toggleList() {
      this.showTask = !this.showTask;
    }
  }
});

app.mount('#assignment');