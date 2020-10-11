export default{
    state: {
        // accessToken: null,
        username: '',
        userLoggedIn: false,
    },
    getters: {
        // getToken: state => state.accessToken,
        getUserName: state => state.username,
        getUserLoggedIn: state => state.userLoggedIn
    },
    mutations: {
    //    setAccessToken(state, token){
    //         state.accessToken = token;
    //    },
       setUserName(state, username){
            state.username = username
       },
       setUserLoggedIn(state, value){
            state.userLoggedIn = value
       },
    },
    actions: {
        // setToken(state, accessToken){
        //     state.commit('setAccessToken', accessToken) 
        // },
        setLoggedIn(state, loggedIn){
            state.commit('setUserLoggedIn', loggedIn)
        },
        setUserName(state, userName){
            state.commit('setUserName', userName)
        },
    }
}