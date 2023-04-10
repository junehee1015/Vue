<template>
  <div>
    <active-user
      :users="users"
    ></active-user>
    <!-- <active-user
      v-for="user in users"
      :key="user.name"
      :name="user.name"
      :age="user.age"
    ></active-user> -->
    <user-data
      @user-data="userData"
    ></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    userData(name, age) {
      // input의 value는 String으로 넘어오지만 '+'기호를 사용하면 Number로 Props를 넘길 수 있다.
      this.users.push({
        name: name,
        age: +age,
      })
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>