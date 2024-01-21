<template>
    <div id="blog">
      <HeaderComp/>
      <section class="top-blog">
        <TopImageComp imageLink="project_detail_main.jpg"/>
      </section>
      <section>
        <ProjectDescriptionComp/>
      </section>
      <FooterComp/>
    </div>
  </template>

  <script>
  import HeaderComp from '../comps/HeaderComp.vue'
  import TopImageComp from '../comps/TopImageComp.vue'
  import ProjectDescriptionComp from '../comps/ProjectDescriptionComp.vue'
  import FooterComp from '../comps/FooterComp.vue'


  export default {
    name: 'ProjectDetail',
    components: {
      HeaderComp,
      TopImageComp,
      ProjectDescriptionComp,
      FooterComp
    },
    data () {
      return {
        projects: {
          'bathroom': [
            {
              id: 1,
              img: 'project_page_1.jpg',
              title: 'Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 2,
              img: 'project_page_2.jpg',
              title: 'Modern Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 3,
              img: 'project_page_3.jpg',
              title: 'System Table',
              category: 'Decor / Artchitecture',
            },
            {
              id: 4,
              img: 'project_page_4.jpg',
              title: 'Modern Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 5,
              img: 'project_page_5.jpg',
              title: 'Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 6,
              img: 'project_page_6.jpg',
              title: 'Classic Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 7,
              img: 'project_page_7.jpg',
              title: 'Minimal Bedroom table',
              category: 'Decor / Artchitecture',
            },
            {
              id: 8,
              img: 'project_page_8.jpg',
              title: 'Modern Medroom',
              category: 'Decor / Artchitecture',
            },
          ],
          'bedroom': [
          {
              id: 1,
              img: 'project_page_5.jpg',
              title: 'Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 2,
              img: 'project_page_6.jpg',
              title: 'Classic Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 3,
              img: 'project_page_7.jpg',
              title: 'Minimal Bedroom table',
              category: 'Decor / Artchitecture',
            },
            {
              id: 4,
              img: 'project_page_8.jpg',
              title: 'Modern Medroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 5,
              img: 'project_page_1.jpg',
              title: 'Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 6,
              img: 'project_page_2.jpg',
              title: 'Modern Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 7,
              img: 'project_page_3.jpg',
              title: 'System Table',
              category: 'Decor / Artchitecture',
            },
            {
              id: 8,
              img: 'project_page_4.jpg',
              title: 'Modern Bedroom',
              category: 'Decor / Artchitecture',
            },
          ],
          'kitchan': [
            {
              id: 1,
              img: 'project_page_1.jpg',
              title: 'Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 2,
              img: 'project_page_2.jpg',
              title: 'Modern Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 3,
              img: 'project_page_3.jpg',
              title: 'System Table',
              category: 'Decor / Artchitecture',
            },
            {
              id: 4,
              img: 'project_page_4.jpg',
              title: 'Modern Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 5,
              img: 'project_page_5.jpg',
              title: 'Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 6,
              img: 'project_page_6.jpg',
              title: 'Classic Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 7,
              img: 'project_page_7.jpg',
              title: 'Minimal Bedroom table',
              category: 'Decor / Artchitecture',
            },
            {
              id: 8,
              img: 'project_page_8.jpg',
              title: 'Modern Medroom',
              category: 'Decor / Artchitecture',
            },
          ],
          'livingArea': [
          {
              id: 1,
              img: 'project_page_5.jpg',
              title: 'Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 2,
              img: 'project_page_6.jpg',
              title: 'Classic Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 3,
              img: 'project_page_7.jpg',
              title: 'Minimal Bedroom table',
              category: 'Decor / Artchitecture',
            },
            {
              id: 4,
              img: 'project_page_8.jpg',
              title: 'Modern Medroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 5,
              img: 'project_page_1.jpg',
              title: 'Minimal Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 6,
              img: 'project_page_2.jpg',
              title: 'Modern Bedroom',
              category: 'Decor / Artchitecture',
            },
            {
              id: 7,
              img: 'project_page_3.jpg',
              title: 'System Table',
              category: 'Decor / Artchitecture',
            },
            {
              id: 8,
              img: 'project_page_4.jpg',
              title: 'Modern Bedroom',
              category: 'Decor / Artchitecture',
            },
          ],
        }
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
