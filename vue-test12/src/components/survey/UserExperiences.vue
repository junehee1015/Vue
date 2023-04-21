<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <!-- HTTP 요청 중 표시 될 element -->
      <!--
        순서
        Loading -> Error -> No data -> Success
      -->
      <p v-if="isLoding">Loding...</p>
      <p v-else-if="!isLoding && error">{{ error }}</p>
      <p v-else-if="!isLoding && (!results || results.length === 0)">Not have data.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoding: false, // HTTP 요청 시간 동안 element를 보여줄 변수
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoding = true;
      this.error = null;
      // data를 가져와야하기 때문에 GET
      // GET은 default 값이기 때문에 method를 생략해도 된다.
      fetch(
        'https://vue-http-demo-bb589-default-rtdb.firebaseio.com/surveys.json'
      )
        .then((response) => {
          // 요청이 성공적인지 아닌지 ok property로 확인할 수 있다.
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoding = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        // Error 관리
        .catch((error) => {
          console.log(error);
          this.isLoding = false;
          this.error = error + ' / Please try again later.';
        });
    },
  },
  // 앱이 실행 되었을 때 data를 바로 요청하여 보여줄 수 있게 한다.
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
