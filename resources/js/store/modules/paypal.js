export default{
    state:{
        paidWithPayPal: false,
        create_time: '',
        id: '',
        payer:{},
        purchase_units: [],
        status: '',        
    },
    getters:{
        getPaid: state => state.paidWithPayPal,
        getStatus: state => state.status,
        getTransactionID: state => state.id,
        getCreatedAt: state => {
            let time = new Date(state.create_time)
            return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDay()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        },
        getPurhase: state => state.purchase_units,
        getPayer: state => state.payer
    },
    mutations:{
        setPaid(state, payload){
            state.paidWithPayPal = payload
        },
        setStatus(state, status){
            state.status = status
        },
        setTransactionID(state, id){
            state.id = id
        },
        setPayer(state, payer){
            state.payer = payer
        },
        setPurhase(state, purchase){
            state.purchase_units = purchase
        },
        setCreate(state, create){
            state.create_time = create
        }
    },
    actions:{
        setPaidWithPP(state, payload){
            state.commit('setPaid', payload)
        },
        setPayPalDetails(state, details = {}){
            state.commit('setStatus', details.status);
            state.commit('setTransactionID', details.id);
            state.commit('setPayer', details.payer);
            state.commit('setPurhase', details.purchase_units);
            state.commit('setCreate', details.create_time);
        },
        setPayPalDefault(state){
            state.commit('setPaid', false)
            state.commit('setStatus', '');
            state.commit('setTransactionID', '');
            state.commit('setPayer', {});
            state.commit('setPurhase', []);
            state.commit('setCreate', '');
        },
    },
}