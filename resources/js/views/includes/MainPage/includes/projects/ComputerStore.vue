<template>
  <BaseProject
        :articleClass="'recipe-react'"
        :demoLink="''"
        :githubLink="'https://github.com/nagytommy76/ComputerStoreMERN'"
        :projectTitle="'Számtech webáruház (!)'"
    >
        <template v-slot:image>
            <img src="../../../../../../img/comp-mern/comp-thumb.jpg" alt="Computer Store" @click="$emit('show-image', 'CompStoreMERN')">
        </template>
        <template v-slot:tech-list>
            <TechList 
                :title="'React.js'"
                :tooltipTitle="'React.js'"
            >
                <font-awesome class="react" :icon="['fab', 'react']" size="2x" />
            </TechList>
            <TechList 
                :title="'Node.js'"
                :tooltipTitle="'Node.js'"
            >
                <font-awesome class="node" :icon="['fab', 'node']" size="2x" />
            </TechList>
            <TechList 
                :title="'TypeScript'"
                :tooltipTitle="'TypeScript'"
            >
                <img src="../typescript_alt_icon.svg" alt="" style="width: 32px; height: 32px;" class="svg-icon typescript">
            </TechList>
            <TechList 
                :title="'Styled-components'"
                :isTooltip="false"
            />
            <TechList 
                :title="'MaterialUI'"
                :isTooltip="false"
            />
                <TechList 
                :title="'Saját fejlesztésű API'"
                :isTooltip="false"
            />
        </template>
        <template v-slot:description>
            <h3>Az oldalt jelenleg is fejlesztem és bővítem új funkciókkal!</h3>
            <p>Egy számítástechnikai webáruház, melyben egyelőre az alap funkciók működnek:</p>
            <p>Felhasználó regisztráció, belépés</p>
            <p>CPU/VGA termékek megjelenítése.</p>
            <p>Szűrés ár intervallum, illetve gyártők szerint. Rendezés ár szerint és termékek oldalankénti számának állítási lehetősége</p>
        </template>
    </BaseProject>
</template>

<script>
import TechList from './TechListItem'
export default {
    components:{
        TechList
    }
}
</script>

<style>

</style>