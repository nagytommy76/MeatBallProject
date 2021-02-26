<template>
    <BaseProject
        :articleClass="'recipe'"
        :demoLink="'https://recipe-finder-app-c0b4e.firebaseapp.com/'"
        :githubLink="'https://github.com/nagytommy76/Receipe-and-Food'"
        :projectTitle="'Recept Kereső'"
    >
        <template v-slot:image>
            <img src="../../../../../img/recipe/Main-page.jpg" alt="Meatball Project" @click="$emit('show-image', 'recipe')">
        </template>
        <template v-slot:tech-list>
            <TechList 
                :title="'Vue.js'"
                :tooltipTitle="'Vue.js'"
            >
                <i class="fab fa-vuejs fa-2x vue"></i>
            </TechList>
            <TechList 
                :title="'SASS'"
                :tooltipTitle="'SASS'"
            >
                <i class="fab fa-sass fa-2x sass"></i>
            </TechList>
        </template>
        <template v-slot:description>
            <p>Az oldal a <a class="primary-color" target="_blank" href="https://spoonacular.com/food-api/docs">Spoonacular API</a>-t használja.</p>
            <p>Recepteket tudunk keresni név, maximum elkészítési idő, valamint hozzávalók szerint.</p>
            <p>Alapból 10 recept jelenik meg, de ezt a számot tudjuk növelni vagy csökkenteni.</p>
            <p>A keresési előzmény mentésre kerül a localStorage-be.</p>
        </template>
    </BaseProject>
</template>
<script>
import TechList from './TechListItem'
export default {
    components:{
        TechList
    },
}
</script>