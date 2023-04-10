<template>
  <section>
    <form @submit.prevent="setUserData">
      <input type="text" placeholder="Your Name" v-model="getName">
      <input type="text" placeholder="Your Age" v-model="getAge">
      <button>Add User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['user-data'],
  data() {
    return {
      getName: '',
      getAge: '',
    };
  },
  methods: {
    setUserData() {
      this.$emit('user-data', this.getName, this.getAge);
    }
  }
}
</script>