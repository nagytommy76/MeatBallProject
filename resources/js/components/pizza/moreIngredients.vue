<template>
<div class="moreIngredients">
    <div v-for="ing in ingreds" :key="ing.ingred_id">
        <label for="plusIngreds[]">
        {{ing.ingredient_name}} <span class="primary-color">({{ ing.price }}) </span> Ft</label>
        <input @click="select" type="checkbox" name="plusIngreds[]" v-bind:id="ing.ingred_id" v-bind:value="ing.price">
    </div>
</div>
</template>


<script>
export default {
    data: () =>{
        return {
            ingreds: [],
            selectedIngreds: []
        }
    },
    props: [
        
    ],
    created(){
        // this.fetchIngredients();
    },
    methods:{
        // fetchIngredients(){
        //     fetch('api/getPlusIngreds')
        //     .then(resp => resp.json())
        //     .then(res => {
        //         this.ingreds = res.data;
        //     })
        // },
        select(e){
            // console.log(e.target.checked)
            // console.log(e.target.value)
            let currentObject = {
                ingredId: e.target.id,
                ingredPrice: e.target.value
            }
            this.selectedIngreds.push(currentObject)
        }
    }
}
</script>