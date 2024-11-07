<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Vereinsheim
            </div>
            <img class="w-100 mb-4" src="../../../assets/chronik/banner5.jpeg" alt="">

            <div class="text mb-4 mt-3">
                <span class="bold">Familie Langella</span>
                <span>
                    bietet seinen Gästen leckere italienische Gerichte. Von Antipasti über Pizza bis hin zu Pasta bietet die
                    Küche viele verschiedene Speisen zu günstigen Preisen. Werfen Sie selbst einen Blick in die Speisekarte
                    und schauen Sie doch einfach mal im Vereinsheim des FV Löchgau vorbei.
                    Sie können dort übrigens auch Ihre Feste feiern. Ob Hochzeit, Kommunion, Geburtstag, Weihnachtsfeier
                    oder vieles mehr, nehmen Sie einfach mit Familie Langella Kontakt auf.
                </span>
            </div>
            <div class="tex">
                Tel.: 07143/24200 <br>
                Fax: 07143/24200 <br>
                Email: <a class="red" href="mailto:vereinsheim@fvloechgau.de">vereinsheim@ fvloechgau.de</a>
            </div>

            <div class="content-title mt-4">
                Impressionen
            </div>

            <Fancybox class="flex flex-wrap" :options="{
                Carousel: {
                    infinite: false,
                },
            }">
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza1.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza2.jpeg">
                    <img src="../../../assets/chronik/pizza2.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza3.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza4.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza5.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza6.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza7.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza8.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza9.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza10.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza11.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza12.jpeg" width="200" height="150" />
                </a>
                <a class="gallry-img-pizza" data-fancybox="gallery" width="200" height="150" href="../../../assets/chronik/pizza1.jpeg">
                    <img src="../../../assets/chronik/pizza13.jpeg" width="200" height="150" />
                </a>
             
            </Fancybox>

            <div class="content-title mt-4">
                Geschichte des Vereinsheims

            </div>

            <div class="text mb-3">
                Das Vereinsheim des FV Löchgau befindet sich an dem Kunstrasenplatz über den Zuschauerrängen und wurde am 22. Juni 1963 eingeweiht, nachdem es zuvor nach zweijähriger Bauzeit in Eigenleistung und durch freiwillige Arbeitsstunden errichtet worden ist. Bis heute wurde das Vereinsheim mehrmals renoviert und modernisiert, zum letzten Mal im Jahre 1992. Diese Maßnahmen trugen dazu bei, dass das Clubheim des FVL heute so gut und gerne besucht wird.
            </div>
            <div class="text">
                Seit September 2008 ist das Vereinsheim an Familie Langella verpachtet. Nach dem Umbau des Vereinsheims und der Installation einer richtigen, gastronomischen Küche werden die Gäste seitdem mit italienischen Spezialitäten verwöhnt. Ob Pizza oder Pasta, die Speisen der Langellas kommen sehr gut an und werten das FVL-Clubheim durch die neuen Möglichkeiten deutlich auf. Im Jahre 2011 wurde das Sitzplatz-Angebot durch die neu gestaltete Terrasse im Außenbereich zusätzlich verbessert.
            </div>
        </div>
        <div class="additional-blocks">
            <sponsorighComp />
            <lastNews class="mb-4 mt-4" />
            <graphicComponent class="mb-4"/>
            <pizzaComponent class="mb-4 popup-m"/>
            <kontaktComponent class="" />


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
import graphicComponent from '../../../components/vareinPage/graphicComponent.vue'
import pizzaComponent from '../../../components/vareinPage/pizzaComponent.vue'
import kontaktComponent from '../../../components/vareinPage/kontaktComponent.vue'

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
        graphicComponent,
        pizzaComponent,
        kontaktComponent
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
</style>