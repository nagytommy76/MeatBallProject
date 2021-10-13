<template>
    <BaseProject
        :articleClass="'recipe-react'"
        :demoLink="'https://react-recipe-finder.web.app/'"
        :githubLink="'https://github.com/nagytommy76/ReactRecipeFinder'"
        :projectTitle="'Recept kereső'"
    >
        <template v-slot:image>
            <img src="../../../../../../img/meatball/meatball-thumb.jpg" alt="Meatball Project" @click="$emit('show-image', 'Meatball')">
        </template>
        <template v-slot:tech-list>
            <TechList 
                :title="'React.js'"
                :tooltipTitle="'React.js'"
            >
                <font-awesome class="svg-icon" :icon="['fab', 'react']" size="2x" />
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