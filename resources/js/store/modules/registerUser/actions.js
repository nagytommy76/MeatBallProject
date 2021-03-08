import router from '../../../router/router'
export default {
    async register(context, formData){
        await axios.post('register', {
            formData
        })
        .then(register => {
            if(register.data.exception == null){
                if (register.data.hasError.length == 0) {
                    setTimeout(() => {
                        context.commit('resetErrors')
                    },1000)
                    router.push({name: 'Login', params: {registerAlert: true}})
                }else{
                    context.commit('showErrors', register.data.hasError)
                }                   
            }else{
                context.commit('showException', register.data.exception)
            }
        })
    }
}