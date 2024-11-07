<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Löchgauer „Oktoberfest“

            </div>
            <div class="text mb-4">
                Im Jahr 2011 hat der FVL seinem Unterhaltungsprogramm eine neue Veranstaltung hinzugefügt. Ein „Oktoberfest“ auf dem überdachten Gelände beim Vereinsheim.
            </div>

           <div class="text mb-4">
            In den Jahren 2012 und 2013 wurde die Veranstaltung, jeweils im Oktober, wiederholt. Garant für gute Stimmung bei einem typischen bayerischen Abend war die Kapelle “Arno und der Musikantenstammtisch Großwiesen.“ 2014 wurde zugunsten eines Weinfestes auf dem Gelände pausiert. Im Oktober 2015 war es dann wieder soweit. Diesmal sorgten „Die Lausbuba“ für eine mords Gaudi.
           </div>

           <div class="text">Das Oktoberfest ist weiter fest im FVL-Terminkalender eingeplant. Noch nicht geklärt ist, ob im jährlichen oder 2-Jahres Rhythmus.

           </div>

        </div>
        <div class="additional-blocks">
            <sponsorighComp />
            <lastNews class="mb-4 mt-4" />
            <oktoberFest />
            <compHinweis class="mt-3" />

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
import oktoberFest from '../../../components/vareinPage/oktoberFest.vue';

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
        oktoberFest
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

.year {
    font-family: 'metropolis';
}

.history-block {
    display: flex;
    flex-direction: column;
}

blockquote,
cite,
q,
em,
i,
var,
dfn {
    border-left: 3px solid #666;
    color: #666;
    margin: 0 0 1.5em 1.5em;
    padding: 2px 10px;
    font-style: italic;
}

.boxcontent p,
.boxcontent img {
    padding: 2px 0;
    max-width: 100%;
    height: auto;
}
.partner-title{
    font-family: 'metropolis', sans-serif;
}
</style>