<template >
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title mb-4">
                Mitgliedschaft beim FVL
            </div>
          <div class="text mb-4">
            Haben Sie Interesse an einer sportlichen Betätigung beim FV Löchgau oder wollen Sie den Verein durch Ihre passive Mitgliedschaft unterstützen? Dann werden Sie Mitglied bei unserem Verein.
          </div>

          <div class="text mb-3">
            Einfach den Mitgliedsantrag herunterladen, ausdrucken, ausfüllen und per Post an nachfolgende Adresse senden oder bei einem Verantwortliche abgeben:
          </div>

          <div class="text mb-4">
            <div>
                FV Löchgau e.V.
            </div>
            <div>
                Mitgliederverwaltung
            </div>
            <div>
                Postfach 1001
            </div>
            <div>
                74367 Löchgau

            </div>
          </div>

          <div class="text mb-4">
            Natürlich können Sie vor einer Mitgliedschaft auch Kontakt mit einem verantwortlichen aus der Vorstandschaft aufnahmen, der Ihnen im Vorfeld gerne Fragen zum Verein beantwortet. Genießen Sie alle Vorteile einer Mitgliedschaft beim FVL, denn als Vollmitglied erhalten Sie:
          </div>

          <ul class-mb-4>
            <li>Stimmrecht in der Mitgliederversammlung und damit aktive Mitbestimmung über das Vereinsleben</li>
            <li>FVL- Mitglieder zahlen ermäßigten Eintritt bei den Heimspielen der aktiven Mannschaften sowie bei der Jahresfeier des Vereins</li>
            <li>FVL- Mitglieder erhalten ermäßigte Dauerkarten</li>
            <li>Jugendliche Vereinsmitglieder bis 18 Jahre erhalten freien Eintritt bei allen Heimspielen der aktiven Mannschaften</li>
            <li>gesellschaftliches Miteinander in einem homogenen Verein mit familiärer Atmosphäre</li>
          </ul>

          <div class="text mb-3 mt-4">
            Die aktuellen Mitgliedsbeiträge (pro Jahr):
          </div>

          <div class="text text-container flex justify-between">
            <div class="leftside">
                <ul>
                    <li>Erwachsene: 90 €</li>
                    <li>Jugendliche: 100 €</li>
                    <li>Ehepaare: 143 €</li>
                    <li>Familie: 230 €</li>
                </ul>
            </div>
            <div class="rightside">
                <div class="title-red red mb-3">Download</div>
                <a href="/2103-Aufnahmeantrag-FVL-Mitglieder.pdf" class="red mb-3">Aufnahmeantrag für neue Mitglieder</a>
                <a href="/190524-Satzung-des-FV-Loechgau.pdf" class="red">Satzung des FV Löchgau vom 03.04.2009/24.05.2019</a>
            </div>
          </div>

           
          
        </div>

        <!-- Right blocks -->
        <div class="additional-blocks">
           <lastNews class="mb-4" />
           <mitgliederComponent />
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
export default {
    components: {
        footerComponent,
        headerComponent,
        vereinLine,
        // Right blocks
        lastNews,
        mitgliederComponent,
        sponsorighComp
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