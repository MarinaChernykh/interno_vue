<template>
  <div id="app">
    <BlogDetailsPage/>
  </div>
</template>

<script>
import BlogDetailsPage from './components/pages/BlogDetailsPage.vue'


export default {
  name: 'App',
  components: {
    BlogDetailsPage
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
