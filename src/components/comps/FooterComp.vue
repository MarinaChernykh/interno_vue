<template>
  <footer class="footer center">
      <div class="footer__company">
          <img src="../../assets/logo.svg" alt="Логотип" class="footer__logo">
          <p class="footer__company-text">It is a long established fact that a reader will be distracted lookings.</p>
          <div class="footer__social">
              <a href="#" class="footer__social-link"><img src="../../assets/twitter.svg" alt="twitter"></a>
              <a href="#" class="footer__social-link"><img src="../../assets/linkedin.svg" alt="linkedin"></a>
          </div>
      </div>
      <div class="footer__navigation">
          <p class="footer__nav-title">Pages</p>
          <a href="index.html" class="footer__nav-text">Home</a>
          <a href="#" class="footer__nav-text">Project</a>
          <a href="blog.html" class="footer__nav-text">Blog</a>
      </div>
      <div class="footer__contacts">
          <p class="footer__contacts-title">Contact</p>
          <p class="footer__contacts-text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <p class="footer__contacts-text">contact@interno.com</p>
          <p class="footer__contacts-text">(123) 456 - 7890</p>
      </div>
  </footer>
</template>

<script>
export default {
name: 'FooterComp',
}
</script>

<style scoped lang="scss">
.footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 110px;

    &__logo {
        width: 177px;
        margin-bottom: 18px;
    }

    &__company-text {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        width: 393px;
        margin-bottom: 31px;
    }

    &__social {
        display: flex;
        gap: 54px;
    }

    &__navigation {
        width: 198px;
    }

    &__nav-title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31.25px;
        margin-bottom: 9px;
    }

    &__nav-text {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 66px;
        letter-spacing: 0.22px;
        display: block;
    }

    &__contacts {
        width: 258px;
    }

    &__contacts-title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31.25px;
        margin-bottom: 26px;
    }

    &__contacts-text {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        margin-bottom: 24px;
    }
}
</style>
