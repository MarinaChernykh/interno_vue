<template>
    <div class="articles__paginator">
        <a href="#" class="articles__page articles__current-page">01</a>
        <a href="#" class="articles__page">02</a>
        <a href="#" class="articles__page">03</a>
        <a href="#" class="articles__page">></a>
    </div>
</template>

<script>
export default {
name: 'PaginatorComp'
}
</script>

<style scoped lang="scss">
.articles {
    &__paginator {
        margin-top: 51px;
        margin-bottom: 200px;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    &__page {
        width: 52px;
        height: 52px;
        border: 1px solid #CDA274;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #292F36;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }

    &__current-page {
        background-color: #F4F0EC;
        border: none;
    }
}
</style>
