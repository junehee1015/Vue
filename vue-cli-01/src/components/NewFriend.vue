<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="friend-name">Name</label>
      <input
        type="text"
        name="friend-name"
        id="friend-name"
        v-model="getName"
      />
    </div>
    <div>
      <label for="friend-name">Phone</label>
      <input
        type="tel"
        name="friend-phone"
        id="friend-phone"
        v-model="getPhone"
      />
    </div>
    <div>
      <label for="friend-name">Email</label>
      <input
        type="email"
        name="friend-email"
        id="friend-email"
        v-model="getEmail"
      />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      getName: "",
      getPhone: "",
      getEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", this.getName, this.getPhone, this.getEmail);
    },
  },
};
</script>
