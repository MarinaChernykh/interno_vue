<template>
    <div id="blog">
      <HeaderComp/>
      <section class="top-blog">
        <TopImageComp imageLink="blog_details_main.jpg"/>
      </section>
      <section class="blog-details-content center">
        <ArticleDetailsComp/>
        <TagFilterComp :buttons="buttons"/>
      </section>
      <ArticlesBlogBlock :articles="filtered_articles"/>
      <FooterComp/>
    </div>
  </template>

<script>
import HeaderComp from '../comps/HeaderComp.vue'
import TopImageComp from '../comps/TopImageComp.vue'
import ArticleDetailsComp from '../comps/ArticleDetailsComp.vue'
import TagFilterComp from '../comps/TagFilterComp.vue'
import ArticlesBlogBlock from '../blocks/ArticlesBlogBlock.vue'
import FooterComp from '../comps/FooterComp.vue'


export default {
  name: 'BlogDetailsPage',
  components: {
    HeaderComp,
    TopImageComp,
    ArticleDetailsComp,
    TagFilterComp,
    ArticlesBlogBlock,
    FooterComp
  },
  data () {
    return {
      buttons: [
        {
          id: 1,
          name: 'Kitchen',
          is_active: false
        },
        {
          id: 2,
          name: 'Bedroom',
          is_active: false
        },
        {
          id: 3,
          name: 'Living',
          is_active: false
        },
        {
          id: 4,
          name: 'Architecture',
          is_active: false
        },
        {
          id: 5,
          name: 'Kitchen Planning',
          is_active: false
        },
        {
          id: 6,
          name: 'Interior',
          is_active: false
        },
      ],
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

  computed: {
    filtered_articles() {
      let active_buttons_names = []
      active_buttons_names = this.buttons.filter((button) => button.is_active).map((button) => button.name);
      let filtered_articles = [];
      this.articles.forEach(function(article){
          if (active_buttons_names.indexOf(article.tag) != -1) {
            filtered_articles.push(article);
          }
      })
      if (active_buttons_names.length === 0) {
          filtered_articles = this.articles.slice(0);
      }
      return filtered_articles;
    }
  }
}
</script>

<style lang="scss">
  .top-blog {
    display: flex;
    justify-content: center;
    background-color: rgb(226, 226, 226);
    position: relative;
}
.blog-details-content {
    display: flex;
    gap: 57px;
    margin-top: 200px;
    margin-bottom: 96px;
}
</style>
