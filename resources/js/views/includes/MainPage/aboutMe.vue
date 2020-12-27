<template>
    <section id="aboutMe" class="main-content">
        <aside class="main-left-content">
            <img class="image" src="../../../../img/modified.jpg" alt="IAM">
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
        <section class="main-right-content" id="projects">
            <div class="grid-container">
                <h3 class="sub-title primary-color">Projectek</h3>
                <div class="projects">
                    <section class="meatball">
                        <h4 class="project-title">
                            <router-link :to="{name: 'Welcome'}">Húsgolyó Étterem honlapja</router-link>
                        </h4>
                        <p class="my-0">2020</p>
                        <p>2020 tavaszán kezdtem el fejleszteni ezt a weboldalt, ebben az esetben szerettem volna megismerkedni a modern keretrendszerekkel, front-end és back-end részről is. Ezért választottam a Vue.js-t, illetve a Laravelt.</p>
                        <p>A programban lehetőség van CRUD (Create-Read-Update-Delete), vagyis admin funkciók ellátására. 
                        A weboldal ezen része hagyományos, úgynevezett Multi-Page-Application, vagyis minden esemény (Pl.: gombnyomás) hatására az egész oldal újratölt.
                        Az admin műveletek megjelenítéséhez Blade Template-et használtam, ahol lehetőség volt rá, Blade komponenseket is (bevitel, módosítás, törlés), az újrahasználhatósága miatt.</p>
                        <p>A weboldal "vásárlóknak" szóló része Single-Page-Application.</p>
                        <div class="list">
                            <div class="list-block">
                                <h4 class="my-0">Oldal funkiók</h4>
                                <ul class="list-block-functions">
                                    <li>Felhasználó regisztrálása</li>
                                    <li>Bejelentkezés</li>
                                    <li>Tételek kosárba helyezése</li>
                                    <li>Termékek szürése:
                                        <ul> 
                                            <li>Ár szerint növekvő</li>
                                            <li>Ár szerint csökkenő sorrendben</li>
                                            <li>Név szerint</li>
                                        </ul>
                                    </li>
                                    <li>Vásárláskor e-mail küldése</li>
                                </ul>
                            </div>
                            <div class="list-block">
                                <h4 class="my-0">Használt technológiák</h4>
                                <ul class="list-block-technologies">
                                    <li>SASS</li>
                                    <li>Vue.js (Vuex, Vue-router)</li>
                                    <li>Laravel</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="wargaming-api">
                        <h4 class="project-title"><a target="_blank" href="https://nagytommy76.github.io/Wargaming/">World of Tanks weboldal</a></h4>
                        <p class="my-0">2020</p>
                        <p>A weboldal elkészítésével a célom az volt, hogy jobban megismerkedjek a Vue keretrendszerrel, illetve egy 3. féltől származó API-t tudjak értelmezni és használni.</p>
                        <p>Lehetőség van a játékosok nyilvános adatainak megtekintésére.</p>
                        <p>Az oldal mobilbarát, de pár funkció offos........</p>
                        <div class="list">
                            <div class="list-block">
                                <h4 class="my-0">Oldal funkiók</h4>
                                <ul class="list-block-functions">
                                    <li>
                                        Bejelentkezés Wargaming account-tal:
                                        <ul>
                                            <li>Adott tankkal elért eredmények</li>
                                            <li>Játékos privát statisztikája</li>
                                        </ul>
                                    </li>
                                    <li>Tank részletei egy modal-ban: 
                                        <ul>
                                            <li>Tankok részletes specifikációja</li>
                                            <li>Modulok váltása (torony, lánctalp, löveg)</li>
                                            <li>Legénység megjelenítése</li>
                                            <li>Előző és következő tank az ágon, ha van</li>
                                        </ul>
                                    </li>                                    
                                </ul>
                            </div>
                            <div class="list-block">
                                <h4 class="my-0">Használt technológiák</h4>
                                <ul class="list-block-technologies">
                                    <li>SASS</li>
                                    <li>Vue.js (Vuex, Vue-router, Vuex-persistedstate)</li>
                                    <li><a class="primary-color" href="https://developers.wargaming.net/reference/all/wot/?r_realm=eu" target="_blank">Wargaming API</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="comp-store">
                        <h4 class="project-title"><a target="_blank" href="https://pcboltmvc.000webhostapp.com/">Computer Store Webáruház</a></h4>
                        <p class="my-0">2019 - 2020</p>
                        <p>2019 őszén kezdtem el fejleszteni egy általam kitalált, számítástechnikai alkatrészeket árusító webáruház honlapját. Ez a project volt életem első, nagyobb és önálló munkája. Az alkalmazás megvalósításához MVC (Model-View-Controller) fejlesztési mintát használtam, amihez 
                        <span class="underline"><a class="text-black" target="_blank" href="https://www.udemy.com/course/object-oriented-php-mvc/">Brad Traversy</a></span>
                        egyik Udemy kurzusa adta az alapot.</p>
                        <p>A program megvalósításával a fő célom az MVC működésének megismerése és megértése volt, valamint az, hogy keretrendszer nélkül hogyan lehet megvalósítani egy webáruház alapvető funkcióit.</p>
                        <div class="list">
                            <div class="list-block">
                                <h4 class="my-0">Oldal funkiók</h4>
                                <ul class="list-block-functions">
                                    <li>Felhasználó regisztrálása</li>
                                    <li>Regisztrációs kód küldése</li>
                                    <li>Bejelentkezés</li>
                                    <li>Session kezelés</li>
                                    <li>Tételek kosárba helyezése</li>
                                    <li>Termékek közti kersés</li>
                                    <li>Vásárláskor e-mail küldése</li>
                                    <li>PDF számla készítése (FPDF)</li>
                                </ul>
                            </div>
                            <div class="list-block">
                                <h4 class="my-0">Használt technológiák</h4>
                                <ul class="list-block-technologies">
                                    <li>Bootstrap 4</li>
                                    <li>JavaScript</li>
                                    <li>CSS3</li>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
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
    },
}
</script>