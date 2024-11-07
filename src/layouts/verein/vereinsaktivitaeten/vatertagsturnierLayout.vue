<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Vatertagsturnier
            </div>
           <img class="w-100 mb-4" src="../../../assets/chronik/banner.jpeg" alt="">

           <div class="text mb-4 mt-3">
            Traditionell veranstaltet der Verein zur Förderung des FV Löchgau e.V. schon seit vielen Jahren an Himmelfahrt das „Fußball-Vatertagsturnier für Senioren mit Familienfest.“ Auswärtige Mannschaften sorgen bei dieser Veranstaltung einerseits für interessanten Fußball, andererseits kommt auch die Geselligkeit mit der Familie, den Kindern, Freunden, Sportkameraden und den Besuchern nicht zu kurz. In der Regel acht bis zehn Seniorenmannschaften spielen in Turnierform gegeneinander. Meistens mit dabei sind die „Alten Herren“ aus Besigheim, Freudental, Oberriexingen, Ottmarsheim, Walheim und Erligheim. Sportfreunde aus Wildbad und von den Zenderschen Kickers vervollständigen meistens das Teilnehmerfeld.
           </div>

           <div class="text mb-4">
            Während der fairen sportlichen Wettkämpfe auf dem Spielfeld besteht für die mitgereisten Familien ausgiebig Gelegenheit zu einem netten Plausch. Die Kinder können sich auf dem Spielplatz unmittelbar neben dem überdachten Gelände der Zuschauer austoben. In den Spielpausen und nach den Spielen besteht reichlich Gelegenheit für die „Alten Herren“, sich in gemütlicher Runde an frühere Zeiten zu erinnern. Die bewährte AH- Truppe des FV Löchgau sorgt für das leibliche Wohl der Gäste. Zum Mittagessen wird Schnitzel mit Salat angeboten. Der Veranstalter freut sich jedes Jahr immer wieder auf viele Besucher, die sich an diesem Feiertag einfach gut unterhalten wollen.

           </div>
        </div>
        <div class="additional-blocks">
            <sponsorighComp  />
            <lastNews class="mb-4 mt-4" />
            <tournierVatertagsturnier />
           

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
import tournierVatertagsturnier from '../../../components/vareinPage/tournierVatertagsturnier.vue'
export default {
    components: {
        headerComponent,
        vereinLine,
        lastNews,
        componentOrganigramm,
        compAnsprechpartner,
        sponsorighComp,
        footerComponent,
        tournierVatertagsturnier
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
</style>