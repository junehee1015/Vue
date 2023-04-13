<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <!-- Slot에서 data를 가져오는 방법 -->
    <!-- slotData(커스텀 이름)은 항상 객체이다. -->
    <slot-data #default="slotData">
      <!-- Slot이 하나일 때 template 태그를 생략할 수 있다. -->
      <!-- <template> -->
      <h2>{{ slotData.item }}</h2>
      <p>{{ slotData['anotherProp'] }}</p>
      <!-- </template> -->
    </slot-data>
  </div>
</template>

<script>
// 지역 Component
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components: {
    // 파스칼 케이스, 케밥 케이스 두 가지 다 사용 가능.
    // <TheHeader /> , <the-header></the-header>
    TheHeader,
    BadgeList,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>