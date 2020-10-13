export default{
    state: {
        username: '',
        userLoggedIn: false,
    },
    getters: {
        getUserName: state => state.username,
        getUserLoggedIn: state => state.userLoggedIn
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
        setLoggedIn(state, loggedIn){
            state.commit('setUserLoggedIn', loggedIn)
        },
        setUserName(state, userName){
            state.commit('setUserName', userName)
        },
    }
}