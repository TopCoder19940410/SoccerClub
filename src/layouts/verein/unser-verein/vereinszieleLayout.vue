<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Vereinsziele
            </div>
           <div class="text-container">
                <div class="text mb-3">
                    Nach der Umstrukturierung des Vereins mit der neuen Vereinssatzung, die 2009 von der Generalversammlung beschlossen wurde, hat sich der Vorstand für die Arbeit im FV Löchgau für die Zukunft Ziele gesetzt, die Zug um Zug im Verein umgesetzt oder wenn schon erfolgreich begonnen, weiter verfolgt werden sollen.
                </div>
                <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 1
                    </div>
                    <div class="ziel-tex">
                        Das FVL-Schiff weiterhin mit Drive steuern und den eingeschlagenen Kurs einhalten.
                    </div>
                </div>

                <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 2
                    </div>
                    <div class="ziel-tex">
                        Den erfolgreich eingeschlagenen Weg beibehalten, sportlich und kulturell sowie die Ausbildung der Jugend erfolgreich weiterführen und den jungen Menschen Orientierung geben.

                    </div>
                </div>


                <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 3
                    </div>
                    <div class="ziel-tex">
                        Faire Spiele, Fairness und Disziplin sind der Grundstein, um erfolgreich im Fußballsport zu sein.
                    </div>
                </div>

                <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 4
                    </div>
                    <div class="ziel-tex">
                        Gute Zusammenarbeit mit der Gemeinde, mit den Verbänden, mit den örtlichen Vereinen, der Presse und den Trainern, Betreuern, Sponsoren und allen ehrenamtlich Tätigen.
                    </div>
                </div>

                <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 5
                    </div>
                    <div class="ziel-tex">
                        Eine Geschäftstelle ist schnellstmöglich in Planung zu bringen und umzusetzen. Ein Teamleiter im Team Verwaltung ist einzusetzen und die Geschäftsstelle zu besetzen.
                    </div>
                </div>

                <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 6
                    </div>
                    <div class="ziel-tex">
                        Der Anbau, die Sanitär- und Umkleideräume sind in einen zeitgemäßen Zustand zu bringen, die Umkleidekapazitäten zu ergänzen und vor dem Sportgelände sind die Parkplätze neu zu gestalten.
                    </div>
                </div>

                <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 7
                    </div>
                    <div class="ziel-tex">
                        Die geplanten Rasenplätze werden in aller Konsequenz und Beharrlichkeit weiter vorangetrieben und es werden alle Wege eingeschlagen, um an Zuschüsse und Fördermittel zu gelangen.
                    </div>
                </div>

                <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 8
                    </div>
                    <div class="ziel-tex">
                        Der bisherige erfolgreiche Weg kann nur weiterhin erfolgreich gegangen werden, wenn alle Teammitglieder, jeder einzelne im Verein mit Freude und Engagement die Aufgaben angeht und umsetzt.
                    </div>
                </div>

                <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 9
                    </div>
                    <div class="ziel-tex">
                        Die Säulen des Vereins sind die Aktiven, die Frauen, die Jugend, die Alten, die Mitglieder, der Ältestenrat, der Förderverein der Präsident des Vereines. Auf diese Säulen setzten wir als Vorstand unser Vertrauen und stellen uns auch der Kritik.
                    </div>
                </div> <div class="ziel-container mb-4">
                    <div class="text red mb-4">
                        Ziel 10
                    </div>
                    <div class="ziel-tex">
                        Der FV Löchgau ist der „Verein für jung und alt“ und wird dies auch künftig weiterhin sein, gestärkt durch die beschlossene, zielorientierte neue Vereinssatzung die es nun umzusetzen gilt.
                    </div>
                </div>


                <div class="text-right ">Stand: 01.04.2009
                </div>
               
           </div>
        </div>
        <div class="additional-blocks">
            <sponsorighComp  />
            <lastNews class="mb-4 mt-4" />
            <div class="additional-container flex mb-3">
                <componentOrganigramm />
                <compAnsprechpartner />
            </div>
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
        footerComponent
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