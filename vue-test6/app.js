const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  // computed를 사용하여 추가될 class 로직을 다양하게 만들 수 있다.
  computed: {
    boxAClasses() {
      return { selected: this.boxASelected };
    },
    boxBClasses() {
      return { selected: this.boxBSelected };
    },
    boxCClasses() {
      return { selected: this.boxCSelected };
    }
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
