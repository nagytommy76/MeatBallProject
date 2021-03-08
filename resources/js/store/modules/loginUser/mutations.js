export default {
    setUserName(state, userName){
        state.userName = userName
    },
    setUserLoggedIn(state, value){
        state.userLoggedIn = value
    }, 
    setHasEmailErrorAndVerifienMsg(state, hasError, message){
        state.hasEmailError = hasError
        state.verifiedMsg = message
    },
    showResponseErrors(state, loginHasError, error = true){
        state.hasError = error;
        state.errors.email = loginHasError.email;
        state.errors.password = loginHasError.password;
    },

    setEmailResend(state, msg){
        state.emailResend = true,
        state.verifiedMsg = msg
    },

    resetResponseErrors(state){
        state.hasError = false;
        state.errors.email = []
        state.errors.password = []
    },
    resetHasEmailErrorAndVerifienMsg(state){
        state.hasEmailError = false
        state.verifiedMsg = ''
    },
}