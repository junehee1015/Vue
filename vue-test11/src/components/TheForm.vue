<template>
  <form @submit.prevent="submiyForm">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="userName"/>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <!-- v-model은 input의 data type이 Number인지 확인 후 String에서 Number로 변환해준다. -->
      <!-- v-model을 사용한 숫자 data는 Number type이지만 ref를 사용한 숫자 data는 String이다. -->

      <!-- v-model.number=""를 사용하면 다른 type을 Number type으로 강제 변환할 수 있다. -->
      <!-- 
        v-model의 수식어
        v-model.lazy : 바인딩한 property를 업데이트하는 방법을 바꿀 수 있다.
        v-model.trim : 입력된 text의 앞과 뒤에 붙은 공백을 제거해준다.
      -->
      <input id="age" name="age" type="number" v-model="userAge"/>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <!-- 드롭다운(select)는 option을 선택할 때 value의 값이 v-model에 저장된다. -->
      <!-- 선택하는 것이기 때문에 value의 값 중 하나를 기본 값으로 정하는 것이 좋다. -->
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <!-- checkbox 또는 radio를 사용할 때 value 속성이 포함되어 있어야 한다. -->
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <!-- checkbox가 여러개 있을 때 배열로 값을 받는다. -->
      <!-- data에 값을 배열로 초기화. -->
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest"/>
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interest"/>
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interest"/>
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <!-- radio의 특성상 한 개의 값을 받을 수 있기 때문에 null로 초기화. -->
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how"/>
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how"/>
        <label for="how-other">Other</label>
      </div>
    </div>

    <!-- checkbox가 하나일 때에는 값이 Boolean으로 나타난다. -->
    <!-- data 값을 true / fasle로 초기화.  -->
    <div class="form-control">
      <input type="checkbox" id="confirm-terms" name="confirm-terms">
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'google',
      interest: [],
      how: null,
      confirm: false,
    };
  },
  methods: {
    submiyForm() {
      console.log(this.interest);
      console.log(this.how);
    }
  },
}
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>