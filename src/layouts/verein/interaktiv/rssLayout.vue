<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                RSS-News-Feeds
            </div>
            <img class="w-100 mb-4" src="../../../assets/chronik/rss.jpeg" alt="">
            <div class="text mb-4">
                Sie wollen immer mit den neuesten Infos rund um den FVL beliefert werden? Auch wenn Sie nicht ständig die FVL-Homepage besuchen können - mit unserem RSS-Feed sind Sie immer informiert, sobald sich etwas Neues beim FVL tut. Die Einrichtung eines solchen Feeds ist denkbar einfach:
            </div>

            <div class="text mb-4">
                Sollten Sie bereits einen RSS-Newsreader installiert haben oder einen Online-Newsreader wie z.B. Feedly nutzen, so überprüfen Sie, ob Ihr Internet-Browser in der Symbolleiste das orangefarbene RSS-Symbol oder den Schriftzug "RSS" anzeigt. Wenn Sie darauf klicken, können Sie den RSS-Feed zu Ihren RSS-Abonnements hinzufügen. Alternativ können Sie über den folgenden Link den RSS-Feed Ihrer Wahl aufrufen:
            </div>

            <a href="/feed.rss" class="red">https://www.fvloechgau.de/aktuelles/news/feed.rss</a>


          

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
}</style>