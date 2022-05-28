<template>
    <BaseProject
        :articleClass="'recipe-react'"
        :demoLink="''"
        :githubLink="'https://github.com/nagytommy76/ComputerStoreMERN'"
        :projectTitle="'Számtech webáruház'"
    >
        <template v-slot:image>
            <img
                src="../../../../../../img/comp-mern/comp-thumb.jpg"
                alt="Computer Store"
                @click="$emit('show-image', 'CompStoreMERN')"
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
            <TechList :title="'Node.js'" :tooltipTitle="'Node.js'">
                <font-awesome class="node" :icon="['fab', 'node']" size="2x" />
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
            <TechList :title="'MaterialUI'" :isTooltip="false" />
            <TechList :title="'Saját fejlesztésű API'" :isTooltip="false" />
        </template>
        <template v-slot:description>
            <p>
                Jelenleg ezen a hobby projekten dolgozom ami egy PC
                alkatrészeket árusító, MERN stack applikáció (MongoDB,
                Express.Js, React, Node.js).
            </p>
            <p>
                A felhasználók a regisztráció és email cím megerősítése után
                bejelentkezhetnek, majd vásárolhatnak különböző termékeket (pl.
                CPU, VGA, HDD, RAM). Később tervezem bővíteni a termékek
                listáját.
            </p>
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

<style></style>
