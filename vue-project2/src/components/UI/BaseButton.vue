<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
}
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #640032;
  border: 1px solid #640032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #640032;
  border-color: #640032;
}

.flat {
  background-color: transparent;
  color: #c00;
  border: 1px solid #c00;
}

.flat:hover,
.flat:active {
  color: #fff;
  background-color: #640032;
}
</style>