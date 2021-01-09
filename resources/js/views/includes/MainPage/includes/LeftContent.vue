<template>
   <aside class="main-left-content">
        <img class="image" src="../../../../../img/modified.jpg" alt="IAM">
        <div class="left-title">
            <span class="primary-color">Nagy Tamás</span>
            <div>Pályakezdő</div>
            <div>Fullstack Webfejlesztő</div>
        </div>
        <div class="stack-icon">
            <h4 class="icon-title">Back-end technológiák</h4>
            <div class="grid-tooltip">
                <Tooltip :text="'PHP'">
                    <span><i class="fab fa-php fa-2x"></i></span>
                </Tooltip>
                <Tooltip :text="'Laravel'">
                    <span><i class="fab fa-laravel fa-2x"></i></span>
                </Tooltip>
                <Tooltip :text="'MySQL'">
                    <span><i class="fas fa-database fa-2x"></i></span>
                </Tooltip>
            </div>               
            <h4 class="icon-title">Front-end technológiák</h4>
            <div class="grid-tooltip">
                <Tooltip :text="'JavaScript'">
                    <span><i class="fab fa-js-square fa-2x"></i></span>
                </Tooltip>
                <Tooltip :text="'Vue.js'">
                    <span><i class="fab fa-vuejs fa-2x"></i></span>
                </Tooltip>
                <Tooltip :text="'Bootstrap 4'">
                    <span><i class="fab fa-bootstrap fa-2x"></i></span>
                </Tooltip>
                <Tooltip :text="'CSS3'">
                    <span><i class="fab fa-css3-alt fa-2x"></i></span>
                </Tooltip>
                <Tooltip :text="'SASS'">
                    <span><i class="fab fa-sass fa-2x"></i></span>
                </Tooltip>
                <Tooltip :text="'HTML5'">
                    <span><i class="fab fa-html5 fa-2x"></i></span>
                </Tooltip>  
            </div>                            
            <h4 class="icon-title">Egyéb ismeretek</h4>                 
            <Tooltip :text="'GitHub'">
                <span><a target="_blank" href="https://github.com/nagytommy76"><i class="fab fa-github fa-2x"></i></a></span>
            </Tooltip> 
            <Tooltip :text="'Git'">
                <span><i class="fab fa-git-alt"></i></span>
            </Tooltip> 
            <Tooltip :text="'Windows 10'">
                <span><i class="fab fa-windows"></i></span>
            </Tooltip>  
            <Tooltip :text="'Node Package Manager'">
                <span><i class="fab fa-npm"></i></span>
            </Tooltip>  
        </div>
        <section class="summary">
            <h1 class="summary-header my-0">Rövid bemutatkozás</h1>
            <div class="summary-body">
                <p>Nagy Tamás vagyok, pályakezdő webfejlesztő. Jelenlegi tudásom nagy részét autodidakta módon szereztem, különböző kurzusok (Udemy) és weboldalak (freeCodeCamp, w3school) segítségével, valamint saját projectek elkészítésével.</p>
                <p>Tudásomat folyamatosan bővítem. Jelenleg Laravelt és Vue.js-t tanulom, ezekkel a technológiákkal szeretnék állást találni</p>
                <p>A jövőt tekintve szeretnék megismerkedni a Node.js-el, React-el, és a MongoDB-vel</p>
                <p>BackEnd és FrontEnd munkák egyaránt érdekelnek</p>
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