export default{
    namespaced: true,
    state(){
        return{
            showPayment: true,
            showSuccessPayPal: false,
            showAlternatePayment: true,

            showPaypalContainer: false,
            payment: 'alternate',
        }
    },
    getters:{
        getShowPayment: state => state.showPayment,
        showSuccessPayPal: state => state.showSuccessPayPal,
        showPayPal: state => state.showPayPal,
        showAlternatePayment: state => state.showAlternatePayment,

        getPayPalContainer: state =>state.showPaypalContainer,
        getPayment: state =>state.payment,
    },
    mutations:{
        disableShowPayment(state, payload){
            state.showPayment = payload
        },
        setShowPaypalMessage(state, payload){
            state.showSuccessPayPal = payload
        },
        setAlternatePayment(state, payload){
            state.showAlternatePayment = payload
        },
        setPaypalContainer(state, payload){
            state.showPaypalContainer = payload
        },
        setPayment(state, payload){
            state.payment = payload
        },
    },
    actions:{
        disableShowPayment(context, payload){
            context.commit('disableShowPayment', payload)
        },
        enableShowPaypalMessage(context, payload){
            context.commit('setShowPaypalMessage', payload)
        },
        setAlternatePayment(context, payload){
            context.commit('setAlternatePayment', payload)
        },
    }
}