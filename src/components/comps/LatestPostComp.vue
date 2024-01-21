<template>
    <section class="latest center">
        <p class="latest__title">Latest Post</p>
        <div class="latest__card">
            <img src="../../assets/blog_article_top.jpg" alt="Мраморная кухня" class="latest__image">
            <div class="latest__content">
                <p class="latest__subtitle">
                    Low Cost Latest Invented Interior Designing Ideas
                </p>
                <p class="latest__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.
                </p>
                <p class="latest__text">
                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                </p>
                <div class="latest__bottom">
                    <p class="latest__date">26 December, 2022 </p>
                    <router-link to="/blog/detail" class="latest__link"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                        <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
name: 'LatestPostComp'
}
</script>

<style scoped lang="scss">
.latest {
    margin-top: 200px;
    margin-bottom: 60px;

    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 1px;
        margin-bottom: 27px;
    }

    &__card {
        width: 1200px;
        padding: 22px;
        display: flex;
        gap: 65px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    }

    &__image {
        border-radius: 50px;
    }

    &__content {
        width: 469px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__subtitle {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31.25px;
        letter-spacing: 0.5px;
        margin-bottom: 22px;
    }

    &__text {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        margin-bottom: 41px;
    }

    &__bottom {
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
