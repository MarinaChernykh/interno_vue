<template>
  <img :src="require('../../assets/' + imageLink)" alt="Дизайн" class="top-blog__banner">
</template>

<script>
export default {
name: 'TopImageComp',
props: {
      imageLink: {
        type: String,
        required: true
      }
    }
}

</script>

<style scoped lang="scss">

</style>
