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
                            <label for="email">E-Mail Cím</label>

                            <input id="email" type="email" class="form-control" v-model="formData.email" name="email" autofocus>

                            <span v-if="hasError" class="invalid-feedback" role="alert">
                                <div v-for="(emailErr, index) in errors.email" :key="index">
                                        <strong>{{ emailErr }}</strong>
                                    </div> 
                            </span>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col">
                                <label for="password">Jelszó</label>
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
                        <div class="col">
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
import authHelper from '../../helpers/authHelper'
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
            await authHelper.sendAuthData('login', this.formData)
            .then(response => {
                if(response.accessToken == null){
                    this.showErrors(response.hasError);
                }else{
                    authHelper.setExpirationToLocalSt(response.accessToken); 
                    window.location.href = "http://meatballproject.hu/";
                    // window.location.href = "https://nagytamas93.hu/";
                }
            }).catch(error => console.log(error))
        },
    }
}
</script>