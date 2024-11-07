<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Impressum
            </div>

            <div class="text-block">
                <div class="content-title">
                    Angaben gemäß § 5 TMG:
                </div>
    
                <div class="text mb-4">
                    <div>FV Löchgau e.V.</div>
                    <div>Am Sportplatz 1</div>
                    <div>74369 Löchgau</div>
                </div>
            </div>

            <div class="text-block">
                <div class="content-title">
                    Postadresse:
                </div>
    
                <div class="text mb-4">
                    <div>FV Löchgau e.V.</div>
                    <div>Postfach 1001</div>
                    <div>74367 Löchgau</div>
                </div>
            </div>

            <div class="text-block">
                <div class="content-title">
                    Vertreten durch:
                </div>
    
                <div class="text mb-4">
                    <div>Mark Biffart</div>
                   
                </div>
            </div>

            <div class="text-block">
                <div class="content-title">
                    Kontakt:
                </div>
    
                <div class="text mb-4">
                    <div>Telefon: 07143/403626</div>
                    <div>E-Mail: info@fvloechgau.de</div>
                </div>
            </div>

            <div class="text-block">
                <div class="content-title">
                    Registereintrag:
                </div>
    
                <div class="text mb-4">
                    <div>Eintragung im Vereinsregister</div>
                    <div>Registergericht:Amtsgericht Stuttgart</div>
                    <div>Registernummer: VR 300080</div>
                </div>
            </div>

            <div class="text-block">
                <div class="content-title">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                </div>
    
                <div class="text mb-4">
                    <div>Mark Biffart</div>
                    <div>Am Sportplatz 1</div>
                    <div>74369 Löchgau</div>
                </div>
            </div>

            <div class="text-block">
                <div class="content-title">
                    Streitschlichtung
                </div>
    
                <div class="text mb-4">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </div>
            </div>


            <div class="text-block">
                <div class="content-title">
                    Haftung für Inhalte
                </div>
    
                <div class="text mb-4">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </div>
                <div class="text mb-4">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </div>
            </div>

            <div class="text-block">
                <div class="content-title">
                    Haftung für Links
                </div>
    
                <div class="text mb-4">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </div>
                <div class="text mb-4">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </div>
            </div>

            <div class="text-block">
                <div class="content-title">
                    Urheberrecht
                </div>
    
                <div class="text mb-4">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </div>
                <div class="text mb-4">
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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
import redButton from '../../../components/redButton.vue';
export default {
    components: {
        headerComponent,
        vereinLine,
        lastNews,
        componentOrganigramm,
        compAnsprechpartner,
        sponsorighComp,
        footerComponent,
        redButton
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
}</style>