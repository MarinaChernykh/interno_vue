<template>
  <section class="achievements">
      <div class="achievements__content center">
          <div class="achievements__item">
              <p class="achievements__integer">12</p>
              <p class="achievements__text">Years Of Experiance</p>
          </div>
          <div class="achievements__item">
              <p class="achievements__integer">85</p>
              <p class="achievements__text">Success Projects</p>
          </div>
          <div class="achievements__item">
              <p class="achievements__integer">15</p>
              <p class="achievements__text">Active Projects</p>
          </div>
          <div class="achievements__item">
              <p class="achievements__integer">95</p>
              <p class="achievements__text">Happy Customers</p>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: 'AchievementsComp',
}
</script>

<style scoped lang="scss">
.achievements {
    background-color: #F4F0EC;
    height: 457px;
    display: flex;
    align-items: center;

    &__content {
        display: flex;
    }

    &__item {
        width: 25%;
        border-right: #CDA274 1px solid;
        text-align: center;
    }

    &__item:last-child {
        border-right: none;
    }

    &__integer {
        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 85px;
        font-weight: 400;
        line-height: 106.25px;
        letter-spacing: 1.7px;
        margin-bottom: 16px;
    }

    &__text {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
    }
}
</style>
