<template>
  <!-- Vue3 부터는 다중 root가 가능하다. (Fragment) -->
  <div>
    <!-- 사용자가 새 강의 목표를 추가할 수 있는 Component -->
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoals">Set Goal</button>

    <!--  dialog 태그로 Alert을 만들어 사용하게 되면 Alert의 위치가 코드 깊은 곳에 있기 때문에 좋지 않다. -->
    <!-- teleport 태그를 사용해서 원하는 곳에 렌더링 할 수 있다. -->
    <!-- teleport 태그는 to 속성을 포함해야한다. to 속성에는 css 선택자를 사용하여 원하는 곳에 렌더링 할 수 있다. -->
    <!-- 작은 최적화 방식이다. 시멘틱 측면에서 올바른 HTML 구조를 만들어 준다. -->
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoals() {
      const enterdValue = this.$refs.goal.value;
      if (enterdValue === "") {
        // 내장되어 있는 알림창은 보기 좋지 않다.
        // alert('목표를 입력해주세요.')
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
