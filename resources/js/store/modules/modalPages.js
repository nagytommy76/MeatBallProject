export default{
    state(){
        return{
            step: 0,
            showMakeOrder: false,
        }
    },
    getters:{
        getCurrentPage: state =>state.step,
        getShowMakeOrder: state =>state.showMakeOrder,
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
        }
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