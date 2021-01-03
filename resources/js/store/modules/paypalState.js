export default{
    state(){
        return{
            showPayment: true,
            showSuccessPayPal: false,
            showPayPal: false,
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
        disableShowPayment(state){
            state.showPayment = false
        },
    },
    actions:{
        disableShowPayment(context){
            context.commit('disableShowPayment')
        },
    }
}