<template>
    <BaseProject
        :articleClass="'meatball'"
        :demoLink="'Welcome'"
        :routerLink="true"
        :githubLink="'https://github.com/nagytommy76/MeatBallProject'"
        :projectTitle="'Húsgolyó étterem honlapja'"
    >
        <template v-slot:image>
            <img src="../../../../../img/meatball/meatball-main-page.jpg" alt="Meatball Project" @click="$emit('show-image', 'meatball')">
        </template>
        <template v-slot:tech-list>
            <li>
            <p>Laravel</p>
            <Tooltip :text="'Laravel'">
                <i class="fab fa-laravel fa-2x laravel"></i>
            </Tooltip>
            </li>
            <li>
                <p>MySQL</p>
                <Tooltip :text="'MySQL'">
                    <i class="fas fa-database fa-2x mysql"></i>
                </Tooltip>
            </li>
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
                <p>Saját fejlesztésű API</p>
            </li>
            <li>
                <p>Single-Page-Application</p>
            </li>
        </template>
        <template v-slot:description>
            <p>A weboldal egy kitalált étterem honlapja, ahol lehetőség van ételeket rendelni.</p>
            <p>A vásárláshoz szükséges a regisztráció, illetve e-mail cím validáció, a megadott e-mail címre a rendszer küld egy aktiváló linket, amelyre kattintva visszatérünk a bejelentkező oldalra, ahol beléphetünk.</p>
            <p>A rendelés leadásakor lehetőség van készpénzzel a "futárnál", illetve PayPal-en keresztül fizetni egy sandbox számlával.</p>
            <p>Létrehoztam egy admin felületet is, amin keresztül termékeket lehet bevinni, törölni és módosítani</p>
        </template>
    </BaseProject>
</template>