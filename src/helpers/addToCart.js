import axios from 'axios'
export default class addToCart{
    static async addFoodToCart(foodType, foodId, selectedIngreds = []) {
        return await axios.post('addFoodToCart',{
            foodType: foodType,
            foodId: foodId,
            plusIngreds: selectedIngreds,
        })
        
    }
}