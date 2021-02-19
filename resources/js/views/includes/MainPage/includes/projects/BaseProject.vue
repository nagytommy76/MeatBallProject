<template>
    <article :class="`${articleClass} project`">
        <figure class="thumbnail">
            <slot name="image"></slot>
            <div class="icons">
                <router-link v-if="routerLink" class="live-demo" :to="{name: demoLink}">Élő verzió</router-link>
                <a v-else target="_blank" :href="demoLink" class="live-demo">Élő verzió</a>
                <a target="_blank" :href="githubLink" class="github"><i class="fab fa-github fa-2x"></i></a>
            </div>
        </figure>
        <h2 class="project-title">{{ projectTitle }}</h2>
        <ul class="tech-list">
            <slot name="tech-list"></slot>
        </ul>
        <section class="project-description">
            <slot name="description"></slot>-->
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
    
</style>