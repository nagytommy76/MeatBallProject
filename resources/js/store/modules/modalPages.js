export default{
    state(){
        return{
            step: 0,
        }
    },
    getters:{
        getCurrentPage: state =>state.step,
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