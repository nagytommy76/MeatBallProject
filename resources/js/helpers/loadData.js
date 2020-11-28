// import Axios from "axios"

export default class loadData{
    static async fetchData(apiRouteName){
        return axios.get(apiRouteName)
    }
    static async getFoodByOrder(apiRouteName, orderBy, priceValue, maxPrice){
        return axios.post(apiRouteName,{
            body: {
                orderBy: orderBy,
                minPrice: priceValue,
                maxPrice: maxPrice
            }
        })
    }
    static async searchFoodByName(apiRouteName, eventValue, orderBy, priceValue, maxPrice){
        return axios.post(apiRouteName,{
            body: {
                name: eventValue,
                orderBy: orderBy,
                minPrice: priceValue,
                maxPrice: maxPrice
            }
        })
    }
    static async getMinMaxPrice(apiRouteName){
        return axios.get(apiRouteName)
    }
}