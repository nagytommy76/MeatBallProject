export default{
    namespaced: true,
    state() {
        return{
            showOpenNavbarBtn: false,
            isNavbarOpen: true,
        }
    },
    getters: {
        getOpenNavbarBtn: state => state.showOpenNavbarBtn,
        getIsNavbarOpen: state => state.isNavbarOpen,
    },
    mutations: {
        setOpenNavbarBtn(state, payload){
            state.showOpenNavbarBtn = payload
        },
        setIsNavbarOpen(state, payload){
            if (window.innerWidth <= 700) {
                state.isNavbarOpen = payload 
            }
        },
    },
    actions: {
        checkWindowWidth(context){
            if (window.innerWidth <= 700) {
                context.commit('setOpenNavbarBtn', true)
                context.commit('setIsNavbarOpen', false)
            }else{
                context.commit('setOpenNavbarBtn', false)
                context.commit('setIsNavbarOpen', true)
            }
        }
    }
}