import mutations from './mutations'
import actions from './actions'
export default{
    namespaced: true,
    state() {
        return{
            userName: '',
            userLoggedIn: false,
    
            hasError: false,
            errors: {
                email: [],
                password: []
            },
            hasEmailError: false,
            verifiedMsg: '',
            emailResend: false,
        }
    },
    getters: {
        getUserName: state => state.userName,
        getUserLoggedIn: state => state.userLoggedIn,

        getHasError: state => state.hasError,
        getErrorMsgs: state => state.errors,
        getHasEmailError: state => state.hasEmailError,
        getVerifiedMsg: state => state.verifiedMsg,

        getEmailResend: state => state.emailResend,
    },
    mutations,
    actions,
}