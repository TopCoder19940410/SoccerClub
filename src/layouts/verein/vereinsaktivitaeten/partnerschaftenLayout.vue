<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Partnerschaften
            </div>
            <div class="text mb-4">
                Der FV Löchgau pflegt seit einigen Jahrzehnten Verbindungen zu Mannschaften außerhalb von Deutschland. Eine
                feste partnerschaftliche Verbindung zum holländischen Verein DCS Zevenaar gibt es bereits seit fast 30
                Jahren. Regelmäßige jährliche Besuche auf Gegenseitigkeit haben die Verbindung zu einer feste,n
                Partnerschaft gefestigt. Zu Striano in Süditalien, die Heimat vieler italienischer Familien und Spieler, die
                nun in Löchgau leben, pflegt man unregelmäßige Kontakte. Auch nach Norditalien hat man Verbindungen, dort
                zum G.S. Villa bei Mailand. Ein Highlight war sicherlich die Reise der A- und B- Junioren 2003 in die USA
                nach Washington und Virginia. Soccer- Teams der weiblichen und männlichen Junioren weilten danach im Rahmen
                von Tourneen durch Europa beim FV Löchgau.
            </div>

            <div class="partners flex justify-between">

                <div class="partner-item">
                    <div class="partner-title red">
                        Zevenaar, Niederlande
                    </div>
                    <div class="partner-img">
                        <img src="../../../assets/chronik/partner1.jpeg" alt="">
                    </div>
                </div>
                <div class="partner-item">
                    <div class="partner-title red">
                        USA
                    </div>
                    <div class="partner-img">
                        <img src="../../../assets/chronik/partner2.jpeg" alt="">
                    </div>
                </div>
                <div class="partner-item">
                    <div class="partner-title red">
                        Mailand, Italien
                    </div>
                    <div class="partner-img">
                        <img src="../../../assets/chronik/partner3.jpeg" alt="">
                    </div>
                </div>
            </div>

        </div>
        <div class="additional-blocks">
            <sponsorighComp />
            <lastNews class="mb-4 mt-4" />

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