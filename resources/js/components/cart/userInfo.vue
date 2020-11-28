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
                        <input v-model="formData.firstName" type="text" id="firstname" class="form-control shadowed">

                        <span v-if="hasError" class="invalid-feedback" role="alert">
                            <div v-for="(fNameErr, index) in errors.firstName" :key="index">
                                <strong>{{ fNameErr }}</strong>
                            </div> 
                        </span>
                    </div>
                    <div class="col">
                        <label for="lastname">Keresztnév: <sup>*</sup></label>
                        <input v-model="formData.lastName" type="text" id="lastname" class="form-control shadowed">

                        <span v-if="hasError" class="invalid-feedback" role="alert">
                            <div v-for="(fNameErr, index) in errors.lastName" :key="index">
                                <strong>{{ fNameErr }}</strong>
                            </div> 
                        </span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="city">Város: <sup>*</sup></label>
                        <input v-model="formData.city" type="text" name="city" id="city" class="form-control shadowed">

                        <span v-if="hasError" class="invalid-feedback" role="alert">
                            <div v-for="(fNameErr, index) in errors.city" :key="index">
                                <strong>{{ fNameErr }}</strong>
                            </div> 
                        </span>
                    </div>
                    <div class="col">
                        <label for="zipCode">Ir. Szám: <sup>*</sup></label>
                        <input v-model="formData.zipCode" type="number" name="zipCode" id="zipCode" class="form-control shadowed">

                        <span v-if="hasError" class="invalid-feedback" role="alert">
                            <div v-for="(fNameErr, index) in errors.zipCode" :key="index">
                                <strong>{{ fNameErr }}</strong>
                            </div> 
                        </span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="street">Utca <sup>*</sup></label>
                        <input v-model="formData.street" type="text" id="street" class="form-control shadowed">

                        <span v-if="hasError" class="invalid-feedback" role="alert">
                            <div v-for="(fNameErr, index) in errors.street" :key="index">
                                <strong>{{ fNameErr }}</strong>
                            </div> 
                        </span>
                    </div>
                    <div class="col">
                        <label for="houseNumber">Házszám: <sup>*</sup></label>
                        <input v-model="formData.houseNumber" type="number" id="houseNumber" class="form-control shadowed">

                        <span v-if="hasError" class="invalid-feedback" role="alert">
                            <div v-for="(fNameErr, index) in errors.houseNumber" :key="index">
                                <strong>{{ fNameErr }}</strong>
                            </div> 
                        </span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="floorDoor">Emelet/Ajtó:</label>
                        <input v-model="formData.floorDoor" type="text" id="floorDoor" class="form-control shadowed">

                        <span v-if="hasError" class="invalid-feedback" role="alert">
                            <div v-for="(fNameErr, index) in errors.floorDoor" :key="index">
                                <strong>{{ fNameErr }}</strong>
                            </div> 
                        </span>
                    </div>
                    <div class="col">
                        <label for="phone">Telefon: <sup>*</sup></label>
                        <input v-model="formData.phone" type="text" id="phone" class="form-control shadowed">

                        <span v-if="hasError" class="invalid-feedback" role="alert">
                            <div v-for="(fNameErr, index) in errors.phone" :key="index">
                                <strong>{{ fNameErr }}</strong>
                            </div> 
                        </span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <input v-show="!this.$parent.isUserinfoFilled" type="submit" value="Adatok megadása" @click.prevent="addUserInfo" class="btn btn-confirm-dark" />
                    </div>  
                    <div class="col">
                        <input v-show="this.$parent.isUserinfoFilled" type="submit" value="Módosítás" @click.prevent="modifyUserInfo" class="btn btn-delete-dark" />
                    </div>                                       
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
import Alert from '../baseComponents/Alert'
export default {
    name: "userinfo",
    data:() => {
        return{
            hasError: false,
            showException: false,
            exceptionMsg: '',
            showMsg: false,
            msg: '',
            formData: {
                firstName: '',
                lastName: '',
                city: '',
                zipCode: 0,
                street: '',
                houseNumber: '',
                floorDoor: '',
                phone: ''
            },
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
    components:{
        Alert
    },
    created(){
        this.fetchUserinfoData()
    },
    methods:{
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
                formData: this.formData
            }).then(userInfo => {
                if (userInfo.data.hasError) {
                    this.showErrors(userInfo.data.errors)
                }else{
                    if (!userInfo.data.exception) {
                        this.$parent.getUserInfo()
                        this.$parent.step++;
                    }else{
                        this.showExceptionMsg(userInfo.data.exception)
                    }
                }
            })
        },
        async modifyUserInfo(){
            await axios.post('updateUserInfo',{
                formData: this.formData
            }).then(userInfo => {
                if (userInfo.data.hasError) {
                    this.showErrors(userInfo.data.errors)
                }else{
                    if (userInfo.data.exception) {
                        this.showExceptionMsg(userInfo.data.exception)
                    }else{
                        this.showOtherMsg('A Módosítás sikeres volt!')
                    }
                }
            })
        },
        fetchUserinfoData(){
            if(this.$parent.isUserinfoFilled){
                this.formData = this.$parent.user.userinfo
            }
        }
    },
}
</script>