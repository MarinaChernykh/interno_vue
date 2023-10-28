<template>
    <div id="blog">
      <HeaderComp/>
      <section class="top-blog">
        <TopImageComp imageLink="blog_main.jpg"/>
        <TopTitleComp title="Articles & News" subtitle="Home / Blog"/>
      </section>
      <LatestPostComp/>
      <ArticlesBlogBlock :articles="articles"/>
      <FooterComp/>
    </div>
  </template>

  <script>
  import HeaderComp from '../comps/HeaderComp.vue'
  import TopImageComp from '../comps/TopImageComp.vue'
  import TopTitleComp from '../comps/TopTitleComp.vue'
  import LatestPostComp from '../comps/LatestPostComp.vue'
  import ArticlesBlogBlock from '../blocks/ArticlesBlogBlock.vue'
  import FooterComp from '../comps/FooterComp.vue'

  export default {
    name: 'BlogPage',
    components: {
      HeaderComp,
      TopImageComp,
      TopTitleComp,
      LatestPostComp,
      ArticlesBlogBlock,
      FooterComp
    },
    data() {
    return {
      articles: [
        {
          id: 1,
          img: 'article_1.jpg',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          tag: 'Kitchen'
        },
        {
          id: 2,
          img: 'article_2.jpg',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '22 December, 2022',
          tag: 'Living'
        },
        {
          id: 3,
          img: 'article_3.jpg',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December, 2022',
          tag: 'Interior'
        },
        {
          id: 4,
          img: 'article_4.jpg',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
          tag: 'Kitchen'
        },
        {
          id: 5,
          img: 'article_5.jpg',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '22 December, 2022',
          tag: 'Living'
        },
        {
          id: 6,
          img: 'article_6.jpg',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December, 2022',
          tag: 'Interior'
        },
      ],
    }
  },
  }
  </script>

  <style lang="scss">
  .top-blog {
    display: flex;
    justify-content: center;
    background-color: rgb(226, 226, 226);
    position: relative;
}
  </style>
