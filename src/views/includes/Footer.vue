<template>
    <footer class="main-footer">
    <div class="footer footer-container">
        <div class="footer-address">
            <h3>Elérhetőségeink:</h3>
            <ul>
                <li>
                    <i class="fas fa-house-user"></i>
                     Budapest, 1119 Semmilyen utca. 44/A.
                </li>
                <li>
                    <i class="fas fa-phone-volume"></i>
                    <a class="text-white" href="tel:36 1 999 5874">+36 1 999 5874</a>
                </li>
                <li>
                    <i class="fas fa-envelope-open-text"></i>
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
            <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square fa-3x"></i></a>
            <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
            <a href="https://www.tripadvisor.co.hu/" target="_blank"><i class="fab fa-tripadvisor fa-3x"></i></a>
            <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube fa-3x"></i></a>
            <a href="https://www.instagram.com/?hl=hu" target="_blank"><i class="fab fa-instagram fa-3x"></i></a>
            
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
@import '../../sass/inc/footer.scss';
</style>