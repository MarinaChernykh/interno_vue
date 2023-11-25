<template>
  <div id="blog">
    <HeaderComp/>
    <NotFoundComp/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from '../comps/HeaderComp.vue'
import NotFoundComp from '../comps/NotFoundComp.vue'
import FooterComp from '../comps/FooterComp.vue'


export default {
  name: 'NotFoundPage',
  components: {
    HeaderComp,
    NotFoundComp,
    FooterComp
  },
}
</script>

<style lang="scss">
</style>
