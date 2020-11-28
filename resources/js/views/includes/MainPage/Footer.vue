<template>
    <footer class="portfolio-footer">
    <div class="footer-made">
        <p>Minden Jog Fenntartva &copy; Készítette: Nagy Tamás, Budapest. {{ dateTime }}</p>
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