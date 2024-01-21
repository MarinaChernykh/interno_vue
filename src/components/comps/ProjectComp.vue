<template>
  <section class="project">
    <img :src="require('../../assets/' + project.img)" :alt="project.title" class="project__image">
    <div class="project__content">
        <div class="project__info">
            <router-link to="/project/detail" class="project__title">{{ project.title }}</router-link>
            <p class="project__category">{{ project.category }}</p>
        </div>
        <router-link to="/project/detail" class="project__link"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </router-link>
    </div>
  </section>
</template>

<script>
export default {
name: 'ProjectComp',
props: {
    project: {
        type: Object,
        required: true
      }
    }
}
</script>

<style scoped lang="scss">
.project {
    width: 585px;

    &__image {
        width: 100%;
        height: auto;
    }
    &__content {
        width: 100%;
        margin-top: 24px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__info {
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31.25px;
        letter-spacing: 0.5px;
    }
    &__category {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
    }
}
</style>
