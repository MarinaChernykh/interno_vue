<template>
    <header class="header center">
      <div class="header__logo">
        <router-link to="/" class="header__logo-link">
            <img src="../../assets/logo.svg" alt="Логотип сайта" class="header__logo-img"/>
        </router-link>
      </div>
      <nav class="nav">
        <ul class="nav__items-list">
          <li class="nav__item">
            <router-link to="/" class="nav__item-link">Home</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/project" class="nav__item-link">Project</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/blog" class="nav__item-link">Blog</router-link>
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
