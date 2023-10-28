<template>
    <div class="top-blog__title-box">
        <h1 class="top-blog__title">{{ title }}</h1>
        <p class="top-blog__subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
name: 'TopTitleComp',
props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      }
    }
}
</script>

<style scoped lang="scss">
.top-blog {
    &__title-box{
        display: flex;
        width: 503px;
        padding: 41px 78px;
        flex-direction: column;
        align-items: center;
        border-radius: 37px 37px 0px 0px;
        background: #FFF;
        position: absolute;
        bottom: 0px;
    }

    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
    }

    &__subtitle {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
    }
}
</style>
