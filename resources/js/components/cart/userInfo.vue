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
            </form>            
        </div>
    </div>
</template>
<script>
export default {
    name: "userinfo",
    template: "userinfo",
    data:() => {
        return{
            hasError: false,
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
        async addUserInfo(){
            await fetch('api/addUserInfo',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.$parent.accessToken
                },
                body: JSON.stringify(this.formData)
            }).then(response => response.json())
            .then(result => {
                if (result.hasError) {
                    this.showErrors(result.errors)
                }else{
                    if(!result.hasError && !result.exception){
                        this.$parent.userinfoFilled()
                        .then(user => {
                            this.$parent.user = user;
                            this.$parent.isUserinfoFilled = user.user.userinfo_filled;
                            this.$parent.step++;
                        })                        
                    }                    
                }              
            }).catch(error => console.log(error))
        },
        async modifyUserInfo(){
            await fetch('api/updateUserInfo', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.$parent.accessToken
                },
                body: JSON.stringify(this.formData)
            }).then(response => response.json())
            .then(result =>{
                if(result.hasError){
                    this.showErrors(result.errors)
                }else{
                    console.log(result)
                }
            })
            .catch(error => console.log(error))
        },
        fetchUserinfoData(){
            if(this.$parent.isUserinfoFilled){
                this.formData = this.$parent.user.userInfo
            }
        }
    },
}
</script>