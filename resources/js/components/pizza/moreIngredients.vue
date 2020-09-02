<template>
<div class="moreIngredients">
    <div v-for="ing in ingredients" :key="ing.ingred_id">
        <label>
        <input 
            @click="select" 
            type="checkbox"
            name="plusIngreds[]"
            v-bind:id="ing.ingred_id"
            v-bind:value="ing.price"
            :checked="inSelectedIngreds(ing.ingred_id)"
        >            
        {{ing.ingredient_name}} <span class="primary-color">({{ ing.price }}) </span> Ft
        </label>
        
    </div>
</div>
</template>
<script>
export default {
    data: () =>{
        return {
            
        }
    },
    computed:{
        ingredients: function(){
            return this.$parent.$parent.ingreds
        }
    },
    methods:{
        select(e){
            let ingredId = e.target.id;
            let ingredPrice = parseInt(e.target.value);

            if(e.target.checked){                
                if(!this.$parent.selectedIngreds.includes(ingredId)){
                    this.$parent.finalPrice += ingredPrice;
                    this.$parent.selectedIngreds.push(ingredId)
                }                
            }else{
                this.$parent.finalPrice -= ingredPrice;
                const found = this.$parent.selectedIngreds.findIndex(item => item == ingredId)
            
                this.$parent.selectedIngreds.splice(found,1);
            }
        },
        inSelectedIngreds(ingredId){
            // console.log(ingredId);
            if(this.$parent.selectedIngreds.length > 0){
                // console.log('CSÁ');
                console.log(this.$parent.selectedIngreds.includes(ingredId))
            }
            // this.$parent.selectedIngreds.forEach(element => {
               
            // });          
        }
    }
}
</script>