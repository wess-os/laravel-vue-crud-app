<template>
  <div class="app">
    <AppSidebar v-if="!hideSidebar" />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
  import AppSidebar from './components/Sidebar.vue';

  export default {

    name: 'App',

    components: {

      AppSidebar,

    },

    computed: {
      hideSidebar() {

        return this.$route.meta.hideSidebar;

      },
    },
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    font-family: Poppins, sans-serif;
  }

  .app {
    display: flex;
    height: 100vh;
  }

  #content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
</style>
