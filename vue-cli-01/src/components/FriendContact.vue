<template>
  <li>
    <h2>{{ name }} {{ isFavoriteData ? '(Favorite)' : '' }}</h2>
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
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAdress',
  //   // 받아온 Props의 값은 변경할 수 없다.
  //   // Vue는 단방향 데이터 플로우의 개념을 사용하기 때문이다.
  //   // 그러나 다른 데이터에 넣어서 값을 변경하여 사용하는 것은 가능하다.
  //   'isFavorite'
  // ],
  props: {
    name: String,         // 축약
    phoneNumber: String,

    emailAdress: {        // 상세
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,                // data type
      required: false,             // 필수인지 아닌지
      default: false,                // 기본값
    },
  },
  data() {
    return {
      visibleDetail: false,
      isFavoriteData: this.isFavorite,
    };
  },
  methods: {
    toggleDetail() {
      this.visibleDetail = !this.visibleDetail;
    },
    toggleFavorite() {
      this.isFavoriteData = !this.isFavoriteData;
    }
  }
}
</script>