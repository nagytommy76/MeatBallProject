<template>
    <div>
        <div class="modal-head">
            <h2 class="text-center py-1">Szállítási információk megadása (kötelező!)</h2>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group row">
                    <div class="col">
                        <label for="firstname">Vezetéknév: <sup>*</sup></label>
                        <input v-model="user.firstName" type="text" id="firstname" class="form-control shadowed">
                        <ErrorMsg 
                            v-if="hasError"
                            :errors="errors.firstName"
                        />
                    </div>
                    <div class="col">
                        <label for="lastname">Keresztnév: <sup>*</sup></label>
                        <input v-model="user.lastName" type="text" id="lastname" class="form-control shadowed">
                        <ErrorMsg 
                            v-if="hasError"
                            :errors="errors.lastName"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="city">Város: <sup>*</sup></label>
                        <input v-model="user.city" type="text" name="city" id="city" class="form-control shadowed">
                        <ErrorMsg 
                            v-if="hasError"
                            :errors="errors.city"
                        />
                    </div>
                    <div class="col">
                        <label for="zipCode">Ir. Szám: <sup>*</sup></label>
                        <input v-model="user.zipCode" type="number" name="zipCode" id="zipCode" class="form-control shadowed">
                        <ErrorMsg 
                            v-if="hasError"
                            :errors="errors.zipCode"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="street">Utca <sup>*</sup></label>
                        <input v-model="user.street" type="text" id="street" class="form-control shadowed">
                        <ErrorMsg 
                            v-if="hasError"
                            :errors="errors.street"
                        />
                    </div>
                    <div class="col">
                        <label for="houseNumber">Házszám: <sup>*</sup></label>
                        <input v-model="user.houseNumber" type="number" id="houseNumber" class="form-control shadowed">
                        <ErrorMsg 
                            v-if="hasError"
                            :errors="errors.houseNumber"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="floorDoor">Emelet/Ajtó:</label>
                        <input v-model="user.floorDoor" type="text" id="floorDoor" class="form-control shadowed">
                        <ErrorMsg 
                            v-if="hasError"
                            :errors="errors.floorDoor"
                        />
                    </div>
                    <div class="col">
                        <label for="phone">Telefon: <sup>*</sup></label>
                        <input v-model="user.phone" type="text" id="phone" class="form-control shadowed">
                        <ErrorMsg 
                            v-if="hasError"
                            :errors="errors.phone"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <BaseButton 
                            v-show="!isUserinfoFilled"
                            :buttonClass="'confirm-dark'"
                            :buttonText="'Adatok megadása'"
                            @click.prevent.native="addUserInfo"
                        />
                    </div>  
                    <div class="col">
                    </div>     
                    <BaseButton 
                        v-show="isUserinfoFilled"
                        :buttonClass="'elete-dark'"
                        :buttonText="'Módosítás'"
                        @click.prevent.native="modifyUserInfo"
                    />                                  
                </div>
                <Alert
                    v-if="showException"
                    :className="'danger'"
                    :Msg="exceptionMsg"
                 />
                <Alert
                    v-if="showMsg"
                    :className="'success'"
                    :Msg="msg"
                 />
            </form>            
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "UserInfo",
    data:() => {
        return{
            hasError: false,
            showException: false,
            exceptionMsg: '',
            showMsg: false,
            msg: '',
            errors: {
                firstName: '',
                lastName: '',
                city: '',
                zipCode: '',
                street: '',
                houseNumber: '',
                floorDoor: '',
                phone: ''
            }
        }
    },
    props:{
        showMakeOrderBTN: Function,
    },
    computed:{
        ...mapGetters({
            user: 'getUserInfo',
            isUserinfoFilled: 'getUserInfoFilled',
        })
    },
    methods:{
        ...mapActions({
            getUserInfo: 'getUserInfo',
            increasePage: 'increasePage',
        }),
        showErrors(error){
            this.hasError = !this.hasError;
            this.errors.firstName = error.firstName;
            this.errors.lastName = error.lastName;
            this.errors.city = error.city;
            this.errors.zipCode = error.zipCode;
            this.errors.street = error.street;
            this.errors.houseNumber = error.houseNumber;
            this.errors.floorDoor = error.floorDoor;
            this.errors.phone = error.phone;
        },
        showExceptionMsg(msg){
            this.showException = true
            this.exceptionMsg = msg
            setTimeout(() => {this.showException = false}, 5000);
        },
        showOtherMsg(msg){
            this.showMsg = true
            this.msg = msg
            setTimeout(() => {this.showMsg = false}, 5000);
        },
        async addUserInfo(){
            await axios.post('addUserInfo', {
                formData: this.user
            }).then(userInfo => {
                if (userInfo.data.hasError) {
                    this.showErrors(userInfo.data.errors)
                }else{
                    if (!userInfo.data.exception) {
                        this.getUserInfo()
                        this.increasePage()
                        this.showMakeOrderBTN()
                    }else{
                        this.showExceptionMsg(userInfo.data.exception)
                    }
                }
            })
        },
        async modifyUserInfo(){
            await axios.post('updateUserInfo',{
                formData: this.user
            }).then(userInfo => {
                if (userInfo.data.hasError) {
                    this.showErrors(userInfo.data.errors)
                }else{
                    if (userInfo.data.exception) {
                        this.showExceptionMsg(userInfo.data.exception)
                    }else{
                        this.getUserInfo()
                        this.showOtherMsg('A Módosítás sikeres volt!')
                    }
                }
            })
        },
    },
}
</script>