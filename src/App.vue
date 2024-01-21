<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$router.push({name: 'home'})
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
