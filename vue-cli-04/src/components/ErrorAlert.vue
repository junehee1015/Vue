<template>
<!-- dialog 태그를 사용하려면 항상 open 속성을 포함해야한다. -->
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin: 0;
}
</style>