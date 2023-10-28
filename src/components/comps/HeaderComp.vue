<template>
    <header class="header center">
      <div class="header__logo">
        <a class="header__logo-link" href="index.html">
            <img src="../../assets/logo.svg" alt="Логотип сайта" class="header__logo-img"/>
        </a>
      </div>
      <nav class="nav">
        <ul class="nav__items-list">
          <li class="nav__item">
            <a href="index.html" class="nav__item-link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__item-link">Project</a>
          </li>
          <li class="nav__item">
            <a href="blog.html" class="nav__item-link">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
name: 'HeaderComp',
}
</script>

<style scoped lang="scss">
.header {
    margin-top: 44px;
    margin-bottom: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    &__logo-img {
        width: 177px;
    }
}

.nav {
    width: 243px;

    &__items-list {
        display: flex;
        justify-content: space-between;
    }

    &__item {
        list-style-type: none;
    }

    &__item-link {
        color: #292F36;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
    }
}
</style>
