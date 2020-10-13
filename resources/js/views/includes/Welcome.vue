<template>
    <div>
        <header class="main-header">
        <div class="main-title">
            <h1>Üdvözöljük a <span class="primary-color">Húsgolyó</span> Étterem Honlapján!</h1>
            <p>Foglaljon aztalt, vagy rendeljen házhoz.</p>
            <p>Térképezze fel ételkínálatunkat</p>
            <div class="btn-group">
                <a href="#foodOrder"><button class="btn btn-primary">Étel Rendelés</button></a>
                <a href="#aboutMe"><button class="btn btn-primary">Magamról</button></a>
            </div>  
        </div>
    </header>
    <section id="aboutMe" class="main-content">
        <aside class="main-left-content">
            <img class="image" src="../../../img/final.jpg" alt="IAM">
            <h1 class="left-title"><span class="primary-color">Nagy Tamás</span><div>Autodidakta back-end fejlesztő</div></h1>
            <div class="stack-icon">
                <h4 class="icon-title">Back-end technológiák</h4>
                <div class="grid-tooltip">
                    <div class="tooltip">
                        <span class="tooltiptext">PHP</span>
                        <span><i class="fab fa-php fa-2x"></i></span>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">Laravel</span>
                        <span><i class="fab fa-laravel fa-2x"></i></span>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">MySQL</span>
                        <span><i class="fas fa-database fa-2x"></i></span>
                    </div>
                </div>                

                <h4 class="icon-title">Front-end technológiák</h4>
                <div class="grid-tooltip">
                    <div class="tooltip">
                        <span class="tooltiptext">JavaScript</span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">Vue.js</span>
                        <span><i class="fab fa-vuejs fa-2x"></i></span>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">Bootstrap 4</span>
                        <span><i class="fab fa-bootstrap fa-2x"></i></span>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">CSS3</span>
                        <span><i class="fab fa-css3-alt fa-2x"></i></span>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">SASS</span>
                        <span><i class="fab fa-sass fa-2x"></i></span>
                    </div>              
                    <div class="tooltip">
                        <span class="tooltiptext">HTML5</span>
                        <span><i class="fab fa-html5 fa-2x"></i></span>
                    </div>   
                </div>                            
                <h4 class="icon-title">Egyéb ismeretek</h4>                
                <div class="tooltip">
                    <span class="tooltiptext">GitHub</span>
                    <span><a target="_blank" href="https://github.com/nagytommy76"><i class="fab fa-github fa-2x"></i></a></span>
                </div> 
                <div class="tooltip">
                    <span class="tooltiptext">Windows 10</span>
                    <span><i class="fab fa-windows"></i></span>
                </div> 
            </div>
            <footer class="footer-contact">
                <h4 class="icon-title">Elérhetőségeim</h4>
                <div class="contact-icon">
                    <div class="tooltip">
                        <span class="tooltiptext">nagytommy76@gmail.com</span>
                        <span><a class="" href="mailto:nagytommy76@gmail.com"><i class="fas fa-envelope"></i></a></span>
                    </div> 
                    <div class="tooltip">
                        <span class="tooltiptext">Tel.: 06307862963</span>
                        <span><a class="" href="tel:06307862963"><i class="fas fa-phone"></i></a></span>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">LinkedIn</span>
                        <span><a target="_blank" href="https://www.linkedin.com/in/nagy-tam%C3%A1s-27355116b/"><i class="fab fa-linkedin"></i></a></span>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">GitHub</span>
                        <span><a target="_blank" href="https://github.com/nagytommy76"><i class="fab fa-github fa-2x"></i></a></span>
                    </div> 
                    <div class="tooltip">
                        <span class="tooltiptext">Facebook: Nagy Tamás</span>
                        <span><a target="_blank" href="https://www.facebook.com/tamas.nagy.1029"><i class="fab fa-facebook-square fa-2x"></i></a></span>
                    </div> 
                </div>                                                      
            </footer>
        </aside>
        <section class="main-right-content">
            <h1 class="main-title">Nagy Tamás</h1>
            <h3 class="main-sub-title">Pályakezdő webfejlesztő</h3>

            <div class="grid-container">
                <div class="projects">
                    <h3 class="sub-title">Projectek</h3>
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
                            <li>(vanilla) JavaScript</li>
                            <li>CSS3</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                    </section>
                    <section class="meatball">
                        <h4 class="project-title"><a href="#top">Húsgolyó Étterem honlapja</a></h4>
                        <p class="my-0">2020 -</p>
                        <p>2020 tavaszán kezdtem fejleszteni ezt a weboldalt, ebben az esetben szerettem volna megismerkedni modern keretrendszerekkel, front-end és back-end részről is, ezért választottam a Vue.js-t, illetve a Laravelt.</p>
                        <p>A programban lehetőség van CRUD (Create-Read-Update-Delete) vagyis admin feladatok ellátására.</p>
                        <p>Ezen műveletek megjelenítéséhez Blade Template-et használtam, ahol szükséges volt ott Blade komponenseket is (bevitel, módosítás, törlés).</p>
                        <p>Célom, hogy ezekkel a technológiákkal találjak állást.</p>

                        <h4 class="my-0">Használt technológiák</h4>
                        <ul class="tech-list">
                            <li>SASS</li>
                            <li>Vue.js (Vuex, Vue-router)</li>
                            <li>Laravel</li>
                            <li>MySQL</li>
                        </ul>
                    </section>
                </div>
                <div class="schools">
                    <h3 class="sub-title">Tanulmányok</h3>
                    <section class="okj">
                        <h4 class="project-title">Szoftverfejlesztő OKJ</h4>
                        <p class="my-0">2018 Január - 2019 Június</p>
                        <h4 class="my-0">Soter-Line Oktatási Központ</h4>
                        <h4 class="my-0">Tanult technológiák</h4>
                            <ul class="tech-list">
                                <li>C# (A programozás alapjait tanultuk meg vele)</li>
                                <li>HTML</li>
                                <li>JavaScript</li>
                                <li>CSS3</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                            </ul>
                        <h4 class="my-0">Egyéb</h4>
                        <p>hálózati ismeretek, adatbázisok, programozási alapismeretek, Apache (XAMPP) szerver, weblap készítés
                        </p>
                    </section>                    
                    <section class="mid-school">
                        <h4 class="project-title">Érettségi, Informatika szak</h4>
                        <p class="my-0">2008 - 2013</p>
                        <h4 class="my-0">Verebély László Szakgimnáziuma és Szakközépiskolája</h4>

                        <h4 class="my-0">Tanult technológiák</h4>
                            <ul class="tech-list">
                                <li>C#</li>
                                <li>Pascal</li>
                                <li>Hálózati ismeretek</li>
                                <li>MS Office (Access, World, Excel, SharePoint)</li>
                            </ul>
                    </section>
                </div>
            </div>            
        </section>
    </section>
    </div>
</template>