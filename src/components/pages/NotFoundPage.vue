<template>
  <div id="not-found">
    <HeaderComp/>
    <NotFoundComp/>
  </div>
</template>

<script>
import HeaderComp from '../comps/HeaderComp.vue'
import NotFoundComp from '../comps/NotFoundComp.vue'


export default {
  name: 'NotFoundPage',
  components: {
    HeaderComp,
    NotFoundComp,
  },
}
</script>

<style lang="scss">
</style>
