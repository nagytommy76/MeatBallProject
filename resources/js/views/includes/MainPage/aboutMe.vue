<template>
    <section id="aboutMe" class="main-content">
        <LeftContent />
        <section class="main-right-content" id="projects">
            <div class="grid-container">
                <h3 class="sub-title primary-color">Projectek</h3>
                <div class="projects">
                    <section class="meatball project">
                        <h4 class="project-title">
                            <router-link :to="{name: 'Welcome'}">Húsgolyó Étterem honlapja</router-link>
                        </h4>
                        <section class="project-description">
                            <article>
                                <p class="my-0">2020</p>
                                <p>2020 tavaszán kezdtem el fejleszteni ezt a weboldalt, ebben az esetben szerettem volna megismerkedni a modern keretrendszerekkel, front-end és back-end részről is. Ezért választottam a Vue.js-t, illetve a Laravelt.</p>
                                <p>A programban lehetőség van CRUD (Create-Read-Update-Delete), vagyis admin funkciók ellátására. 
                                A weboldal ezen része hagyományos, úgynevezett Multi-Page-Application, vagyis minden esemény (Pl.: gombnyomás) hatására az egész oldal újratölt.
                                Az admin műveletek megjelenítéséhez Blade Template-et használtam, ahol lehetőség volt rá, Blade komponenseket is (bevitel, módosítás, törlés), az újrahasználhatósága miatt.</p>
                                <p>A weboldal "vásárlóknak" szóló része Single-Page-Application.</p>
                            </article>
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
                    </section>
                    <section class="wargaming-api project">
                        <h4 class="project-title"><a target="_blank" href="https://nagytommy76.github.io/Wargaming/">World of Tanks weboldal</a></h4>
                        <section class="project-description">
                            <article>
                                <p class="my-0">2020</p>
                                <p>A weboldal elkészítésével a célom az volt, hogy jobban megismerkedjek a Vue keretrendszerrel, illetve egy 3. féltől származó API-t tudjak értelmezni és használni.</p>
                                <p>Lehetőség van a játékosok nyilvános adatainak megtekintésére.</p>
                                <p>Az oldal mobilbarát, de pár funkció offos........</p>
                            </article>
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
                    </section>
                    <section class="comp-store project">
                        <h4 class="project-title"><a target="_blank" href="https://pcboltmvc.000webhostapp.com/">Computer Store Webáruház</a></h4>
                        <section class="project-description">
                            <article>
                                <p class="my-0">2019 - 2020</p>
                                <p>2019 őszén kezdtem el fejleszteni egy általam kitalált, számítástechnikai alkatrészeket árusító webáruház honlapját. Ez a project volt életem első, nagyobb és önálló munkája. Az alkalmazás megvalósításához MVC (Model-View-Controller) fejlesztési mintát használtam, amihez 
                                <span class="underline"><a class="text-black" target="_blank" href="https://www.udemy.com/course/object-oriented-php-mvc/">Brad Traversy</a></span>
                                egyik Udemy kurzusa adta az alapot.</p>
                                <p>A program megvalósításával a fő célom az MVC működésének megismerése és megértése volt, valamint az, hogy keretrendszer nélkül hogyan lehet megvalósítani egy webáruház alapvető funkcióit.</p>
                            </article>
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
                    </section>
                </div>
            </div>            
        </section>
    </section>
</template>
<script>
import LeftContent from './includes/LeftContent'
export default {
    name: 'AboutMe',
    components:{
        LeftContent,
    },
}
</script>