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

    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>

    <!-- component가 많아지면 코드가 길어진다. -->
    <p>keep alive (X)</p>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>
    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>

    <!-- v-if문을 사용하지 않고 동적으로 component를 사용할 수 있다. -->
    <!-- component 태그에는 항상 is 속성을 포함한다. -->
    <!-- 다른 component가 활성화 될 때 비활성화 된 component의 data는 제거된다. -->
    <!-- 하지만 keep-alive 태그를 사용하여 data가 제거되지 않도록 할 수 있다. -->
    <p>keep alive (O)</p>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
      
  </div>
</template>

<script>
// 지역 Component
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
  components: {
    // 파스칼 케이스, 케밥 케이스 두 가지 다 사용 가능.
    // <TheHeader /> , <the-header></the-header>
    TheHeader,
    BadgeList,
    UserInfo,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selectedComponent: 'manage-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
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