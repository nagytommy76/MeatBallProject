export default class authHelper{
    static async sendAuthData(apiRouteName, formData, method = 'POST'){
        let response = await fetch(`api/${apiRouteName}`, {
            method: method,
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                formData
            })
        })

        return response.json()
    }
    static setExpirationToLocalSt(accessToken){
        let hour = new Date();
        hour.setHours(hour.getHours() + 2)
        let data = {
            accessToken,
            'expiration': hour
        }
        localStorage.setItem('accessToken', JSON.stringify(data));
    }
}