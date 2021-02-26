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
<style lang="scss" scoped>
// @import '../../../../../sass/variables.scss';
.footer-contact{
    margin: auto 0 1rem 0;
    .icon-title{
        text-align: right;
    }
    .contact-icon{
        margin-bottom: .5rem;
        i{
            color: #FFF;
            font-size: 2.4rem;
            margin: .2rem 0.3rem;
        }                
    }
    .email,a{
        color: $favColor;
        text-align: right;
    }
}
@media(max-width: $mobile-width){
    .footer-contact{
        .icon-title{
            text-align: center;
            margin-bottom: .7rem;
        }
        .contact-icon{
            margin-bottom: 1rem;
        }
        .email{
            text-align: center;
        }
        margin-top: 1rem;
    }
}
</style>