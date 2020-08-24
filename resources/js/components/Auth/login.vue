<template>
<div class="container">
    <div class="card-container">
        <section class="card-content">
            <div class="card">
                <div class="card-header">Belépés</div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <div class="col">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Cím</label>

                            <input id="email" type="email" class="form-control" v-model="formData.email" name="email" value="" autofocus>

                            <span v-if="hasError" class="invalid-feedback" role="alert">
                                <div v-for="(emailErr, index) in errors.email" :key="index">
                                        <strong>{{ emailErr }}</strong>
                                    </div> 
                            </span>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col">
                                 <label for="password" class="col-md-4 col-form-label text-md-right">Jelszó</label>
                                <input id="password" type="password" class="form-control" v-model="formData.password" name="password" required>
                                
                                <span v-if="hasError" class="invalid-feedback" role="alert">
                                    <div v-for="(passErr, index) in errors.password" :key="index">
                                        <strong>{{ passErr }}</strong>
                                    </div>                                    
                                </span>
                            </div>
                           
                        </div>                
                <div class="card-footer">
                    <div class="form-group">
                        <div class="col-md-8 offset-md-4">
                            <input id="fetchUserToken" type="submit" value="Belépés" @click.prevent="logTheUserIn" class="btn btn-primary" />
                        </div>
                    </div>
                </div>
            </form>
            </div>
            </div>
        
        </section>
    </div>
</div>
</template>
<script>

export default {
    name: 'login',
    data(){
        return{
            formData: {
                email: '',
                password: ''
            },
            hasError: false,
            errors: {
                email: '',
                password: ''
            },
        }
    },
    methods:{
        showErrors(errors){
            this.hasError = true;
            this.errors.email = errors.email;
            this.errors.password = errors.password;
        },
        async logTheUserIn(){
            await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    formData: this.formData
                })
            }).then(response => response.json())
            .then(result => {
                console.log(result)
                if(result.accessToken == null){
                    this.showErrors(result.hasError);
                }else{
                    this.setExpirationToLocalSt(result.accessToken); 
                    window.location.href = "http://meatballproject.hu/";
                }
            }).catch(err => console.log(err))
        },
        setExpirationToLocalSt(accessToken){
            let hour = new Date();
            hour.setHours(hour.getHours() + 2)
            let data = {
                accessToken,
                'expiration': hour
            }
            localStorage.setItem('accessToken', JSON.stringify(data));
        },
    }
}
</script>