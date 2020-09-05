export default class addToCart{
    static async addFoodToCart(foodType, foodId, accessToken, selectedIngreds = []) {
        let response = await fetch(`api/addFoodToCart`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            body: JSON.stringify({
                foodType: foodType,
                foodId: foodId,
                plusIngreds: selectedIngreds,
            }),
        }
        )
        return response.json()
    }
}