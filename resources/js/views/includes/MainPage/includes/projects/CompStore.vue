<template>
    <BaseProject
        :articleClass="'comp-store'"
        :demoLink="'https://pcboltmvc.000webhostapp.com/'"
        :githubLink="'https://github.com/nagytommy76/PCBoltMVC'"
        :projectTitle="'Computer Store'"
    >
        <template v-slot:image>
            <!-- <img src="../../../../../../img/comp-store/intro.jpg" alt="Meatball Project" @click="$emit('show-image', 'comp-store')"> -->
            <CldImage lazy publicId="nagytamas93/PCBoltMVC/intro_ccseyv" @click="$emit('show-image', 'comp-store')" />
        </template>
        <template v-slot:tech-list>
            <TechList 
                :title="'PHP'"
                :tooltipTitle="'PHP'"
            >
                <font-awesome class="php" :icon="['fab', 'php']" size="2x"/>
            </TechList>
            <TechList 
                :title="'MySQL'"
                :tooltipTitle="'MySQL'"
            >
                <font-awesome class="mysql" :icon="['fas', 'database']" size="2x"/>
            </TechList>
            <TechList 
                :title="'Bootstrap'"
                :tooltipTitle="'Bootstrap 4'"
            >
                <font-awesome class="bootstrap" :icon="['fab', 'bootstrap']" size="2x"/>
            </TechList>
            <TechList 
                :title="'JS'"
                :tooltipTitle="'JavaScript'"
            >
                <font-awesome class="svg-icon" :icon="['fab', 'js-square']" size="2x"/>
            </TechList>
            <TechList 
                :title="'CSS3'"
                :tooltipTitle="'CSS3'"
            >
                 <font-awesome class="css" :icon="['fab', 'css3-alt']" size="2x"/>
            </TechList>
        </template>
        <template v-slot:description>
            <p>2019-ben készítettem el első weboldalamat.</p>
            <p>A vásárláshoz regisztráció szükséges, valamint a személyes (lakcím, telefonszám) adatokat is meg kell adni.</p>
            <p>A rendelés leadását követően kapunk egy email-t, amelyben taláható egy, a program áltat generált PDF formátumú számla.</p>
        </template>
    </BaseProject>
</template>
<script>
import TechList from './TechListItem'
export default {
    components: { TechList },
}
</script>