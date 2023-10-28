<template>
    <section class="articles center">
        <h2 class="articles__title">Articles & News</h2>
        <p class="articles__subtitle center">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        <div class="articles__box">
            <ArticleCardComp v-for="article in articles" :key="article.id" :article="article" class="articles__card"/>
        </div>
    </section>
</template>

<script>
import ArticleCardComp from '../comps/ArticleCardComp.vue'

export default {
name: 'ArticlesIndexBlock',
components: {
    ArticleCardComp
  },
data () {
    return {
        articles: [
              {
                id: 1,
                img: 'article_1.jpg',
                tag: 'Kitchan Design',
                title: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022'
              },
              {
                id: 2,
                img: 'article_2.jpg',
                tag: 'Living Design',
                title: 'Low Cost Latest Invented Interior Designing Ideas',
                date: '22 December, 2022'
              },
              {
                id: 3,
                img: 'article_3.jpg',
                tag: 'Interior Design',
                title: 'Best For Any Office & Business Interior Solution',
                date: '25 December, 2022'
              },
        ]
    }
}
}
</script>

<style scoped lang="scss">
.articles {
    margin-top: 96px;
    margin-bottom: 96px;

    &__title {
        margin-bottom: 12px;
        color: #292F36;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 1px;
    }

    &__subtitle {
        width: 811px;
        margin-bottom: 22px;
        color: #4D5053;
        text-align: center;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
    }

    &__box {
        display: flex;
        justify-content: flex-start;
        gap: 27px;
        flex-wrap: wrap;
    }

    &__card {
        width: 382px;
        height: 521px;
        padding: 21px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        position: relative;
    }

    &__card:nth-child(2n) {
        background-color: #F4F0EC;
    }
}
</style>
