<template>
  <section>
    <ul>
      <li v-for="user in users" :key="user.name">
        <h2>{{ user.name }}</h2>
        <h3>{{ user.age }} Years</h3>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    }
    // name: {
    //   type: String,
    //   required: true,
    // },
    // age: {
    //   type: Number,
    //   required: true,
    // }
  },
}
</script>
