<template>
    <div>
        <div class="navigation">
            <router-link to="/"><h4>Pizzák</h4></router-link>
            <router-link to="/soup"><h4>Levesek</h4></router-link>
            <router-link to="/meal"><h4>Főételek</h4></router-link>
            <router-link to="/pasta"><h4>Tészták és Risottók</h4></router-link>            
            <router-link to="/dessert"><h4>Desszertek</h4></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>