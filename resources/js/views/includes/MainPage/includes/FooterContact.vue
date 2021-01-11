<template>
    <footer class="footer-contact">
        <h4 class="icon-title">Elérhetőségeim</h4>
        <div class="contact-icon">
            <Tooltip :text="'nagytommy76@gmail.com'">
                <span><a class="" href="mailto:nagytommy76@gmail.com"><i class="fas fa-envelope"></i></a></span>
            </Tooltip>  
            <Tooltip :text="'Tel.: 06307862963'">
                <span><a class="" href="tel:06307862963"><i class="fas fa-phone"></i></a></span>
            </Tooltip>  
            <Tooltip :text="'LinkedIn'">
                <span><a target="_blank" href="https://www.linkedin.com/in/nagy-tam%C3%A1s-27355116b/"><i class="fab fa-linkedin"></i></a></span>
            </Tooltip>  
            <Tooltip :text="'GitHub'">
                <span><a target="_blank" href="https://github.com/nagytommy76"><i class="fab fa-github fa-2x"></i></a></span>
            </Tooltip>  
            <Tooltip :text="'Facebook: Nagy Tamás'">
                <span><a target="_blank" href="https://www.facebook.com/tamas.nagy.1029"><i class="fab fa-facebook-square fa-2x"></i></a></span>
            </Tooltip>  
        </div>  
        <h4 class="email"><a href="mailto:nagytommy76@gmail.com">nagytommy76@gmail.com</a></h4>                                                    
    </footer>
</template>
<script>
export default {
    name: 'FooterContact',
}
</script>