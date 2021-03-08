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
                            <ErrorMsg 
                                v-if="hasError"
                                :errors="errors.username"
                            />
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail cím</label>
                            <input type="email" name="email" id="email" class="form-control" v-model="formData.email">
                            <ErrorMsg 
                                v-if="hasError"
                                :errors="errors.email"
                            />
                        </div>
                        <div class="form-group">
                            <label for="password">Jelszó</label>
                            <input type="password" autocomplete="new-password" name="password" id="password" class="form-control" v-model="formData.password">
                            <ErrorMsg 
                                v-if="hasError"
                                :errors="errors.password"
                            />
                        </div>  
                        <div class="form-group">
                            <label for="confrim-password">Jelszó újra</label>
                            <input type="password" autocomplete="new-password" name="password_confirmation" id="confrim-password" class="form-control" v-model="formData.password_confirmation">
                        </div> 
                        <div class="card-footer">
                            <div class="form-group">
                                <BaseButton :buttonText="'Regisztráció'" @click.native.prevent="userRegister"/>                              
                            </div>
                            <Alert v-if="hasException" :msg="exceptionMsg"/>
                        </div>                     
                    </form>
                    <Loading 
                        :isLoading="isLoading"
                    />
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Register',
    data(){
        return{
            isLoading: false,
            formData: {
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
        }
    },
    computed:{
        ...mapGetters('registerUser', {
            hasError: 'getHasError',
            hasException: 'getHasException',
            exceptionMsg: 'getExceptionMsg',
            errors: 'getErrors'
        }),
    },
    methods: {
        ...mapActions('registerUser', {
            register: 'register'
        }),
        async userRegister(){
            await this.register(this.formData)
        },
    }
}
</script>