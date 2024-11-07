<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Pressebereich
            </div>

            <div class="text mb-4">
                Im Pressbereich erhalten Sie relevante Informationen für Presseberichte oder Berichterstattungen über den FV Löchgau. Sollten Sie weitere Informationen benötigen, bitten wir Sie mit uns in Kontakt zu treten. 
            </div>

            <div class="download-block mb-5">
                <div class="content-title">
                    Vereinsgrafiken
                </div>

               <div class="content-container">
                <div class="links-container flex justify-between wrap red mb-4">
                    <div class="links">
                        <div class="link-title">
                            Wappen des FV Löchgau e.V.
                        </div>
                        <div class="link">
                            <a href="/FV_Loechgau_Vereinswappen_EPS (2).eps" class="mb-3">Vereinswappen im Format *.eps (CYMK, 300dpi)</a>
                        </div>
                        <div class="link">
                            <a href="/FV_Loechgau_Vereinswappen_JPEG_CMYK_300dpi (1).jpg" class="mb-3">Vereinswappen im Format *.jpg (CMYK, 300dpi)</a>
                        </div>
                        <div class="link">
                            <a href="/FV_Loechgau_Vereinswappen_SVG (1).svg" class="mb-3">Vereinswappen im Format *.svg (Vektorgrafik)</a>
                        </div>
                    </div>
                    <div class="links">
                        <div class="link-title">
                            Wappen der FVL-Jugend
                        </div>
                        <div class="link">
                            <a href="/FV Loechgau_Vereinswappen_Jugend_CMYK_300dpi.jpg" class="mb-3">Jugend-Vereinswappen im Format *.jpg (CMYK, 300dpi)</a>
                        </div>
                        <div class="link">
                            <a href="/FV Loechgau_Vereinswappen_Jugend_EPS.eps" class="mb-3">Jugend-Vereinswappen im Format *.eps (CYMK, 300dpi)</a>
                        </div>
                        <div class="link">
                            <a href="/FV_Loechgau_Vereinswappen_SVG (1).svg" class="mb-3">Jugend-Vereinswappen im Format *.svg (Vektorgrafik)</a>
                        </div>
                    </div>
                    <div class="links">
                        <div class="link-title">
                            Slogan des FV Löchgau e.V.
                        </div>
                        <div class="link">
                            <a href="/FV_Loechgau_Slogan_EPS.eps" class="mb-3">Vereinsslogan im Format *.eps (CYMK, 300dpi)</a>
                        </div>
                        <div class="link">
                            <a href="/FV_Loechgau_Slogan_JPEG_CMYK_300dpi.jpg" class="mb-3">Vereinsslogan im Format *.jpg (CMYK, 300dpi)</a>
                        </div>
                        <div class="link">
                            <a href="/FV_Loechgau_Slogan_SVG.svg" class="mb-3">Vereinsslogan im Format *.svg Vektorgrafik</a>
                        </div>
                    </div>
                </div>
               
               </div>
               <div class="text mb-4">
                <span class="bold">Hinweis:</span> Das Wappen des FV Löchgau besteht aus zwei Farben: eine schwarze Umrandung, ein rotes Symbol und eine rote Schriftart. Bitte achten Sie darauf, dass das von Ihnen verwendete Wappen diesen Kriterien entspricht. Sollten Sie ein anderes Wappen besitzen, würden wir uns freuen, wenn Sie uns kontaktieren würden.
            </div>
            </div>


            <div class="content-title">
                Funktionäre
            </div>
            <div class="files-container red">
                <div class="files-c-title mb-4">
                    Pressebilder unserer Funktionäre
                </div>
                <div class="link mb-2">
                    <a href="/Portraetbild_Dieter_Schuster_Praesident.jpeg">Porträtfoto von Dieter Schuster als *.jpg</a>
                </div>
                <div class="link mb-2">
                    <a href="/Portraetbild_Biffart_Mark_Vorsitzender.jpg">Porträtfoto von Mark Biffart als *.jpg</a>
                </div>
                <div class="link mb-2">
                    <a href="/Portraetbild_Hermann_Schuster_Vorsitzender_Sport.jpg">Porträtfoto von Hermann Schuster als *.jpg</a>
                </div>
                <div class="link mb-2">
                    <a href="/Portraetbild_Iacobelli_Timo_Vorsitzender_Finanzen.jpg">Porträtfoto von Timo Iacobelli als *.jpg</a>
                </div>
            </div>
        </div>
        <div class="additional-blocks">
            <sponsorighComp />
            <lastNews class="mb-4 mt-4" />


        </div>
    </div>
    <footerComponent />
</template>
<script>

import headerComponent from '../../../components/headerComponent.vue';
import vereinLine from '../../../components/vereinLine.vue'
import lastNews from '../../../components/vareinPage/lastNews.vue';
import componentOrganigramm from '../../../components/vareinPage/componentOrganigramm.vue';
import compAnsprechpartner from '../../../components/vareinPage/compAnsprechpartner.vue';
import sponsorighComp from '../../../components/vareinPage/sponsorighComp.vue';
import footerComponent from '../../../components/footerComponent.vue';
export default {
    components: {
        headerComponent,
        vereinLine,
        lastNews,
        componentOrganigramm,
        compAnsprechpartner,
        sponsorighComp,
        footerComponent,
    }
}
</script>
<style scoped>
@import url('../../../assets/styles/verein/main.css');
@import url('../../../assets/styles/verein/vereinsfuehrungComponent.css');


.header {
    margin-bottom: 90px !important;
}
.main-container {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.line {
    position: relative;
    z-index: 99;
}

h4 {
    font-family: 'metropolis', sans-serif;
    margin-bottom: 15px;
}

.red {
    color: #cc3366;
}

.text.red {
    font-size: 20px;
    font-family: 'metropolis';
}

.italic {
    font-style: italic;
}

.text-downloads {
    font-family: 'metropolis';
}

.bold {
    font-family: 'metropolis', sans-serif;
}
</style>