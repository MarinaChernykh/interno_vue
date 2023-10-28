<template>
  <section class="top center">
    <img src="../../assets/top_image.jpg" alt="Уютная комната" class="top__image" />
    <div class="top__content">
      <h1 class="top__title">Let Your Home Be Unique</h1>
      <p class="top__subtitle">
        There are many variations of the passages of lorem Ipsum
        fromavailable, majority.
      </p>
      <a href="#" class="top__button">Get Started  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
        </svg></a>
    </div>
  </section>
</template>

<script>
export default {
name: 'MainBannerComp',
}
</script>

<style scoped lang="scss">
.top {
    position: relative;
    margin-bottom: 93px;

    &__image {
        width: 1200px;
        border-radius: 65px;
    }

    &__content {
        width: 433px;
        position: absolute;
        top: 208px;
        left: 66px;
    }

    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 65px;
        font-weight: 400;
        line-height: 81.25px;
        margin-bottom: 18px;
    }

    &__subtitle {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        margin-bottom: 21px;
    }

    &__button {
        display: block;
        width: 220px;
        padding: 26px 48px 26px 48px;
        border-radius: 18px;
        background: #292F36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        line-height: 22.5px;
        letter-spacing: 0.36px;
    }
}
</style>
