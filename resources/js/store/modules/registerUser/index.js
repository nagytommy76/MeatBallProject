import mutations from './mutations'
import actions from './actions'
export default{
    namespaced: true,
    state() {
        return{
            hasError: false,
            hasException: false,
            exceptionMsg: '',

            errors: {
                username: [],
                email: [],
                password: []
            },
        }
    },
    getters: {
       getHasError: state => state.hasError,
       getHasException: state => state.hasException,
       getExceptionMsg: state => state.exceptionMsg,
       getErrors: state => state.errors,
    },
    mutations,
    actions,
}