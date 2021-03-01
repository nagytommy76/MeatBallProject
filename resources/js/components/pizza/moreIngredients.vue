<template>
<div class="moreIngredients">
    <div v-for="ing in moreIngreds" :key="ing.ingred_id">
        <label>
        <input 
            @click="select(ing.ingred_id, ing.price, $event)" 
            type="checkbox"
            name="plusIngreds[]"
            :checked="inSelectedIngreds(ing.ingred_id)"
        >            
        {{ing.ingredient_name}} <span class="primary-color">({{ ing.price }}) </span> Ft
        </label> 
    </div>
</div>
</template>
<script>
export default {
    props:{
        moreIngreds: Array,
        selectedIngreds: Array,
    },
    methods:{
        select(ingredId, ingredPrice, e){
            if(e.target.checked){                
                if(!this.selectedIngreds.includes(ingredId)){
                    this.$emit('increase-price', ingredPrice)
                    this.selectedIngreds.push(ingredId)
                }                
            }else{
                this.$emit('decrease-price', ingredPrice)
                const found = this.selectedIngreds.findIndex(item => item == ingredId)
                this.selectedIngreds.splice(found,1);
            }
        },
        inSelectedIngreds(ingredId){
            if(this.selectedIngreds.length > 0){
                return this.selectedIngreds.includes(ingredId)
            }         
        }
    }
}
</script>