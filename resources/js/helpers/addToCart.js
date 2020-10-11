export default class addToCart{
    static async addFoodToCart(foodType, foodId, selectedIngreds = []) {
        return await axios.post('api/addFoodToCart',{
            foodType: foodType,
            foodId: foodId,
            plusIngreds: selectedIngreds,
        })
        
    }
}