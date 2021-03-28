<template>
    <article :class="`${articleClass} project`">
        <figure class="thumbnail">
            <slot name="image"></slot>
            <div class="icons">
                <router-link v-if="routerLink" class="live-demo" :to="{name: demoLink}">Élő verzió</router-link>
                <a v-else target="_blank" :href="demoLink" class="live-demo">Élő verzió</a>
                <a target="_blank" :href="githubLink" class="github"><font-awesome class="svg-icon" :icon="['fab', 'github']" size="2x"/></a>
            </div>
        </figure>
        <h2 class="project-title">{{ projectTitle }}</h2>
        <ul class="tech-items">
            <slot name="tech-list"></slot>
        </ul>
        <section class="project-description">
            <slot name="description"></slot>
        </section>
    </article>
</template>
<script>
export default {
    name: 'BaseProject',
    props: {
        articleClass:{
            type: String,
            required: true,
        },
        demoLink: String,
        routerLink:{
            required: false,
            type: Boolean,
            default: false
        },
        githubLink: String,
        projectTitle: String,

    }
}
</script>
<style lang="scss" scoped>
@import '../../../../../../sass/variables.scss';
.thumbnail{ 
    position: relative;  
    margin-bottom: 1.5rem;
    height: 17rem;
    img{
        height: 100%;
        width: 100%;
        box-shadow: 2px 1px 10px #222; 
        object-fit: cover;
        border-radius: 5px;
        cursor: pointer;
    }    
    .cld-image{
        height: 17rem;
        img{
            height: 100%;
            width: 100%;
            box-shadow: 2px 1px 10px #222; 
            object-fit: cover;
            border-radius: 5px;
            cursor: pointer;
        }                     

    }
    .icons{
        width: 100%;
        position: absolute;
        bottom: 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        a{
            padding: .3rem;
            background-color: rgba($color: #000, $alpha: .5);
            color: #FFF;
            transition: all .2s ease-in;
            &:hover{
                background-color: rgba($color: #000, $alpha: .8);
                color: $favColor;
            }
        }
        .live-demo{
            min-width: 30%;
            text-align: center;
            font-size: 1.8em;
            font-weight: 300;
            border-radius: 0 5px 5px;
        }
        .github{
            min-width: 15%;
            text-align: left;
            font-size: 1em;
            border-radius: 5px 0 5px 5px;
        }
    }                     
}
.project{
    max-width: 100%;
    min-height: 350px;
}
.tech-items{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}
</style>