export default {
    state() {
        return{
            userInfo:{
                city: '',
                firstName: '',
                lastName: '',
                houseNumber: null,
                floorDoor: null,
                phone: '',
                street: '',
                user_email: '',
                zip_code: null
            },
            isUserDataReceived: false,
            isUserInfoFilled: false,
            userDataReceivedOnce: false,
        } 
    },
    getters: {
        getUserInfo: state => state.userInfo,
        getIsUserDataReceived: state => state.isUserDataReceived,
        getUserInfoFilled: state => state.isUserInfoFilled,
        getUserDataReceivedOnce: state => state.userDataReceivedOnce
    },
    mutations: {
        setUserInfo(state, payload){
            state.userInfo = payload
        },
        dataReceived(state, payload){
            state.isUserDataReceived = payload
        },
        setUserInfoFilled(state, payload){
            state.isUserInfoFilled = payload
        },
        setToDefaultUserInfo(state, payload){
            state.userInfo = payload
        },
        // Csak 1szer, ellenőrzésképp kérem le a (getUserInfot-t)
        setUserDataReceivedOnce(state, payload){
            state.userDataReceivedOnce = payload
        },
    },
    actions: {
        getUserInfo(context){ 
            this.axios.get('userInfoFilled').then(user => {
                if (user.status == 200) {
                    if (user.data.data.userInfo) {
                        context.commit('setUserInfo', user.data.data.userInfo)
                    }
                    context.commit('dataReceived', true)
                    context.commit('setUserInfoFilled', user.data.data.userinfo_filled)
                }
            }).catch(error => console.log(error))
        },
        setToDefaultUserInfo(context){
            const userInfo = {
                city: '',
                firstName: '',
                lastName: '',
                houseNumber: null,
                floorDoor: null,
                phone: '',
                street: '',
                user_email: '',
                zip_code: null
            }
            context.commit('setToDefaultUserInfo', userInfo)
            context.commit('setUserDataReceivedOnce', false)
        },
    }
}