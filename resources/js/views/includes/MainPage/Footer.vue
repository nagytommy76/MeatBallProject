<template>
    <footer class="portfolio-footer" id="portfolio-footer">
    <div class="footer-made">
        <p>&copy; Készítette: Nagy Tamás, Budapest. {{ dateTime }}</p>
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
<style lang="scss">
@import '../../../../sass/inc/portfolio/footer.scss';
</style>