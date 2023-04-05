const app = Vue.createApp({
  data() {
    return {
      getUserClass: '',
      isVisible: true,
      inlineBgColor: '',
    };
  },
  computed: {
    setClass() {
      return {
        user1: this.getUserClass === 'user1',
        user2: this.getUserClass === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
});

app.mount('#assignment');