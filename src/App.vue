<template>
  <div id="app">
    <ProjectPage/>
  </div>
</template>

<script>
import ProjectPage from './components/pages/ProjectPage.vue'


export default {
  name: 'App',
  components: {
    ProjectPage
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

body {
    font-family: 'Jost', sans-serif;
    font-style: normal;
}

.center {
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
}
</style>
