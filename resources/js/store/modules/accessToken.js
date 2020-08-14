export default{
    state: {
        accessToken: null,
        expiration: null,
    },
    getters: {

    },
    mutations: {
       setAccessToken(state, token){
            state.accessToken = token;
       },
       setExpiration(state, expiration){
            state.expiration = expiration
       }
    },
    actions: {
        fetchAccessToken({ commit }){
            const localST = JSON.parse(localStorage.getItem('accessToken'));
            if(localST != null){
                if(Date.parse(localST.expiration) < Date.now()){
                    localStorage.removeItem('accessToken');
                }else{
                    commit('setAccessToken', localST.accessToken); 
                    commit('setExpiration', localST.expiration) 
                }
            }
        }
    }
}