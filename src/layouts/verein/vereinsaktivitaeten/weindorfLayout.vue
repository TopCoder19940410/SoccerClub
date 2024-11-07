<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Löchgauer Weindorf

            </div>
           <img class="w-100 mb-4" src="../../../assets/chronik/banner4.jpeg" alt="">

           <div class="text mb-4 mt-3">
            Das Weindorf „Rund um den Marktplatz“ wird seit 1994 vom FV Löchgau veranstaltet und findet alle zwei Jahre in der Löchgauer Dorfmitte in Zusammenarbeit mit der Felsengartenkellerei Besigheim, der Strombergkellerei Bönnigheim, der Jupiterweinkellerei Hausen und dem Weinbaubetrieb Fritz Funk statt. An den Weinständen werden rund 40 Wein- und Sektsorten angeboten. Dabei sind alle gängigen Weine bis zur höchsten Qualitätsstufe ebenso vertreten wie Weine aus ökologischem Anbau, trockene und halbtrockene Weine und natürlich auch Secco und Sekt. Dazu erwarten die Besucher deftige Gerichte, aber auch schwäbische Spezialitäten und kulinarische Köstlichkeiten, die die Besucher verwöhnen und zum Verweilen in gemütlicher und geselliger Wein- und Sektrunde einladen.
        </div>

        <div class="content-title">
            Schlemmerdorf

        </div>

        <div class="text">
            Neben den rund 40 Wein- und Sektsorten der Strombergkellerei, der Felsengartenkellerei, der Jupiterweinkellerei Hausen und vom Weinbaubetrieb Fritz Funk gibt es zum Verzehr und für das leibliche Wohl vom „Deftigen“ bis zum „Kulinarischen“ ein reichhaltiges Angebot. Die Palette der Speisen beginnt bei schwäbischen Spezialitäten wie „Schaschliktopf“, Leberkäslaugenweck“ oder „Schupfnudeln mit Kraut“. Und zu einem guten Gläschen Wein paßt immer der leckere  „Flammkuchen“. Das kleine Löchgauer Weindorf wird mit diesem Angebot zu einem echten „Schlemmerdorf“.
        </div>

        <div class="content-title mt-4">
            Weindorf mit eigenem Charakter - klein aber fein
        </div>
        <div class="subtitle mb-3">
            40 Sorten Weine und Sekte

        </div>
        <div class="text">
            Es gibt Weindörfer im Land, die massenweise Leute anziehen. Das Löchgauer hat einen eigenen Charakter- klein aber fein. Das Heilbronner Weindorf wirbt mit dem Slogan „Deutschlands gemütliches Weindorf“. Stuttgart preist jährlich sein Fest um den Wein als „Deutschlands schönstes Weindorf“ an. Das Löchgauer Weindorf am Wochenende, welches erstmals 1994 stattfand, ist im Vergleich zu diesen Weindörfern zwar relativ klein, aber nicht minder fein. Felsengartenkellerei, Strombergkellerei die Jupiterweinkellerei und der Weinbaubetrieb Fritz Funk haben rund 40 Sorten an Weinen und Sekten im Angebot, ausgebaut in nahezu allen Qualitätsstufen. Dazu Weine aus dem ökologischen Anbau, und natürlich trocken und halbtrocken ausgebaute Weine. Und auch die Sektfreunde kommen auf ihre Kosten. An den Weinständen werden auch hochwertige Sekte angeboten. Für die Heilbronner, deren Weindorf in diesen Tagen stattfindet, ist es selbstverständlich, mindestens einmal auf dem Weindorf zu sein. Dies sollten sich nicht nur die Löchgauer, sondern auch die „Anrainer“ zu Herzen nehmen. Denn nicht nur das Weinangebot ist vielfältig – auch das Unterhaltungsprogramm mit Live – Musik sorgt für gute Stimmung. Dazu einige deftige schwäbische, aber auch kulinarische Speisen. Und für jeden „Zehnteles – oder Viertelesschlotzer“ ist mit Sicherheit der Wein seines Geschmacks dabei.
        </div>

        <div class="content-title mt-4">
            Weinbau in Löchgau
        </div>
        <div class="text">
            Der Weinbau spielte in Löchgau zu keiner Zeit die wichtigste Rolle. Er hat aber immer dazu beigetragen, dass sich die Löchgauer - allerdings erst nach harter Arbeit - ein kleines Zubrot verdienen konnten. Denn die Lagen, z.B. im Gewann „Steinbach“ und im Gewann „Berg“, sind überwiegend Steillagen, die hohe Ansprüche an die „Wengerter“ stellen und viel Handarbeit erfordern. Auf den Keuper- und Muschelkalkböden sind die Sorten Trollinger und Riesling am häufigsten vertreten. Aber auch Lemberger, Schwarzriesling und Kerner reifen dort bestens.
        </div>
        </div>
        <div class="additional-blocks">
            <sponsorighComp  />
            <lastNews class="mb-4 mt-4" />
            <weindorfPopup />
           

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
import weindorfPopup from '../../../components/vareinPage/weindorfPopup.vue'
export default {
    components: {
        headerComponent,
        vereinLine,
        lastNews,
        componentOrganigramm,
        compAnsprechpartner,
        sponsorighComp,
        footerComponent,
        weindorfPopup
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