<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Satzung des Fussballvereins Löchgau e.V.
            </div>
            <div class="text">
                Bei der Generalversammlung am 03. April 2009 wurde von den anwesenden Mitgliedern eine grundlegend neue Vereinssatzung beschlossen.
            </div>
            <div class="text mb-3">
                Die Neufassung der Satzung war damals notwendig, da sich die Vereinsstruktur änderte. Der seitherige klassische Vorstand mit 1. Vorsitzendem, 2. Vorsitzendem, Kassier und Schriftführer wurde durch eine neue moderne Führungsstruktur ersetzt. Der Vorstand besteht künftig aus dem 1. Vorsitzenden, dem Vorsitzenden Finanzen und dem Vorsitzenden Sport. Unter diesem Vorstand arbeiten neun Teams eigenverantwortlich unter der Führung eines Teamleiters. Erstmals ist in der Satzung das Präsidentenamt verankert. Der Präsident repräsentiert den Verein nach außen, gehört jedoch nicht zum Vorstand. Vorstand, Teamleiter und Präsident bilden den sogenannten erweiterten Vorstand. <br>
                Am  24. Mai 2019 hat die Generalversammlung eine Satzungsänderung beschlossen, die lediglich den § 4 betraf. Die Änderung wurde durch den Aufstieg der B-Juniorinnen in die Bundesliga vom DFB gefordert.
            </div>
            <div class="text mb-3">
                Auszug aus der Satzumg vom 03.04. 2009/24.05.2019
            </div>
            <blockquote><p><strong>§ 1 Name, Sitz und Geschäftsjahr</strong></p><p>1. Der Verein führt den Namen "Fußballverein Löchgau 1946 e.V."<br> 2. Der Verein wurde im Jahr 1946 gegründet und hat seinen Sitz in Löchgau.<br> 3. Geschäftsjahr ist das Kalenderjahr.<br> 4. Der Verein ist in das Vereinsregister beim Amtsgericht Besigheim unter Nr. 80 eingetragen.<br> 5. Die Farben des Vereins sind rot und weiß.</p><p><b>§ 2 Zweck und Ziele</b></p><p>1. Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnittes "steuerbegünstigte Zwecke" der Abgabenordnung.<br> 2. Zweck des Vereins ist die Förderung des Sports, insbesondere des Fußballs. Des Weiteren dient der Verein der Wertevermittlung und Integration von Jugendlichen, auch mit Migrationshintergrund.<br> ...</p></blockquote>
         
            <div class="tex">
                Die komplette Satzung kann im <router-link class="red" to="../interaktiv/download">Download-Bereich</router-link>  heruntergeladen werden.
            </div>
        </div>
        <div class="additional-blocks">
            <sponsorighComp  />
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

blockquote, cite, q, em, i, var, dfn {
    border-left: 3px solid #666;
    color: #666;
    margin: 0 0 1.5em 1.5em;
    padding: 2px 10px;
    font-style: italic;
}

.boxcontent p, .boxcontent img {
    padding: 2px 0;
    max-width: 100%;
    height: auto;
}
</style>