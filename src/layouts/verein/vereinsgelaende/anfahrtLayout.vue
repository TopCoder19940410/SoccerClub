<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Anfahrt
            </div>
            <div class="text mb-3">
                <span class="bold">Adresse</span> <br>
                Am Sportplatz 1 <br>
                74369 Löchgau
            </div>

            <div class="text mb-3">
                <span class="bold">Anfahrt mit dem Auto/Bus</span>
              <div>
                Aus Stuttgart (A81) kommend:
              </div>
              <div>
                Autobahnausfahrt "Ludwigsburg Nord" Richtung Bietigheim-Bissingen / B27
              </div>
              <div class="mb-3">
                B27 Richtung Heilbronn folgen und in Bietigheim links abbiegen Richtung Löchgau/Bönnigheim
              </div> 

              <div>
                Aus Heilbronn (A81) kommend:
              </div>
              <div>
                Autobahnausfahrt "Mundelsheim" Richtung Besigheim
              </div>
              <div class="mb-3">
                In Besigheim kurze Zeit auf B27 Richtung Bietigheim-Bissingen, dann abbiegen Richtung Löchgau
              </div>
              <div>
                Aus Karsruhe (A8) kommend:
              </div>
              <div class="mb-3">
                Autobahnausfahrt "Pforzheim Nord" Richtung Mühlacker / Vaihingen Enz bzw. B10
              </div>
            </div>

            <div class="text mb-3">
                <span class="bold">Anfahrt mit öffentlichen Verkehrsmitteln</span>
              <div>
                Mit der Bahn nach Bietigheim-Bissingen. Von dort aus mit dem Bus 554 am ZOB Bstg. 5 Richtung Löchgau, Haltestelle Wette. Von dort aus sind es ca. 25 Minuten Fußweg zur der Sportanlage Greuth.
              </div>
           
            </div>

            <div class="text mb-4">
                <span class="bold">Empfohlene Unterkünfte für Gastmannschaften (speziell der Frauen)</span>
              <div>
                <a href="http://www.bebenhauserhof.de/" class="red">http://www.bebenhauserhof.de/</a>
            </div>
              <div>
                <a href="http://parkhotel-bietigheim.de/" class="red">http://parkhotel-bietigheim.de/</a>
            </div>
              <div>
                <a href="http://ww1.cafehirsch.de/" class="red">http://ww1.cafehirsch.de/</a>
            </div>
           
            </div>

            <div class="content-title mb-3">
                Übersichtskarte inkl. Routenplaner
            </div>
            <div class="mb-4">
                Auf nachstehender Karte ist der Standort unserer Sportgelände abgebildet. Mit Klick "Routenplaner" können Sie sich eine Route zu unseren Sportplätzen berechnen lassen.
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5234.705884175734!2d9.083212633480858!3d49.00386997930211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d532694f20a1%3A0x596dac1addd19354!2sFV+L%C3%B6chgau+e.V.!5e0!3m2!1sde!2sde!4v1530623667033" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen=""></iframe>


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

import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
export default {
    components: {
        headerComponent,
        vereinLine,
        lastNews,
        componentOrganigramm,
        compAnsprechpartner,
        sponsorighComp,
        footerComponent,
    },

    props: {
        options: Object,
    },
    mounted() {
        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    updated() {
        Fancybox.unbind(this.$refs.container);
        Fancybox.close();

        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    unmounted() {
        Fancybox.destroy();
    },
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

.gallry-img-pizza {
    max-width: 200px;
    height: 150px;
}

.gallry-img-pizza img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.popup-m {
    margin-bottom: 40px !important;
}

.bold {
    font-family: 'metropolis', sans-serif;
}
</style>