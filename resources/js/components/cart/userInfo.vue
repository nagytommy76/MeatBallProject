<template>
    <div>
        <div class="modal-head">
            <h2 class="text-center py-1">Szállítási információk megadása (kötelező!)</h2>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group row">
                    <div class="col">
                        <label for="firstname">Vezetéknév</label>
                        <input v-model="formData.firstname" type="text" id="firstname" class="form-control">
                    </div>
                    <div class="col">
                        <label for="lastname">Keresztnév</label>
                        <input v-model="formData.lastname" type="text" id="lastname" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="city">Város</label>
                        <input v-model="formData.city" type="text" name="city" id="city" class="form-control">
                    </div>
                    <div class="col">
                        <label for="zipCode">Ir. Szám</label>
                        <input v-model="formData.zipCode" type="number" name="zipCode" id="zipCode" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="street">Utca</label>
                        <input v-model="formData.street" type="text" id="street" class="form-control">
                    </div>
                    <div class="col">
                        <label for="houseNumber">Házszám</label>
                        <input v-model="formData.houseNumber" type="text" id="houseNumber" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col">
                        <label for="floorDoor">Emelet/Ajtó:</label>
                        <input v-model="formData.floorDoor" type="text" id="floorDoor" class="form-control">
                    </div>
                </div>
                <input type="submit" value="Adatok megadása" @click.prevent="addUserInfo" class="btn btn-confirm" />
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
            formData: {
                firstname: '',
                lastname: '',
                city: '',
                zipCode: 0,
                street: '',
                houseNumber: '',
                floorDoor: ''
            },
            errors: {
                firstname: '',
                lastname: '',
                city: '',
                zipCode: '',
                street: '',
                houseNumber: '',
                floorDoor: ''
            }
        }
    },
    methods:{
        addUserInfo(){

        }
    },
}
</script>