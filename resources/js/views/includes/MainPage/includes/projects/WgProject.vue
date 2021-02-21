<template>
    <BaseProject
        :articleClass="'wargaming'"
        :demoLink="'https://nagytommy76.github.io/Wargaming'"
        :githubLink="'https://github.com/nagytommy76/WgAPIVue'"
        :projectTitle="'World of Tanks'"
    >
        <template v-slot:image>
            <img src="../../../../../../img/wargaming/modal.jpg" alt="Wargaming" @click="$emit('show-image', 'wargaming')">
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
                :title="'Single-Page-Application'"
                :isTooltip="false"
            />
        </template>
        <template v-slot:description>
            <p>Lehetőségünk van nemzet és jármű osztály szerint szűrni, majd az adott tankra kattinta az előugró ablakban konfigurálni azt. Lánctalpat, tornyot, löveget, rádiót tudunk választani, ahol lehetséges. A specifikáció részben pedig ennek megfelelően változik a tank karakterisztikája.</p>
            <p>Játékosok név szerinti keresése is lehetséges. Regisztráció nélkül is használható az oldal, viszont ha rendelkezünk Wargaming fiókkal be tudunk jelentkezni, és kibővített adatokat (Prémium napok, kredit, bonds) láthatunk ha a játékosnevünkre keresünk rá.</p>
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