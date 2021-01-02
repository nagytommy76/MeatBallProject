export default {
    state() {
        return{
            user:{
                username: '',
                email: '',
            },
            userInfo:{
                city: '',
                firstName: '',
                lastName: '',
                houseNumber: '',
                floorDoor: '',
                phone: '',
                street: '',
                user_email: '',
                zip_code: null
            },
            isUserDataReceived: false,
            isUserInfoFilled: false
        } 
    },
    getters: {
        getUser: state => state.user,
        getUserInfo: state => state.userInfo,
        getIsUserDataReceived: state => state.isUserDataReceived,
        getUserInfoFilled: state => state.isUserInfoFilled,
    },
    mutations: {
        setUser(state, payload){
            state.user = payload
        },
        setUserInfo(state, payload){
            state.userInfo = payload
        },
        dataReceived(state, payload){
            state.isUserDataReceived = payload
        },
        setUserInfoFilled(state, payload){
            state.isUserInfoFilled = payload
        },
    },
    actions: {
        getUserInfo(context){ 
            axios.get('userInfoFilled').then(user => {
                if (user.status == 200) {
                    context.commit('setUser', {
                        email: user.data.data.email,
                        username: user.data.data.username
                    })
                    context.commit('setUserInfo', user.data.data.userInfo)
                    context.commit('dataReceived', true)
                    context.commit('setUserInfoFilled', user.data.data.userinfo_filled)
                }
            }).catch(error => console.log(error))
        },
    }
}