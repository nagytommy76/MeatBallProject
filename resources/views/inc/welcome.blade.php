@extends('layouts.app')
@section('content')
    <header class="main-header">
        <div class="main-title">
            <h1>Üdvözöljük a <span class="primary-color">Húsgolyó</span> Étterem Honlapján!</h1>
            <p>Foglaljon aztalt, vagy rendeljen házhoz.</p>
            <p>Térképezze fel ételkínálatunkat</p>
            <a href="{{ route('foods') }}"><button class="btn btn-primary">Étel Rendelés</button></a>
            <a href="#aboutMe"><button class="btn btn-primary">Magamról</button></a>
            
        </div>
    </header>
    <section id="aboutMe" class="main-content">
        <aside class="main-left-content">
            <img class="image" src="{{asset('images/final.jpg')}}" alt="IAM">
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
                        <span class="tooltiptext">Bootstrap</span>
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
                </div>                                                      
            </footer>
        </aside>
        <section class="main-right-content">
            <h1 class="main-title">Nagy Tamás</h1>
            <h3 class="main-sub-title">Pályakezdő webfejlesztő</h3>

            <div class="grid-container">
                <div class="left-grid">
                    <h3 class="sub-title">Projectek</h3>
                    <h4 class="project-title"><a class="text-black" target="_blank" href="https://nagytamasweboldal.000webhostapp.com/">Computer Store Webáruház</a></h4>
                    <p class="my-0">2019 - 2020</p>
                    <p>2019 őszén kezdtem el fejleszteni egy kitalált számítástechnikai alkatrészeket árusító webáruház honlapját. Az alkalmazás megvalósításához MVC (Model-View-Controller) fejlesztési mintát használtam, amihez 
                    <span class="underline"><a class="text-black" target="_blank" href="https://www.udemy.com/course/object-oriented-php-mvc/">Brad Traversy</a></span>
                    egyik Udemy kurzusa adta az alapot.</p>
                    <p>A program megvalósításával a fő célom az MVC működésének megismerése és megértése volt, valamint az, hogy keretrendszer nélkül tudjam megvalósítani egy webáruház alapvető funkcióit, más szóval: belássak a motorháztető alá :)</p>
                    <h4 class="my-0">Használt technológiák</h4>
                        <ul class="tech-list">
                            <li>Bootstrap 4</li>
                            <li>(vanilla) JavaScript</li>
                            <li>CSS3</li>
                            <li>PHP</li>
                            <li>SQL</li>
                        </ul>
                    
                    <p>Fő erősségemnek jelenleg a back-end technológiákat tartom</p>
                </div>
                <div class="right-grid">
                    <h3 class="sub-title">Tanulmányok</h3>
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
                    <p>hálózati ismeretek, adatbázisok, számítógép architektúrák,
                        programozási alapismeretek, Apache szerver, weblap készítés
                    </p>
                </div>
            </div>            
        </section>
    </section>
@endsection
