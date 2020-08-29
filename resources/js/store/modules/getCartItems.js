
export default{
    methods: {
        
    },
    state: {
        cartItems: {
            message: 'Unauthenticated'
        },
    },
    mutations: {
        setCartItems(state, value){
            state.cartItems = value;
        }
    },
    actions: {
        async getCartItems({ commit }, accessToken){
            let response = await fetch('api/getCartItemsFromSession', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ accessToken
                },
            })
            if(response.status != 401){
                let result = response.json(); 
                result.then(res => {
                    commit('setCartItems', res);
                });
            }else{
                commit('setCartItems', {message: response.statusText});
            }
            
                 
        },
    },
}