<template >
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title mb-4">
                Ehrenamt
            </div>
            <div class="text bold mb-4">
                Wir brauchen mehr ehrenamtliche Mitarbeit
            </div>

            <div class="text mb-4">
                Der Verein ist in den letzten Jahren stark gewachsen, vor allem im Jugendbereich. Dadurch sind die Aufgaben viel umfangreicher, vielfältiger und schwieriger geworden. Daher brauchen wir auch mehr ehrenamtliche Leute, welche im Interesse eines gesunden und eines weiterhin wohl fühlenden Vereinslebens im Verein mitarbeiten. Tätigkeitsfelder gibt es genügend. Beispielhaft seien genannt:
            </div>

            <ul class="mb-4">
                <li>
                    Verwaltung- und EDV
                </li>
                <li>
                    Mitglieder- und Sponsorenpflege
                </li>
                <li>
                    Finanzen
                </li>
                <li>
                    Unterhaltung der Vereinsanlagen
                </li>
                <li>
                    Öffentlichkeitsarbeit
                </li>
                <li>
                    Organisation und Abwicklung von Veranstaltungen
                </li>
                <li>
                    Spielbetrieb der Aktiven und Jugend
                </li>
                <li>
                    Übungsleiter und Betreuer
                </li>

            </ul>

            <div class="text mb-4">
                Wir brauchen Ihre engagierte und ehrenamtliche Mitarbeit um den Aktiven und Jugendlichen weiterhin das Fußballspielen in einer tollen familiären Umgebung bieten zu können. Aber auch um den Passiven Mitgliedern im Verein getreu dem Slogan „der Verein für Jung und Alt“ eine ansprechende Heimstätte zu bieten.
            </div>

            <div class="text mb-4">
                Wollen Sie mitmachen? Dann melden Sie sich unverbindlich schriftlich oder telefonisch bei Werner Schlenker (Kontaktadresse siehe unten). Dort erhalten Sie weitere Informationen. Gerne sprechen wir auch persönlich mit Ihnen!
            </div>

            <div class="text-container mb-4">
                <div class="bold">
                    Ihr FV Löchgau
                </div>
                <div class="text">
                    -Der Vorstand-
                </div>
            </div>
            <div class="text-container mb-4">
                <div class="bold">
                    Kontaktadresse:
                </div>
                <div class="text">
                    Werner Schlenker
                </div>
                <div class="text">
                    Forchenweg 26
                </div>
                <div class="text">
                    74369 Löchgau
                </div>
                <div class="text">
                    Tel.: 07143/18726
                </div>
                <div class="red">
                    <a href="mailto:werner.schlenker@fvloechgau.de" class="red">Email</a>
                </div>
            </div>

            <div class="text">
                Mehr Informationen zu "Sport braucht dein Ehrenamt" erhalten Sie auch unter <span class="red">www.ehrenamt-im-sport.de</span> - Eine Initiative des Deutschen Olympischen Sportbunds.
            </div>
          
        </div>

        <!-- Right blocks -->
        <div class="additional-blocks">
           <lastNews class="mb-4" />
           <ehrenamtComponent />
           <sponsorighComp />
           
        </div>
    </div>
    <footerComponent />
</template>
<script>
import headerComponent from '../../../components/headerComponent.vue';
import footerComponent from '../../../components/footerComponent.vue';
import lastNews from '../../../components/vareinPage/lastNews.vue';
import mitgliederComponent from '../../../components/vareinPage/mitgliederComponent.vue';
import vereinLine from '../../../components/vereinLine.vue';
import sponsorighComp from '../../../components/vareinPage/sponsorighComp.vue';
import ehrenamtComponent from '../../../components/vareinPage/ehrenamtComponent.vue';
export default {
    components: {
        footerComponent,
        headerComponent,
        vereinLine,
        // Right blocks
        lastNews,
        mitgliederComponent,
        sponsorighComp,
        ehrenamtComponent
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

ol {
    list-style: auto;
    padding-left: 20px;
}

ul {
    padding-left: 20px;
    list-style: disc;
}

.rightside {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 300px;
}
</style>