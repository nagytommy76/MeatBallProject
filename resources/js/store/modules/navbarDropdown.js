export default{
    namespaced: true,
    state(){
        return{
            showProfileDropdown: false,
            showFoodDropdown: false,
        }
    },
    getters:{
        getProfileDropdown: state => state.showProfileDropdown,
        getFoodDropdown: state => state.showFoodDropdown,
    },
    mutations: {
        hideProfileDropdown(state){
            state.showProfileDropdown = false
        },
        toggleProfileDrop(state){
            state.showProfileDropdown = !this.showProfileDropdown
        },
        openProfileDrop(state){
            if (!state.showProfileDropdown) {
                state.showProfileDropdown = true                
            }
        },

        hideFoodDropdown(state){
            state.showFoodDropdown = false
        },
        toggleFoodDrop(state){
            state.showFoodDropdown = !state.showFoodDropdown
        },
        openFoodDrop(state){
            if (!state.showFoodDropdown) {
                state.showFoodDropdown = true                
            }
        },
    },
    actions:{}
}