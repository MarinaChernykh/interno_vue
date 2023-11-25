<template>
    <div class="not-found">
        <p class="not-found__number">404</p>
        <h1 class="not-found__title">Page Not Found</h1>
    </div>
</template>

<script>
export default {
  name: 'NotFoundComp'
}
</script>

<style scoped lang="scss">
.not-found {
    width: 800px;
    margin: 300px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__number {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
    }
    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
    }
}
</style>
