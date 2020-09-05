export default class loadData{
    static async fetchData(apiRouteName){
        let response = await fetch(`api/${apiRouteName}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response.json()
    }
    static async getFoodByOrder(apiRouteName, orderBy, priceValue, maxPrice){
        let response = await fetch(`api/${apiRouteName}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                orderBy: orderBy,
                minPrice: priceValue,
                maxPrice: maxPrice
            })
        })
        return response.json();
    }
    static async searchFoodByName(apiRouteName, eventValue){
        let response = await fetch(`api/${apiRouteName}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: eventValue
            })
        })
        return response.json();
    }
    static async getMinMaxPrice(apiRouteName){
        let response = await fetch(`api/${apiRouteName}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response.json();
    }
}