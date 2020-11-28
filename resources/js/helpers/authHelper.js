export default class authHelper{
    static async logOut(){
        return await axios.post('logout')
    }
}