<template>
    <BaseProject
        :articleClass="'recipe'"
        :demoLink="'https://recipe-finder-app-c0b4e.firebaseapp.com/'"
        :githubLink="'https://github.com/nagytommy76/Receipe-and-Food'"
        :projectTitle="'Recept Kereső'"
    >
        <template v-slot:image>
            <img src="../../../../../../img/recipe/Main-page.jpg" alt="Meatball Project" @click="$emit('show-image', 'recipe')">
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
            <TechList 
                :title="'Saját fejlesztésű API'"
                :isTooltip="false"
            />
            <TechList 
                :title="'Single-Page-Application'"
                :isTooltip="false"
            />
        </template>
        <template v-slot:description>
            <p>A weboldal egy kitalált étterem honlapja, ahol lehetőség van ételeket rendelni.</p>
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