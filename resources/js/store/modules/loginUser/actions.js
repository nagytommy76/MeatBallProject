import router from '../../../router/router'
export default {
    login(context, formData){
        axios.get('/sanctum/csrf-cookie')
        .then(() =>{
            axios.post('login', {
                formData
             }).then(login => {
                if(login.status == 200){
                    if (Object.keys(login.data.hasError).includes("verifiedEmail")) {
                        context.commit('setHasEmailErrorAndVerifienMsg', true, login.data.hasError.email[0])
                    }
                    if (login.data.hasError.length !== 0) {                           
                        context.commit('showResponseErrors', login.data.hasError);
                    }else{
                        context.commit('setUserName', login.data.username)
                        context.commit('setUserLoggedIn', true)
                        setTimeout(() => {
                            context.commit('resetHasEmailErrorAndVerifienMsg')
                            context.commit('resetResponseErrors')
                        }, 1000)
                        router.push({name: 'Welcome'})
                    }                        
                }
            })
        })
    },

    resendVerificationEmail(context, formData){
        axios.post('email/resend',{
            formData
        }).then(email => {
            if (email.data.send) {
                context.commit('setEmailResend', email.data.message)
            }
        })
    }
}