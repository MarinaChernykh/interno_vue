<template>
  <div class="filters">
      <p class="filters__title">Tags</p>
      <div class="filters__buttons">
          <button v-for="button in buttons" :key="button.id" class="filters__item" :class="{ 'filters__item-active': button.is_active }" @click="getButton(button)">{{ button.name }}</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TagFilterComp',
  props: ['buttons'],
  methods: {
    getButton(currentButton) {
      currentButton.is_active = !currentButton.is_active;
    }
  },

}
</script>

<style scoped lang="scss">
.filters {
  &__title {
      color: #292F36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 31.25px;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
  }

  &__buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 10px;
      width: 345px;
  }

  &__item {
      display: flex;
      padding: 9px 30px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: #F4F0EC;
      color: #000;
      font-size: 18px;
      font-weight: 400;
      line-height: 22.5px;
      letter-spacing: 0.36px;
      font-family: Jost;
      font-style: normal;
      border: none;
      cursor: pointer;
  }

  &__item-active {
      background: #292F36;
      color: #FFF;
  }
}
</style>
