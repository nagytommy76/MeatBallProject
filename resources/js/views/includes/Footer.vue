<template>
    <footer class="main-footer">
    <div class="footer footer-container">
        <div class="footer-address">
            <h3>Elérhetőségeink:</h3>
            <ul>
                <li>
                    <font-awesome :icon="['fas', 'house-user']"/>
                    Budapest, 1119 Semmilyen utca. 44/A.
                </li>
                <li>
                    <font-awesome :icon="['fas', 'phone']"/>
                    <a class="text-white" href="tel:36 1 999 5874">+36 1 999 5874</a>
                </li>
                <li>
                    <font-awesome :icon="['fas', 'envelope']" />
                    meatball@info.hu
                </li>
            </ul>
        </div>
        <div class="footer-form">
            <form>
                <label for="">Iratkozzon fel hírlevelünkre</label>
                <input type="email" name="" id="">
                <input class="btn btn-primary" type="submit" value="Feliratkozás!">
            </form>
        </div>
        <div class="footer-social">
            <a href="https://www.facebook.com/" target="_blank"><font-awesome :icon="['fab', 'facebook-square']" size="3x"/></a>
            <a href="https://twitter.com/" target="_blank"><font-awesome :icon="['fab', 'twitter']" size="3x"/></a>
            <a href="https://www.tripadvisor.co.hu/" target="_blank"><font-awesome :icon="['fab', 'tripadvisor']" size="3x"/></a>
            <a href="https://www.youtube.com/" target="_blank"><font-awesome :icon="['fab', 'youtube']" size="3x"/></a>
            <a href="https://www.instagram.com/?hl=hu" target="_blank"><font-awesome :icon="['fab', 'instagram']" size="3x"/></a>
            
        </div>
    </div>
    <div class="footer-made">
        <p>Minden Jog Fenntartva &copy; Budapest. Nagy Tamás {{ dateTime }}</p>
    </div>
</footer>
</template>
<script>
export default {
    computed: {
       dateTime(){
           let date = new Date();
           return date.getFullYear()
       }
   }
}
</script>
<style lang="scss" scoped>
@import '../../../sass/inc/footer.scss';
</style>