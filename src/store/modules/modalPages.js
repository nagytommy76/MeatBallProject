export default{
    state(){
        return{
            step: 0,
            showMakeOrder: false,
            showCartModal: false,
            showOrdersModal: false,
        }
    },
    getters:{
        getCurrentPage: state =>state.step,
        getShowMakeOrder: state =>state.showMakeOrder,
        getShowCartModal: state => state.showCartModal,
        getShowOrdersModal: state => state.showOrdersModal,
    },
    mutations: {
        increasePage(state){
            ++state.step
        },
        decreasePage(state){
            --state.step
        },
        setDefaultPage(state){
            state.step = 0
        },
        setMakeOrder(state, value){
            state.showMakeOrder = value
        },
        hideCartModal(state){
            state.showCartModal = false
        },
        openCartModal(state){
            state.showCartModal = true
        },
        hideOrdersModal(state){
            state.showOrdersModal = false
        },
        openOrdersModal(state){
            state.showOrdersModal = true
        },
    },
    actions:{
        increasePage(context){
            context.commit('increasePage')
        },
        decreasePage(context){
            context.commit('decreasePage')
        },
        setDefaultPage(context){
            context.commit('setDefaultPage')
        }
    }
}