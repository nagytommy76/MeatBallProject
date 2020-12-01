<template>
    <section id="aboutMe" class="main-content">
        <aside class="main-left-content">
            <img class="image" src="../../../../img/final.jpg" alt="IAM">
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
        <section class="main-right-content">
            <div class="main-title">
                <h1 class="main-title-main">Nagy Tamás</h1>
                <h3 class="main-title-sub">Pályakezdő Fullstack Webfejlesztő</h3>
            </div>
            <div class="grid-container">
                <h3 class="sub-title">Projectek</h3>
                <div class="projects">
                    <section class="comp-store">
                        <h4 class="project-title"><a target="_blank" href="https://nagytamasweboldal.000webhostapp.com/">Computer Store Webáruház</a></h4>
                        <p class="my-0">2019 - 2020</p>
                        <p>2019 őszén kezdtem el fejleszteni egy kitalált számítástechnikai alkatrészeket árusító webáruház honlapját. Az alkalmazás megvalósításához MVC (Model-View-Controller) fejlesztési mintát használtam, amihez 
                        <span class="underline"><a class="text-black" target="_blank" href="https://www.udemy.com/course/object-oriented-php-mvc/">Brad Traversy</a></span>
                        egyik Udemy kurzusa adta az alapot.</p>
                        <p>A program megvalósításával a fő célom az MVC (Model-View-Controller) működésének megismerése és megértése volt, valamint az, hogy keretrendszer nélkül hogyan lehet megvalósítani egy webáruház alapvető funkcióit.</p>
                        <p>Például: regisztráció, bejelentkezés, session kezelés, kosár és oldalon belüli keresés.</p>
                        <h4 class="my-0">Használt technológiák</h4>
                        <ul class="tech-list">
                            <li>Bootstrap 4</li>
                            <li>JavaScript</li>
                            <li>CSS3</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                    </section>
                    <section class="meatball">
                        <h4 class="project-title">
                            <router-link :to="{name: 'Welcome'}">Húsgolyó Étterem honlapja</router-link>
                        </h4>
                        <p class="my-0">2020 -</p>
                        <p>2020 tavaszán kezdtem fejleszteni ezt a weboldalt, ebben az esetben szerettem volna megismerkedni a modern keretrendszerekkel, front-end és back-end részről is. Ezért választottam a Vue.js-t, illetve a Laravelt.</p>
                        <p>A programban lehetőség van CRUD (Create-Read-Update-Delete) vagyis admin feladatok ellátására.</p>
                        <p>Ezen műveletek megjelenítéséhez Blade Template-et használtam, ahol lehetőség volt rá, Blade komponenseket is (bevitel, módosítás, törlés).</p>
                        <h4 class="my-0">Használt technológiák</h4>
                        <ul class="tech-list">
                            <li>SASS</li>
                            <li>Vue.js (Vuex, Vue-router)</li>
                            <li>Laravel</li>
                            <li>MySQL</li>
                        </ul>
                    </section>
                </div>
            </div>            
        </section>
    </section>
</template>
<script>
import Tooltip from '../../../components/Utility/Tooltip'
import FooterContact from '../../../components/AboutMe/FooterContact'
export default {
    name: 'AboutMe',
    components:{
        Tooltip,
        FooterContact,
    }
}
</script>