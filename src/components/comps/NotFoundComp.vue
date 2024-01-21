<template>
  <div class="not-found center">
    <div class="not-found__left">
        <h1 class="not-found__number">404</h1>
        <p class="not-found__text">
        We are sorry, but the page you requested was not found
        </p>
        <router-link to="/" class="not-found__home">Back To Home</router-link>
    </div>
    <img src="../../assets/page_404.jpg" alt="Разрушенная комната" class="not-found__img">
  </div>
</template>

<script>
export default {
  name: "NotFoundComp",
};
</script>

<style scoped lang="scss">
.not-found {

  display: flex;
  gap: 81px;

  &__left {
    width: 569px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
  &__number {
    color: #CDA274;
    font-family: "DM Serif Display";
    font-size: 250px;
    font-weight: 400;
    line-height: 125%;
  }
  &__text {
    color: #292F36;
    font-family: "DM Serif Display";
    font-size: 35px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.35px;
  }
  &__home {
    margin-top: 23px;
    padding: 26px 54px;
    width: 253px;
    border-radius: 18px;
    background: #292F36;
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
  }
  &__img {
    border-radius: 0px 0px 0px 353px;
    width: auto;
    height: 1088px;
  }
}
</style>
