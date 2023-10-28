<template>
  <section class="projects center">
    <h2 class="projects__title">Follow Our Projects</h2>
    <p class="projects__subtitle center">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
    <div class="projects__catalog">
        <div class="projects__card">
            <img src="../../assets/project_1.jpg" alt="Кухня" class="projects__card-image projects__card-image__item1">
            <div class="projects__card-description">
                <div class="projects__card-text-content">
                    <a href="#" class="projects__card-title">Modern Kitchan</a>
                    <p class="projects__card-text">Decor / Artchitecture</p>
                </div>
                <a href="#" class="projects__card-link"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
            </div>
        </div>
        <div class="projects__card">
            <img src="../../assets/project_2.jpg" alt="Прихожая" class="projects__card-image projects__card-image__item2">
            <div class="projects__card-description">
                <div class="projects__card-text-content">
                    <a href="#" class="projects__card-title">Modern Kitchan</a>
                    <p class="projects__card-text">Decor / Artchitecture</p>
                </div>
                <a href="#" class="projects__card-link"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
            </div>
        </div>
        <div class="projects__card">
            <img src="../../assets/project_3.jpg" alt="Кабинет" class="projects__card-image projects__card-image__item3">
            <div class="projects__card-description">
                <div class="projects__card-text-content">
                    <a href="#" class="projects__card-title">Modern Kitchan</a>
                    <p class="projects__card-text">Decor / Artchitecture</p>
                </div>
                <a href="#" class="projects__card-link"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
            </div>
        </div>
        <div class="projects__card">
            <img src="../../assets/project_4.jpg" alt="Гостиная" class="projects__card-image projects__card-image__item4">
            <div class="projects__card-description">
                <div class="projects__card-text-content">
                    <a href="#" class="projects__card-title">Modern Kitchan</a>
                    <p class="projects__card-text">Decor / Artchitecture</p>
                </div>
                <a href="#" class="projects__card-link"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
name: 'FollowProjectsComp',
}
</script>

<style scoped lang="scss">
.projects {
  &__title {
      margin-bottom: 8px;
      color: #292F36;
      text-align: center;
      font-family: DM Serif Display;
      font-size: 50px;
      font-weight: 400;
      line-height: 62.5px;
      letter-spacing: 1px;
  }

  &__subtitle {
      width: 737px;
      margin-bottom: 37px;
      color: #4D5053;
      text-align: center;
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0.22px;
  }

  &__catalog {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 96px;
  }

  &__card {
      margin-top: 56px;
  }

  &__card-image {
      width: 547px;
  }

  &__card-description {
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
  }

  &__card-title {

      margin-bottom: 4px;
      color: #292F36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 31.25px;
      letter-spacing: 0.5px;
  }

  &__card-text {
      margin-bottom: 4px;
      color: #4D5053;
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0.22px;
  }

  &__card-image__item1 {
      border-radius: 0px 80px 0px 0px;
  }

  &__card-image__item2 {
      border-radius: 80px 0px 0px 0px;
  }

  &__card-image__item3 {
      border-radius: 0px 0px 80px  0px;
  }

  &__card-image__item4 {
      border-radius: 0px 0px 0px 80px;
  }
}
</style>
