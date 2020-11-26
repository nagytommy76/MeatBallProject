<template>
    <div>
    <MainHeader />
    <AboutMe/>
    </div>
</template>
<script>
import MainHeader from './WelcomeIncludes/MainHeader'
import AboutMe from './WelcomeIncludes/aboutMe'
export default {
    name: 'Welcome',
    components:{
        MainHeader,
        AboutMe,
    }
}
</script>