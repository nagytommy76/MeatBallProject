<template>
    <aside class="main-left-content">
        <img
            class="image"
            src="../../../../../img/me_modified_final.jpg"
            alt="IAM"
        />
        <div class="left-title">
            <span class="primary-color">Nagy Tamás</span>
            <div>Pályakezdő</div>
            <div>Frontend fejlesztő</div>
        </div>
        <div class="stack-icon">
            <h4 class="icon-title">Backend technológiák</h4>
            <div class="grid-tooltip">
                <Tooltip :text="'Node.js (Express.js)'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'node']"
                        size="2x"
                    />
                </Tooltip>
                <Tooltip :text="'MongoDB'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fas', 'database']"
                        size="2x"
                    />
                </Tooltip>
            </div>
            <h4 class="icon-title">Frontend technológiák</h4>
            <div class="grid-tooltip">
                <Tooltip :text="'JavaScript'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'js-square']"
                        size="2x"
                    />
                </Tooltip>
                <Tooltip :text="'React.js'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'react']"
                        size="2x"
                    />
                </Tooltip>
                <Tooltip :text="'CSS3'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'css3-alt']"
                        size="2x"
                    />
                </Tooltip>
                <Tooltip :text="'SASS'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'sass']"
                        size="2x"
                    />
                </Tooltip>
                <Tooltip :text="'HTML5'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'html5']"
                        size="2x"
                    />
                </Tooltip>
                <Tooltip :text="'Vue.js'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'vuejs']"
                        size="2x"
                    />
                </Tooltip>
            </div>
            <h4 class="icon-title">Egyéb ismeretek</h4>
            <div class="grid-tooltip">
                <Tooltip :text="'GitHub'">
                    <a target="_blank" href="https://github.com/nagytommy76"
                        ><font-awesome
                            class="svg-icon"
                            :icon="['fab', 'github']"
                            size="2x"
                    /></a>
                </Tooltip>
                <Tooltip :text="'Git'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'git-alt']"
                        size="2x"
                    />
                </Tooltip>
                <Tooltip :text="'TypeScript'">
                    <img
                        class="svg-icon"
                        src="./typescript_alt_icon.svg"
                        style="width: 40px; height: 40px;"
                        alt=""
                    />
                </Tooltip>
                <Tooltip :text="'Windows 10'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'windows']"
                        size="2x"
                    />
                </Tooltip>
                <Tooltip :text="'Node Package Manager'">
                    <font-awesome
                        class="svg-icon"
                        :icon="['fab', 'npm']"
                        size="2x"
                    />
                </Tooltip>
            </div>
        </div>
        <section class="summary">
            <h1 class="summary-header">Rövid bemutatkozás</h1>
            <div class="summary-body">
                <p>
                    Nagy Tamás vagyok, pályakezdő webfejlesztő. Jelenlegi
                    tudásom nagy részét autodidakta módon szereztem, különböző
                    kurzusok (Udemy) és weboldalak (freeCodeCamp, w3schools és
                    természetesen StackOverflow &#128578; ) segítségével,
                    valamint saját projectek elkészítésével.
                </p>
                <p>
                    Fő erősségemnek a JavaScript-et és a React.js könyvtárat
                    tartom.
                </p>
                <p>
                    Jelenleg a MERN (MongoDB, Express.js, React, Node.js)
                    stack-et tanulom, valamint TypeScript-et.
                </p>
                <p>
                    Kezdőként forntend, vagy fullstack területen szeretnék
                    elhelyezkedni, illetve bővíteni tudásomat.
                </p>
                <p>
                    A jövőt tekintve szeretném mélyíteni a tudásom Node.js-ben
                    (Express.js) és MongoDB-ben.
                </p>
            </div>
        </section>
        <FooterContact />
    </aside>
</template>
<script>
import FooterContact from "./FooterContact";
export default {
    components: {
        FooterContact
    }
};
</script>
<style lang="scss" scoped>
@import "../../../../../sass/inc/portfolio/left-content.scss";
</style>
