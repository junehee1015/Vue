<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetail">{{ visibleDetail ? 'Hide' : 'Show' }} Detail</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="visibleDetail">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>email: </strong> {{ emailAdress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAdress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,   // data type
      required: false, // 필수인지 아닌지
      default: false,  // 기본값
    },
  },

  // emits는 필수는 아니지만 권장사항이다.
  // 어떤 event가 동작했는지, 어떤 event에 data가 잘 넘어갔는지 확인할 수 있다.
  emits: {
    'toggle-favorite': function(id) {
      // return id ? true : false;
      if(id) {
        return true;
      }else {
        console.warn('id data를 넘겨주세요.');
        return false;
      }
    },
  },
  data() {
    return {
      visibleDetail: false,
    };
  },
  methods: {
    toggleDetail() {
      this.visibleDetail = !this.visibleDetail;
    },
    toggleFavorite() {
      // $emit: 자식 Component에서 부모 Component로 data를 보내는 메서드
      this.$emit('toggle-favorite', this.id);
    }
  }
}
</script>