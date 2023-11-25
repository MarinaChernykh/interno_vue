<template>
  <div id="app">
    <ProjectDetail/>
  </div>
</template>

<script>
import ProjectDetail from './components/pages/ProjectDetail.vue'


export default {
  name: 'App',
  components: {
    ProjectDetail
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
