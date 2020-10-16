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
    static async logOut(){
        let response = await fetch('api/logout', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return await response.json()
    }
}