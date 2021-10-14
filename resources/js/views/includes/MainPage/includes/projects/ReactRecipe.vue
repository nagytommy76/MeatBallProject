<template>
    <BaseProject
        :articleClass="'recipe-react'"
        :demoLink="'https://react-recipe-finder.web.app/'"
        :githubLink="'https://github.com/nagytommy76/ReactRecipeFinder'"
        :projectTitle="'Recept kereső'"
    >
        <template v-slot:image>
            <img src="../../../../../../img/react-recipe/react-recipe.jpg" alt="React Recipe" @click="$emit('show-image', 'React Recipe')">
        </template>
        <template v-slot:tech-list>
            <TechList 
                :title="'React.js'"
                :tooltipTitle="'React.js'"
            >
                <font-awesome class="react" :icon="['fab', 'react']" size="2x" />
            </TechList>
            <TechList 
                :title="'TypeScript'"
                :tooltipTitle="'TypeScript'"
            >
                <img src="../typescript_alt_icon.svg" alt="" style="width: 32px;" class="svg-icon typescript">
            </TechList>
            <TechList 
                :title="'Styled-components'"
                :isTooltip="false"
            />
            <TechList 
                :title="'Spoonacular API'"
                :isTooltip="false"
            />
            <TechList 
                :title="'Single-Page-Application'"
                :isTooltip="false"
            />
        </template>
        <template v-slot:description>
             <!-- <p>Az oldal a <a class="primary-color" target="_blank" href="https://spoonacular.com/food-api/docs">Spoonacular API</a>-t használja.</p>
            <p>Recepteket tudunk keresni név, maximum elkészítési idő, valamint hozzávalók szerint.</p>
            <p>Alapból 10 recept jelenik meg, de ezt a számot tudjuk növelni vagy csökkenteni.</p>
            <p>A keresési előzmény mentésre kerül a localStorage-be.</p> -->
            <p>A receptek eléréséhez a <a class="primary-color" target="_blank" href="https://spoonacular.com/food-api/docs">Spoonacular API</a>-t használom.</p>
            <p>Recepteket, videókat tudunk keresni név alapján.</p>
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