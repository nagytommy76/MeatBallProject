export default{
    state: {
        username: '',
        userLoggedIn: false,
    },
    getters: {
        getUserName: state => state.username,
        getUserLoggedIn: state => state.userLoggedIn,
    },
    mutations: {
       setUserName(state, username){
            state.username = username
       },
       setUserLoggedIn(state, value){
            state.userLoggedIn = value
       },       
    },
    actions: {
        revokeUserName(context){
            context.commit('setUserName', '')
        },
    }
}