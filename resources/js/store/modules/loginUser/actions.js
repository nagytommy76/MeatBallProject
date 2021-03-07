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
                        context.commit('setHasEmailErrorAndVerifienMsg', true, login.data.hasError.verifiedEmail[0])
                    }
                    if (login.data.hasError.length !== 0) {                           
                        context.commit('showResponseErrors', login.data.hasError);

                    }else{
                        context.commit('setUserName', login.data.username)
                        context.commit('setUserLoggedIn', true)
                        router.push({name: 'Welcome'})
                    }                        
                }
            })
        })
    },
}