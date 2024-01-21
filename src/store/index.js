import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projectDetail: []
    },
    mutations: {
        SET_PROJECT_DETAIL(state, projectDetailData) {
            state.projectDetail = projectDetailData;
        }
    },
    actions: {
        fetchProjectDetail({commit}) {
            setTimeout(() => {
                commit('SET_PROJECT_DETAIL',
                [
                    {
                        id: 1,
                        title: 'Minimal Look Bedrooms',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n\nIn nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                        image: 'project_detail_img.jpg'
                    }
                ])
            }, 200);
        }
    },
    getters: {
        projectDetail(state) {
            return state.projectDetail[0];
        },
    }
});