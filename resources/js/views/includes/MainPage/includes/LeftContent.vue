<template>
   <aside class="main-left-content">
        <CldImage publicId="nagytamas93/modified_q1vcff" class="profile-image" >
            <CldTransformation width="200" crop="scale" />
        </CldImage>
        <div class="left-title">
            <span class="primary-color">Nagy Tamás</span>
            <div>Pályakezdő</div>
            <div>Frontend fejlesztő</div>
        </div>
        <div class="stack-icon">
            <h4 class="icon-title">Backend technológiák</h4>
            <div class="grid-tooltip">
                <Tooltip :text="'PHP'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'php']" size="2x"/></span>
                </Tooltip>
                <Tooltip :text="'Laravel'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'laravel']" size="2x"/></span>
                </Tooltip>
                <Tooltip :text="'MySQL'">
                    <span><font-awesome class="svg-icon" :icon="['fas', 'database']" size="2x"/></span>
                </Tooltip>
            </div>               
            <h4 class="icon-title">Frontend technológiák</h4>
            <div class="grid-tooltip">
                <Tooltip :text="'JavaScript'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'js-square']" size="2x"/></span>
                </Tooltip>
                <Tooltip :text="'Vue.js'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'vuejs']" size="2x"/></span>
                </Tooltip>
                <Tooltip :text="'Bootstrap 4'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'bootstrap']" size="2x"/></span>
                </Tooltip>
                <Tooltip :text="'CSS3'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'css3-alt']" size="2x"/></span>
                </Tooltip>
                <Tooltip :text="'SASS'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'sass']" size="2x"/></span>
                </Tooltip>
                <Tooltip :text="'HTML5'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'html5']" size="2x"/></span>
                </Tooltip>  
            </div>                            
            <h4 class="icon-title">Egyéb ismeretek</h4>  
            <div class="grid-tooltip">               
                <Tooltip :text="'GitHub'">
                    <span><a target="_blank" href="https://github.com/nagytommy76"><font-awesome class="svg-icon" :icon="['fab', 'github']" size="2x"/></a></span>
                </Tooltip> 
                <Tooltip :text="'Git'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'git-alt']" size="2x"/></span>
                </Tooltip> 
                <Tooltip :text="'Windows 10'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'windows']" size="2x"/></span>
                </Tooltip>  
                <Tooltip :text="'Node Package Manager'">
                    <span><font-awesome class="svg-icon" :icon="['fab', 'npm']" size="2x"/></span>
                </Tooltip>  
            </div> 
        </div>
        <section class="summary">
            <h1 class="summary-header my-0">Rövid bemutatkozás</h1>
            <div class="summary-body">
                <p>Nagy Tamás vagyok, pályakezdő webfejlesztő. Jelenlegi tudásom nagy részét autodidakta módon szereztem, különböző kurzusok (Udemy) és weboldalak (freeCodeCamp, w3schools) segítségével, valamint saját projectek elkészítésével.</p>
                <p>Fő erősségemnek a JavaScript-et és a Vue.js keretrendszert tartom.</p>
                <p>Jelenleg a Laravel, React és Vue.js keretrendszereket tanulom.</p>
                <p>Kezdőként forntend területen szeretnék elhelyezkedni, illetve bővíteni tudásomat. A későbbiekben a fullstack irány a célom.</p>
                <p>A jövőt tekintve szeretnék megismerkedni a Node.js-el (valamint Express.js) és a MongoDB-vel.</p>
            </div>
        </section>
        <FooterContact />
    </aside>
</template>
<script>
import FooterContact from './FooterContact'
export default {
    components:{
        FooterContact
    },
}
</script>
<style lang="scss">
    @import './Image.scss';
</style>
<style lang="scss" scoped>
 @import '../../../../../sass/inc/portfolio/left-content.scss';
</style>