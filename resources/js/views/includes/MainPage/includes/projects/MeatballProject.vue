<template>
    <BaseProject
        :articleClass="'meatball'"
        :demoLink="'Welcome'"
        :routerLink="true"
        :githubLink="'https://github.com/nagytommy76/MeatBallProject'"
        :projectTitle="'Húsgolyó étterem'"
    >
        <template v-slot:image>
            <img src="../../../../../../img/meatball/meatball-thumb.jpg" alt="Meatball Project" @click="$emit('show-image', 'Meatball')">
        </template>
        <template v-slot:tech-list>
            <TechList 
                :title="'Laravel'"
                :tooltipTitle="'Laravel'"
            >
                <font-awesome class="laravel" :icon="['fab', 'laravel']" size="2x"/>
            </TechList>
            <TechList 
                :title="'MySQL'"
                :tooltipTitle="'MySQL'"
            >
                <font-awesome class="mysql" :icon="['fas', 'database']" size="2x"/>
            </TechList>
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
            <TechList 
                :title="'Saját fejlesztésű API'"
                :isTooltip="false"
            />
        </template>
        <template v-slot:description>
            <p>A weboldal egy kitalált étterem honlapja, ahol lehetőség van ételeket rendelni.</p>
            <p>A vásárláshoz szükséges a regisztráció, illetve e-mail cím validáció.</p>
            <p>A rendelés leadásakor lehetőség van készpénzzel a "futárnál", illetve PayPal-en keresztül fizetni egy sandbox számlával.</p>
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