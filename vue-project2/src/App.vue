<template>
  <ul>
    <li></li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      storedResource: [
        {
          id: 'official-guide',
          title: 'Ofiicial Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        },
      ],
    };
  },
}
</script>

<style>

</style>
