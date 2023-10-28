<template>
  <article>
    <img :src="require('../../assets/' + article.img)" :alt="article.tag" class="articles__image">
    <p class="articles__image_text">{{ article.tag }}</p>
    <a href="#" class="articles__article-title">{{ article.title }}</a>
    <div class="articles__bottom_box">
        <p class="articles__date">{{ article.date }}</p>
        <a href="#" class="articles__link"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleCardComp',
  props: {
      article: {
        type: Object,
        required: true
      }
    }
}
</script>

<style scoped lang="scss">
.articles {
    &__image {
        border-radius: 40px 40px 0px 0px;
    }

    &__image_text {
        color: #4D5053;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 249px;
        left: 41px;
        background-color: #FFF;
        width: 124px;
        height: 41px;
        border-radius: 8px 8px 8px 0px;
    }

    &__article-title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31.25px;
        letter-spacing: 0.5px;
        margin-top: 6px;
        margin-bottom: 18px;
        display: block;
        width: 288px;
    }

    &__bottom_box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__date {
        color: #4D5053;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
}
</style>
