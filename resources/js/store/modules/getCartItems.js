export default{
    state: {
        cartItems: {
            totalPrice: 0,
            totalQty: 0
        },
    },
    getters:{
        getTotalQty: state => state.cartItems.totalQty,
        getCartItems: state => state.cartItems
    },
    mutations: {
        setCartItems(state, value){
            state.cartItems = value;
        },
        setCartToDefault(state){
            state.cartItems = {
                totalPrice: 0,
                totalQty: 0
            }
        },
    },
    actions: {
        setCartDefault(state){
            state.commit('setCartToDefault')
        }
    },
}