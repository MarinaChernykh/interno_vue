<template>
    <section class="projects center">
        <div class="projects__filters-group">
            <div class="projects__filter" @click="filterData('bathroom')" :class="{ 'projects__filter-active': selected == 'bathroom'}">Bathroom</div>
            <div class="projects__filter" @click="filterData('bedroom')" :class="{ 'projects__filter-active': selected == 'bedroom'}">Bed Room</div>
            <div class="projects__filter" @click="filterData('kitchan')" :class="{ 'projects__filter-active': selected == 'kitchan'}">Kitchan</div>
            <div class="projects__filter" @click="filterData('livingArea')" :class="{ 'projects__filter-active': selected == 'livingArea'}">Living Area</div>
        </div>
        <div class="projects__box center">
            <ProjectComp v-for="project in displayedProjects" :key="project.id" :project="project"/>
        </div>
        <PaginatorComp/>
    </section>
</template>

<script>
import ProjectComp from '../comps/ProjectComp.vue'
import PaginatorComp from '../comps/PaginatorComp.vue'

export default {
name: 'ProjectsListBlock',
components: {
    ProjectComp,
    PaginatorComp
  },
props: ['projects'],
data() {
    return {
        displayedProjects: this.projects['bedroom'],
        selected: 'bedroom'
    }
},
methods: {
    filterData(category) {
        this.displayedProjects = this.projects[category]
        this.selected = category
    }
},
}
</script>

<style scoped lang="scss">
.projects {
    margin-top: 200px;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__filters-group{
        width: 880px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        border: 1px solid #CDA274;
    }
    &__filter{
        height: 75px;
        width: 219px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        color: #292F36;
        font-size: 18px;
        font-weight: 600;
        line-height: 22.5px;
        letter-spacing: 0.36px;
        border-top: 1px solid #CDA274;
        border-bottom: 1px solid #CDA274;
        cursor: pointer;
    }
    &__filter:first-child{
        border-radius: 18px 0px 0px 18px;
    }
    &__filter:last-child{
        border-radius: 0px 18px 18px 0px;
    }
    &__filter-active {
        border-radius: 18px;
        background: #CDA274;
        color: #FFF;
    }
    &__box {
        max-height: 3500px;
        margin-top: 61px;
        margin-bottom: 61px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 24px;
    }
}
</style>
