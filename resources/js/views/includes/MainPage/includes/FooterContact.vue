<template>
    <footer class="footer-contact">
        <h4 class="icon-title">Elérhetőségeim</h4>
        <div class="contact-icon">
            <Tooltip :text="'nagytommy76@gmail.com'">
                <span
                    ><a class="" href="mailto:nagytommy76@gmail.com"
                        ><font-awesome
                            class="svg-icon"
                            :icon="['fas', 'envelope']"
                            size="2x"/></a
                ></span>
            </Tooltip>
            <Tooltip :text="'LinkedIn'">
                <span
                    ><a
                        target="_blank"
                        href="https://www.linkedin.com/in/nagy-tam%C3%A1s-27355116b/"
                        ><font-awesome
                            class="svg-icon"
                            :icon="['fab', 'linkedin']"
                            size="2x"/></a
                ></span>
            </Tooltip>
            <Tooltip :text="'GitHub'">
                <span
                    ><a target="_blank" href="https://github.com/nagytommy76"
                        ><font-awesome
                            class="svg-icon"
                            :icon="['fab', 'github']"
                            size="2x"/></a
                ></span>
            </Tooltip>
            <!-- <Tooltip :text="'0630 786 2963'">
                <span
                    ><a href="tel:06307862963"
                        ><font-awesome
                            class="svg-icon"
                            :icon="['fa', 'phone']"
                            size="2x"/></a
                ></span>
            </Tooltip> -->
        </div>
        <h4 class="email">
            <a href="mailto:nagytommy76@gmail.com">nagytommy76@gmail.com</a>
        </h4>
    </footer>
</template>
<script>
export default {
    name: "FooterContact"
};
</script>
<style lang="scss" scoped>
@import "../../../../../sass/variables.scss";
.footer-contact {
    margin: auto 0 1rem 0;
    .icon-title {
        text-align: right;
    }
    .contact-icon {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0.5rem;
        .svg-icon {
            color: #fff;
            font-size: 2.4rem;
            margin: 0.2rem 0.3rem;
        }
    }
    .email,
    a {
        color: $favColor;
        text-align: right;
    }
}
@media (max-width: $mobile-width) {
    .footer-contact {
        .icon-title {
            text-align: center;
            margin-bottom: 0.7rem;
        }
        .contact-icon {
            margin-bottom: 1rem;
            justify-content: center;
        }
        .email {
            text-align: center;
        }
        margin-top: 1rem;
    }
}
</style>
