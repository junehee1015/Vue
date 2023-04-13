<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- 현재 component를 사용한 장소에 slot으로 data를 보내는 방법 -->
      <!-- Props와 같이 케밥 케이스는 자동으로 카멜 케이스로 바뀐다. -->
      <slot :item="goal" another-prop="something..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Master Vue'],
    };
  }
}
</script>