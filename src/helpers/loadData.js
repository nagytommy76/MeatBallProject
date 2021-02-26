export default class loadData{
    static async fetchData(apiRouteName){
        return this.axios.get(apiRouteName)
    }
    static async getFoodByOrder(apiRouteName, orderBy, priceValue, maxPrice){
        return this.axios.post(apiRouteName,{
            body: {
                orderBy: orderBy,
                minPrice: priceValue,
                maxPrice: maxPrice
            }
        })
    }
    static async searchFoodByName(apiRouteName, eventValue, orderBy, priceValue, maxPrice){
        return this.axios.post(apiRouteName,{
            body: {
                name: eventValue,
                orderBy: orderBy,
                minPrice: priceValue,
                maxPrice: maxPrice
            }
        })
    }
    static async getMinMaxPrice(apiRouteName){
        return this.axios.get(apiRouteName)
    }
}