<template>
    <div id="index">
      <HeaderComp/>
      <MainBannerComp/>
      <FollowProjectsComp/>
      <AchievementsComp/>
      <ArticlesIndexBlock/>
      <FooterComp/>
    </div>
  </template>

  <script>
  import HeaderComp from '../comps/HeaderComp.vue'
  import MainBannerComp from '../comps/MainBannerComp.vue'
  import FollowProjectsComp from '../comps/FollowProjectsComp.vue'
  import AchievementsComp from '../comps/AchievementsComp.vue'
  import ArticlesIndexBlock from '../blocks/ArticlesIndexBlock.vue'
  import FooterComp from '../comps/FooterComp.vue'


  export default {
    name: 'IndexPage',
    components: {
      HeaderComp,
      MainBannerComp,
      FollowProjectsComp,
      AchievementsComp,
      ArticlesIndexBlock,
      FooterComp
    }
  }
  </script>

  <style lang="scss">
  </style>
