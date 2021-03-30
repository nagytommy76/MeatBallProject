<template>
    <BaseProject
        :articleClass="'recipe'"
        :demoLink="'https://recipe-finder-app-c0b4e.firebaseapp.com/'"
        :githubLink="'https://github.com/nagytommy76/Receipe-and-Food'"
        :projectTitle="'Recept Kereső'"
    >
        <template v-slot:image>
            <CloudImage folder="Recipe finder" image="Main-page_a9xjav"/>
        </template>
        <template v-slot:tech-list>
            <TechList 
                :title="'Vue.js'"
                :tooltipTitle="'Vue.js'"
            >
                <font-awesome class="vue" :icon="['fab', 'vuejs']" size="2x"/>
            </TechList>
            <TechList 
                :title="'SASS'"
                :tooltipTitle="'SASS'"
            >
                <font-awesome class="sass" :icon="['fab', 'sass']" size="2x"/>
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