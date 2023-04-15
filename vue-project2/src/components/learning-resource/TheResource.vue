<template>
  <base-card>
    <base-button @click="selectedTab('stored-resource')" :mode="storedResButtonMode">Stored Resource</base-button>
    <base-button @click="selectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="getComponent"></component>
  </keep-alive>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      getComponent: 'stored-resource',
      storedResources: [
        {
          id: "official-guide",
          title: "Ofiicial Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.getComponent === 'stored-resource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.getComponent === 'add-resource' ? null : 'flat';
    },
  },  
  methods: {
    selectedTab(tab) {
      this.getComponent = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };

      this.storedResources.unshift(newResource);
      this.getComponent = 'stored-resource';
    },
    removeResource(id) {
      const resIndex = this.storedResources.findIndex(res => res.id === id);
      this.storedResources.splice(resIndex, 1)
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  gap: 10px;
}
button {
  border: 0;
}
</style>