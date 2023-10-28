<template>
    <article class="article">
        <h1 class="article__title">
            Let’s Get Solution for Building Construction Work
        </h1>
        <img src="../../assets/blog_details_1.jpg" alt="Кухня" class="article__image">
        <div class="article__info">
            <p class="article__info-text">26 December, 2022</p>
            <p class="article__info-text">Interior / Home / Decore</p>
        </div>
        <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
        <p class="article__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
        <div class="article__highlight">
            <div class="article__highlight__content">
                <p class="article__highlight__signs">,,</p>
                <p class="article__highlight__text">The details are not the details.
                    They make the design.</p>
            </div>
        </div>
        <p class="article__title">Design sprints are great</p>
        <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        <ol class="article__list">
            <li class="article__list__item">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            <li class="article__list__item">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            <li class="article__list__item">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
        </ol>
        <img src="../../assets/blog_details_2.jpg" alt="Кухня" class="article__image">
        <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    </article>
</template>

<script>
export default {
name: 'ArticleDetailsComp',
}
</script>

<style scoped lang="scss">
.article {
    width: 800px;

    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 1px;
        width: 684px;
        margin-bottom: 21px;
    }

    &__image {
        width: 100%;
        border-radius: 50px;
        margin-bottom: 46px;
    }

    &__info {
        display: flex;
        justify-content: start;
        gap: 409px;
        margin-bottom: 48px;
    }

    &__info-text {
        color: #4D5053;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.16px;
    }

    &__text {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        margin-bottom: 35px;
    }

    &__highlight {
        width: 100%;
        height: 267px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border-radius: 50px;
        background: #F4F0EC;
        position: relative;
        margin-bottom: 27px;

        &__content {
            position: absolute;
            top: -80px;
        }

        &__signs {
            color: #CDA274;
            text-align: center;
            font-family: DM Serif Display;
            font-size: 200px;
            font-style: italic;
            font-weight: 400;
            line-height: 230px;
            letter-spacing: 4px;
        }

        &__text {
            width: 345px;
            color: #CDA274;
            text-align: center;
            font-family: DM Serif Display;
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 31.25px;
            letter-spacing: 0.5px;
        }
    }

    &__list {
        list-style: none;
        counter-reset: item;
        margin-bottom: 12px;

        &__item {
            color: #4D5053;
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.22px;
            margin-bottom: 32px;
            counter-increment: item;
        }
        &__item:before {
            margin-right: 14px;
            content: counter(item);
            color: #CDA274;
            font-family: DM Serif Display;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0.4px;
        }
    }
}
</style>
