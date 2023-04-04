const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.name;
    },
    // 브라우저가 초기화되지 않는 방법 1
    // submitForm(e) {
    //   e.preventDefault();
    // },

    // 브라우저가 초기화되지 않는 방법 2(이벤트 수식어)
    submitForm() {},

    setName(e, text) {
      this.name = e.target.value + text;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
