<template>
    <div class="card-container">
        <section class="card-content">
            <div class="card">
                <div class="card-header">
                    <h1>Regisztráció</h1>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="username">Felhasználónév</label>
                            <input id="username" type="text" class="form-control" name="username" v-model="formData.username" autofocus>

                            <span v-if="hasError" class="invalid-feedback" role="alert">
                                <div v-for="(userErr, index) in errors.username" :key="index">
                                    <strong>{{ userErr }}</strong>
                                </div> 
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail cím</label>
                            <input type="email" name="email" id="email" class="form-control" v-model="formData.email">

                            <span v-if="hasError" class="invalid-feedback" role="alert">
                                <div v-for="(emailErr, index) in errors.email" :key="index">
                                    <strong>{{ emailErr }}</strong>
                                </div> 
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="password">Jelszó</label>
                            <input type="password" name="password" id="password" class="form-control" v-model="formData.password">

                            <span v-if="hasError" class="invalid-feedback" role="alert">
                                <div v-for="(passErr, index) in errors.password" :key="index">
                                    <strong>{{ passErr }}</strong>
                                </div> 
                            </span>
                        </div>  
                        <div class="form-group">
                            <label for="confrim-password">Jelszó újra</label>
                            <input type="password" name="password_confirmation" id="confrim-password" class="form-control" v-model="formData.password_confirmation">
                        </div> 
                        <div class="card-footer">
                            <div class="form-group">
                                <div>
                                    <input value="Regisztráció" type="submit" @click.prevent="userRegister" class="btn btn-primary" />                                    
                                </div>                                
                            </div>
                            <div class="alert alert-danger" v-if="hasException">
                                <p>{{exceptionMsg}}</p>
                            </div>
                        </div>                     
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import authHelper from '../../helpers/authHelper'
export default {
    name: 'register',
    data(){
        return{
            formData: {
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            hasError: false,
            hasException: false,
            exceptionMsg: '',
            errors: {
                username: '',
                email: '',
                password: ''
            },
        }
    },
    methods: {
        async userRegister(){
            await axios.post('api/register', {
                formData: this.formData
            })
            .then(register => {
                console.log(register)
                if(register.data.exception == null){
                    if (register.data.hasError.length == 0) {
                        this.$router.push({name: 'Login'})
                    }else{
                        this.showErrors(register.data.hasError)
                    }                    
                }else{
                    this.showException(register.data.exception)
                }
            })

        },
        showErrors(errors){
            this.hasError = true;
            this.errors.username = errors.username;
            this.errors.email = errors.email;
            this.errors.password = errors.password;
        },
        showException(ex){
            this.hasException = true
            this.exceptionMsg = ex
        }
    }
}
</script>