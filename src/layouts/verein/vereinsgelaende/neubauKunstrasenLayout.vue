<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Neubau Kunstrasen
            </div>
            <div class="content-title">
                Der Beschluss der Generalversammlung vom 20. März 2015
            </div>

            <div class="text mb-3">
               <ol>
                <li>
                    Dem Bau des Sportplatzes mit dem Verein als Bauherr wird zugestimmt.
                </li>
                <li>
                    Dem Finanzierungsmodell wird zugestimmt 
                </li>
                <li>
                    Um Handlungsspielraum bei einer Kostenerhöhung oder bei Einnahmeausfällen zu haben wird der Vorstand ermächtigt, ein Darlehen von max. 100.000 € aufzunehmen und den auszuhandelnden Darlehensvertrag zu unterschreiben. Das Darlehen soll durch eine Bürgschaft der Gemeinde gesichert werden. 
                </li>
                <li>
                    Um die Zins- und Tilgungsraten leisten zu können, wird der Vorstand ermächtigt, frühestens ab dem Jahr 2018 die Mitgliedsbeiträge um max. 10 €/Jahr zu erhöhen
                </li>
                <li>
                    Der Vorstand wird ermächtigt, einen Pacht/Nutzungsvertrag über 25 Jahre mit der Gemeinde abzuschließen
                </li>
                <li>
                    Der Vorstand wird beauftragt eine Spendenaktion zu starten 
                </li>
               </ol>
            </div>

            <div class="content-title">
                Darstellung der Kosten und der Finanzierung 
            </div>
            <div class="mb-3">Kosten lt. Berechnung des Ingenieurbüros Rauschmaier: <span class="bold">951.000 €</span> </div>
            <ul class="mb-3">
                <li>
                    darin enthaltene MwSt.: 
                    <span class="bold">
                        151.840 €
                    </span>
                </li>
                <li>
                    möglicher Vorsteuerabzug (ca. 60%):
                    <span class="bold">
                        91.100 €
                    </span>
                </li>
            </ul>

            <div class="text mb-3">
                Finanzierungsanteil des FV Löchgau 25% Pflichtanteil bei WLSB-Zuschuss.
            </div>
            <div class="text mb-4">
                Finanzierungsanteil FV Löchgau absolut: <span class="bold">
                    237.750 €
                </span> 
            </div>
            <div class="content-title mb-3">
                Finanzierung
            </div>
            <div class="text mb-3">
                Vorsteuerabzug 60% der Vorsteuer aus Baukosten: <span class="bold">91.100 €</span> 
            </div>
            <div class="text mb-3">
                Darlehen <span class="bold">62.500 €</span>  (Zins und Tilgung finanziert über Erhöhung der Mitgliedsbeiträge) 
            </div>
            <div class="text mb-3">
                Spenden/Eigenleistungen FVL: <span class="bold">42.075 €</span> 
            </div>
            <div class="text mb-3">
                Spende der Gemeinde GmbH: <span class="bold">42.075 €</span> 
            </div>
            <div class="text mb-3">
                Gibt wieder: <span class="bold">237.750 €</span> 
            </div>

            <div class="content-title">
                Spendenkonto
            </div>
            <div class="text mb-4">
                Zur Finanzierung des Vereinsanteils sind Spenden in Höhe von mindestens <span class="bold">42.075 €</span>  erforderlich. Jedes höhere Spendenaufkommen reduziert die Darlehensaufnahme. Wenn die Schuldaufnahme ganz vermieden werden könnte, wäre das der Idealfall.
            </div>
            <div class="content-title">
                Planentwurf ist fertig

            </div>
            <div class="text red mb-3">
                Auf dem verkleinerten Plan vom 26.11.2015 sind Details schwer zu erkennen. Deutlich wird aber, dass der neue Kunstrasenplatz ganz an das Gelände des Schützenvereins nach Osten (rechts) geschoben wird. Im Westen (links) bleibt noch eine Rasenfläche in der Größe eines Norm-Spielfeldes übrig, welches später zu einem Rasenplatz nach DIN-Norm ausgebaut werden kann. Die Fläche -und das ist wichtig für den FVL- ist als Trainingsfläche und Spielfläche für die jüngere Jugend gleich nutzbar. Am 21. Januar 2016 hat der Gemeinderat die notwendig Bebauungsplanänderung im Entwurf beschlossen. Nach Abschluss des Verfahrens kann die Baugenehmigung beantragt werden.
            </div>
            <img src="../../../assets/chronik/map.jpeg" alt="">
           
          
        </div>
        <div class="additional-blocks">
            <spendenkontoLayout class="mb-3" />
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
import spendenkontoLayout from '../../../components/vareinPage/spendenkontoLayout.vue';
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
        spendenkontoLayout
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

ol {
    list-style: auto;
    padding-left: 20px;
}

ul {
    padding-left: 20px;
}

</style>