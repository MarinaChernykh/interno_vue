<template>
    <section class="articles center">
        <h2 class="articles__blog-title">Articles & News</h2>
        <div class="articles__box">
            <ArticleCardComp v-for="article in articles" :key="article.id" :article="article" class="articles__card"/>
        </div>
        <PaginatorComp/>
    </section>
</template>

<script>
import ArticleCardComp from '../comps/ArticleCardComp.vue'
import PaginatorComp from '../comps/PaginatorComp.vue'

export default {
name: 'ArticlesBlogBlock',
components: {
    ArticleCardComp,
    PaginatorComp
  },
props: ['articles']
}
</script>

<style scoped lang="scss">
.articles {
    margin-top: 96px;
    margin-bottom: 96px;

    &__blog-title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 1px;
        margin-bottom: 30px;
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
