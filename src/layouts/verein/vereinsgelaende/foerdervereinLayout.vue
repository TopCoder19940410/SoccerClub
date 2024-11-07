<template >
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title mb-4">
                Förderverein
            </div>
         

          <div class="text-container mb-4">
            <div class="bold">
                Gründe warum ein Förderverein
            </div>
            <div class="text">
                Im Förderverein können engagierte Menschen ihre Verbundenheit mit dem Fußball des FV Löchgau zeigen. Satzungsgemäß ist die Hauptaufgabe die Pflege und Instandhaltung unserer Sportanlagen. 
            </div>
          </div>

          <div class="text-container mb-4">
            <div class="bold">
                Ziele: Was wollen wir mit dem Förderverein erreichen? 
            </div>
            <div class="text">
                Der Fußballverein soll unterstützt werden durch die Beschaffung von Kapital in Form von Beiträgen und Spenden sowie durch Erträge bei Veranstaltungen und bei der Vermarktung von Werberechten des Fußballvereins. Mit den erwirtschafteten Mitteln wird der Förderverein ausschließlich den Fußballverein unterstützen. Das Ziel dieser Unterstützung ist, das Fußballangebots sowohl im Jugend- als auch im Frauen- und Herrenbereich. Weiter soll die seit Jahren erfolgreiche Jugendarbeit des Fußballvereins auch in der Zukunft erhalten, qualifiziert und ausgebaut werden. Außerdem wird der Förderverein alle Fußballmannschaften des FVL bei Veranstaltungen, Ausflügen, Turnieren sowie Saisonabschlussfeiern und Kameradschaftsabenden unterstützen. Die Förderung der Anschaffung von Sportgeräten und Sportkleidung gehört ebenfalls dazu. 
            </div>
          </div>
          <div class="text-container mb-4">
            <div class="bold">
                Umsetzung: Wie wollen wir den Fußballverein unterstützen? 
            </div>
            <div class="text">
                Wir streben an, eine große Zahl von Fördermitgliedern zu gewinnen und auch die Mitgliederzahl beständig hoch zu halten. Durch die Mitgliedsbeiträge von jährlich 10,00 € und die Spenden soll ein kontinuierliches Budget vorhanden sein. Fördervereinsmitglieder unterstützen mit ihrem Beitrag oder einer Spende ausschließlich den  Fußballverein mit seinen Mannschaften. Spender erhalten vom Förderverein eine Spendenbescheinigung. Der Förderverein übernimmt einige Veranstaltungen des Fußballvereins. 
            </div>
          </div>
          <div class="text-container mb-4">
            <div class="bold">
                Was können Sie für den Fußball des FV Löchgau tun? 
            </div>
            <div class="text">
                Werden Sie Mitglied im Verein zur Förderung des Fußballvereins Löchgau. Wirken Sie im Förderverein durch Ideen und deren Umsetzung mit. Unterstützen Sie den Förderverein mit Spenden.  <br>
                Dafür können Sie folgende Bankverbindung benutzen: <br>
                Löchgauer Bank eG  <br>
                Konto-Nr.: 61707007 <br>
                BLZ: 600 695 38 . 
            </div>
          </div>

          <div class="text">
            <span class="bold">Werden Sie Mitglied</span> im Sponsorenring und machen Sie Werbung auf dem Sportgelände und in den Werbemedien des FV Löchgau. Für Fragen stehen Ihnen die Vorstände Volker Weible, Siegfried Doderer und Ingrid Schuster jederzeit gerne zur Verfügung.
          </div>
          
        </div>

        <!-- Right blocks -->
        <div class="additional-blocks">
           <lastNews class="mb-4" />
           <stammtischComponent />
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
import stammtischComponent from '../../../components/vareinPage/stammtischComponent.vue'
export default {
    components: {
        footerComponent,
        headerComponent,
        vereinLine,
        // Right blocks
        lastNews,
        mitgliederComponent,
        sponsorighComp,
        stammtischComponent
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