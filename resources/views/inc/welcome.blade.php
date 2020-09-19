@extends('layouts.app')
@section('content')
    <header class="main-header">
        <div class="main-title">
            <h1>Üdvözöljük a <span class="primary-color">Húsgolyó</span> Étterem Honlapján!</h1>
            <p>Foglaljon aztalt, vagy rendeljen házhoz.</p>
            <p>Térképezze fel ételkínálatunkat</p>
            <a href="{{ route('foods') }}"><button class="btn btn-primary">Étel Rendelés</button></a>
            <a href="#aboutMe"><button class="btn btn-primary">Rólam</button></a>
            
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
                    <span><i class="fab fa-github fa-2x"></i></span>
                </div> 
            </div>
            <footer class="footer-contact">
                <h4 class="icon-title">Elérhetőségeim</h4>
                <div class="contact-icon">
                    {{-- <div class="grid-tooltip"> --}}
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
                    {{-- </div>                     --}}
                </div>                                                      
            </footer>
        </aside>
        <section class="main-right-content">
            <h1 class="main-title">Ide jönnek az egyéb infók!</h1>

            <p>Fő erősségemnek jelenleg a back-end technológiákat tartom</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae nobis nulla recusandae fugiat doloribus suscipit repudiandae eum quia unde aperiam in, accusamus est rerum temporibus nisi placeat vel minima. Laudantium architecto eum deserunt quae soluta dicta totam consequatur ut, mollitia esse magnam officia distinctio perferendis. Maxime, ducimus! Sunt, perspiciatis eveniet corporis neque unde nostrum esse quaerat, nam commodi nihil, similique porro voluptatem veritatis praesentium dicta molestiae assumenda at sint rerum. Aliquid, velit. Iste omnis esse illum inventore. Expedita, exercitationem ipsa eum architecto eius sequi reiciendis sunt, dolorum laudantium amet ipsam inventore quibusdam debitis iure? Dicta itaque officia ea accusamus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, omnis? Aperiam, cumque sed perferendis blanditiis praesentium laboriosam reprehenderit distinctio quasi maiores quae nihil obcaecati, aut dolorum ullam earum neque iste?</p>
        </section>
    </section>
@endsection
