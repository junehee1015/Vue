<template>
<!-- 
  동일한 style이 여러 곳에서 사용될 때 Component를 따로 만들어 template를 만들 수 있다.
  전역 Component로 만들고 Component태그로 원하는 요소들을 감싸고 따로 만든 template에 slot태그를 사용한다.
  ex)

  -------component.vue-------
  <template-component>
    <h2>제목</h2>
    <p>문단</p>
  </template-component>


  -------TemplateComponent.vue-------
  <div>
    <slot></slot>
  </div>

  v-slot:이름 === #이름
 -->
  <div>
    <!-- 
      $slots의 정보로 header slot이 사용되지 않은 곳을 브라우저에서 안보이도록 처리.
     -->
    <header v-if="$slots.header">
      <!-- Named Slot -->
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots.header);
  }
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>