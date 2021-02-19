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
                            <ErrorMsg 
                                v-if="hasError"
                                :errors="errors.email"
                            />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col">
                                <label for="password">Jelszó</label>
                                <input id="password" type="password" class="form-control" v-model="formData.password" name="password" required>
                                <ErrorMsg 
                                    v-if="hasError"
                                    :errors="errors.password"
                                />
                            </div>  
                        </div>  
                        <div class="form-group">
                            <div class="col">
                                <label for="remember">Emlékezz Rám!</label>
                                <input type="checkbox" v-model="formData.remember" name="remember" id="remember">
                            </div>                                   
                        </div>               
                <div class="card-footer">
                    <div class="form-group">
                        <div class="col">
                            <input id="fetchUserToken" type="submit" value="Belépés" @click.prevent="logTheUserIn" class="btn btn-primary" />
                        </div>
                        <div class="col">
                            <BaseButton v-if="hasEmailError" @click.native="resendEmail" :butonClass="'delete'" :buttonText="'Aktiváló kód újraküldése'"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <Alert
                            v-if="showRegisterSuccess"
                            :className="'success'"
                            :Msg="'A regisztráció sikeres volt! Kérem aktiválja az e-mail címét.'"
                        />
                        <Alert
                            v-if="showValidationSuccess"
                            :className="'success'"
                            :Msg="getValidationSuccessMsg"
                        />
                        <Alert
                            v-if="hasEmailError"
                            :Msg="verifiedMsg"
                            :className="className"
                        />
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
import { mapMutations } from 'vuex'
export default {
    name: 'Login',
    data(){
        return{
            formData: {
                email: '',
                password: '',
                remember: false
            },
            hasError: false,
            errors: {
                email: '',
                password: ''
            },
            hasEmailError: false,
            verifiedMsg: '',
            className: 'danger',
        }
    },
    computed:{
        showRegisterSuccess(){
            return this.$route.params.registerAlert ? this.$route.params.registerAlert : false
        },
        showValidationSuccess(){
            return Boolean(this.$route.params.validation) 
        },
        getValidationSuccessMsg(){
            return this.$route.params.msg
        }
    },
    methods:{
        ...mapMutations([
            'setUserName',
            'setUserLoggedIn',
        ]),
        showErrors(errors){
            this.hasError = true;
            this.errors.email = errors.email;
            this.errors.password = errors.password;
        },
        async logTheUserIn(){
            axios.get('/sanctum/csrf-cookie')
            .then(() =>{
                axios.post('login', {
                    formData: this.formData
                }).then(login => {
                    if(login.status == 200){
                        if (!login.data.hasError.verifiedEmail) {
                            this.hasEmailError = true
                        }
                        if (login.data.hasError.length !== 0) {
                            this.showErrors(login.data.hasError);
                            this.verifiedMsg = login.data.hasError.email[0]
                        }else{
                            // this.hasEmailError = true
                            this.setUserName(login.data.username)
                            this.setUserLoggedIn(true)
                            this.$router.push({name: 'Welcome'})
                        }                        
                    }
                })
            })
        },
        async resendEmail(){
            axios.post('email/resend',{
                formData: this.formData
            }).then(email => {
                if (email.data.send) {
                    this.verifiedMsg = email.data.message
                    this.className = 'success'
                }else{
                    this.verifiedMsg = email.data.message
                    this.className = 'danger'
                }
            })
        },
    }
}
</script>