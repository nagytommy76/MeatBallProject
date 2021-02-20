<template>
    <section class="schools-bg" id="schools">
        <h3 class="sub-title">Tanulmányok</h3>
        <div class="schools">
            <section class="okj">
                <h4 class="project-title">Szoftverfejlesztő OKJ</h4>
                <p class="my-0">2018 Január - 2019 Június</p>
                <h4 class="my-0">Soter-Line Oktatási Központ</h4>
                <h4 class="my-0">Tanult technológiák</h4>
                    <ul class="tech-list">
                        <li>C# (A programozás alapjait tanultuk meg vele)</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>CSS3</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                    </ul>
                <h4 class="my-0">Egyéb</h4>
                <p>hálózati ismeretek, adatbázisok, programozási alapismeretek, Apache (XAMPP) szerver, weblap készítés
                </p>
            </section>                    
            <section class="mid-school">
                <h4 class="project-title">Érettségi, Informatika szak</h4>
                <p class="my-0">2008 - 2013</p>
                <h4 class="my-0">Verebély László Szakgimnáziuma és Szakközépiskolája</h4>
                <h4 class="my-0">Tanult technológiák</h4>
                    <ul class="tech-list">
                        <li>C#</li>
                        <li>Pascal</li>
                        <li>Hálózati ismeretek</li>
                        <li>MS Office (Access, World, Excel, SharePoint)</li>
                    </ul>
            </section>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Schools',
}
</script>
<style lang="scss" scoped>
@import '../../../../sass/variables.scss';
.schools-bg{
    background-color: #222;
    .schools{
        min-height: 30vh;
        width: 70%;
        padding: 1rem;
        margin: auto;
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
    }
}
@media(max-width: $mobile-width){
    .schools-bg{
    .schools{
        grid-template-columns: auto;
        min-height: 105vh;
        .okj{
            margin-bottom: 1.5rem;
        }
        .mid-school{
            margin-bottom: 1.5rem;
        }
    }
}
}
</style>