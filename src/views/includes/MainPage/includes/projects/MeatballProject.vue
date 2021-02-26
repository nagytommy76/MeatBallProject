<template>
    <BaseProject
        :articleClass="'meatball'"
        :demoLink="'Welcome'"
        :routerLink="true"
        :githubLink="'https://github.com/nagytommy76/MeatBallProject'"
        :projectTitle="'Húsgolyó étterem'"
    >
        <template v-slot:image>
            <img src="../../../../../img/meatball/meatball-main-page.jpg" alt="Meatball Project" @click="$emit('show-image', 'meatball')">
        </template>
        <template v-slot:tech-list>
            <TechList 
                :title="'Laravel'"
                :tooltipTitle="'Laravel'"
            >
                <i class="fab fa-laravel fa-2x laravel"></i>
            </TechList>
            <TechList 
                :title="'MySQL'"
                :tooltipTitle="'MySQL'"
            >
                <i class="fas fa-database fa-2x mysql"></i>
            </TechList>
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
            <p>A vásárláshoz szükséges a regisztráció, illetve e-mail cím validáció.</p>
            <p>A rendelés leadásakor lehetőség van készpénzzel a "futárnál", illetve PayPal-en keresztül fizetni egy sandbox számlával.</p>
            <p>Létrehoztam egy admin felületet is, amin keresztül termékeket lehet bevinni, törölni és módosítani</p>
        </template>
    </BaseProject>
</template>
<script>
import TechList from './TechListItem'
export default {
    components:{
        TechList,
    }
}
</script>