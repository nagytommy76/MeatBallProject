export default{
    state(){
        return{
            showPayment: true,
            showSuccessPayPal: false,
            showAlternatePayment: true,
        }
    },
    getters:{
        getShowPayment: state => state.showPayment,
        showSuccessPayPal: state => state.showSuccessPayPal,
        showPayPal: state => state.showPayPal,
        showAlternatePayment: state => state.showAlternatePayment,
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