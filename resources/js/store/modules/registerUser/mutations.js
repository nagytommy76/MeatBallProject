export default {
    showErrors(state ,errors){
        state.hasError = true;
        state.errors.username = errors.username;
        state.errors.email = errors.email;
        state.errors.password = errors.password;
    },
    showException(state, ex){
        state.hasException = true
        state.exceptionMsg = ex
    },

    resetErrors(state){
        state.hasError = false
        state.errors.username = []
        state.errors.email = []
        state.errors.password = []
    },
}