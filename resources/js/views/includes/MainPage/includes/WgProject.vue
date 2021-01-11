<template>
    <article class="wargaming project">
        <figure class="thumbnail">
            <img src="../../../../../img/wargaming/modal.jpg" alt="Meatball Project">
            <div class="icons">
                <a href="#" class="live-demo">Élő verzió</a>
                <a target="_blank" href="https://github.com/nagytommy76/WgAPIVue" class="github"><i class="fab fa-github fa-2x"></i></a>
            </div>
        </figure>
        <h2 class="project-title">Wargaming weboldal</h2>
        <ul class="tech-list">
            <li>
                <p>Vue.js</p>
                <Tooltip :text="'Vue.js'">
                    <i class="fab fa-vuejs fa-2x vue"></i>
                </Tooltip>
            </li>
            <li>
                <p>SASS</p>
                <Tooltip :text="'SASS'">
                    <i class="fab fa-sass fa-2x sass"></i>
                </Tooltip>
            </li>
            <li>
                <p><a target="_blank" href="https://developers.wargaming.net/reference/all/wot/account/list/?r_realm=eu">Wargaming API</a></p>
            </li>
            <li>
                <p>Single-Page-Application</p>
            </li>
        </ul>
        <section class="project-description">
            <p>Lehetőségünk van nemzet és jármű osztály szerint szűrni, majd az adott tankra kattinta az előugró modal-ban konfigurálni azt. Lánctalpat, tornyot, löveget, rádiót tudunk választani, ahol lehetséges. A specifikáció részben pedig ennek megfelelően változik a tank karakterisztikája.</p>
            <p>Játékosok név szerinti keresése is lehetséges. Regisztráció nélkül is használható az oldal, viszont ha rendelkezünk Wargaming fiókkal be tudunk jelentkezni és a saját eredményeinknél kibővített adatokat láthatunk (Prémium napok, kredit, bonds).</p>
        </section>
    </article>
</template>