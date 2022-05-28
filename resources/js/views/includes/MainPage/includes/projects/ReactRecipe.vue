<template>
    <BaseProject
        :articleClass="'recipe-react'"
        :demoLink="'https://react-recipe-finder.web.app/'"
        :githubLink="'https://github.com/nagytommy76/ReactRecipeFinder'"
        :projectTitle="'Recept kereső'"
    >
        <template v-slot:image>
            <img
                src="../../../../../../img/react-recipe/react-recipe.jpg"
                alt="React Recipe"
                @click="$emit('show-image', 'React Recipe')"
            />
        </template>
        <template v-slot:tech-list>
            <TechList :title="'React.js'" :tooltipTitle="'React.js'">
                <font-awesome
                    class="react"
                    :icon="['fab', 'react']"
                    size="2x"
                />
            </TechList>
            <TechList :title="'TypeScript'" :tooltipTitle="'TypeScript'">
                <img
                    src="../typescript_alt_icon.svg"
                    alt=""
                    style="width: 26px; height: 26px;"
                    class="svg-icon typescript"
                />
            </TechList>
            <TechList :title="'Styled-components'" :isTooltip="false" />
            <TechList :title="'Spoonacular API'" :isTooltip="false" />
        </template>
        <template v-slot:description>
            <p>
                A receptek eléréséhez a
                <a
                    class="primary-color"
                    target="_blank"
                    href="https://spoonacular.com/food-api/docs"
                    >Spoonacular API</a
                >-t használom.
            </p>
            <p>
                Recepteket, videókat illetve menüket (MCDonalds, Burger King)
                tudunk keresni név, illetve hosszávalók alapján.
            </p>
            <p></p>
        </template>
    </BaseProject>
</template>
<script>
import TechList from "./TechListItem";
export default {
    components: {
        TechList
    }
};
</script>
