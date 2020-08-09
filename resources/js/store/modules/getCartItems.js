
export default{
    methods: {
        
    },
    state: {
        cartItems: {},
    },
    getters: {
        // cartItems: state => state.cartItems
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
            return response.json();      
        },

        async getCartItem({ commit, dispatch }, accessToken){
            await dispatch('getCartItems', accessToken)
            .then(result => {
                commit('setCartItems', result);
            }).catch(err => {
                console.log(err)
            })            
        }
    },
}