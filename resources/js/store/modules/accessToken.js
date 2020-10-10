export default{
    state: {
        accessToken: null,
        // expiration: null,
        username: '',
        userLoggedIn: false,
    },
    getters: {
        getToken: state => state.accessToken,
        getUserName: state => state.username,
        getUserLoggedIn: state => state.userLoggedIn
    },
    mutations: {
       setAccessToken(state, token){
            state.accessToken = token;
       },
       setUserName(state, username){
            state.username = username
       },
       setUserLoggedIn(state, value){
            state.userLoggedIn = value
       },
    },
    actions: {
        // fetchAccessToken({ commit }){
        //     const localST = JSON.parse(localStorage.getItem('accessToken'));
        //     if(localST != null){
        //         if(Date.parse(localST.expiration) < Date.now()){
        //             localStorage.removeItem('accessToken');
        //         }else{
        //             commit('setAccessToken', localST.accessToken) 
        //             commit('setExpiration', localST.expiration)
        //             commit('setUserLoggedIn', true)
        //         }
        //     }
        // },
        setToken(state, accessToken){
            state.commit('setAccessToken', accessToken) 
        },
        setLoggedIn(state, loggedIn){
            state.commit('setUserLoggedIn', loggedIn)
        },
        setUserName(state, userName){
            state.commit('setUserName', userName)
        },
    }
}