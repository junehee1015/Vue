const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  // data의 데이터를 method를 사용하면 데이터가 변경될 때 method가 실행된다.
  // 인자로 해당 데이터의 값을 받을 수 있다.
  watch: {
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    }
  },

  // 종속 대상이 변경되기 전까지 호출되지 않는다.
  computed: {
    plus() {
      console.log('running...');
      if(this.name === '') {
        return '';
      }
      return this.name + '입니다.'
    },
  },

  // methods는 렌더링이 일어날 때 항상 method를 실행한다.
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
