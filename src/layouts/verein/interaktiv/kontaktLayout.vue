<template>
    <headerComponent />
    <vereinLine class="line" />
    <div class="main-container">
        <div class="content-block">
            <div class="content-title">
                Kontakt
            </div>

            <div class="text mb-4">
                Was immer Sie auf dem Herzen haben oder uns mitteilen möchten, hier haben Sie die Gelegenheit dazu. Ihre
                Nachricht wird von unserem System an einen unserer Mitarbeiter weitergeleitet und schützt uns vor Spam. Wir
                versuchen Ihre Anfrage schnellstmöglich zu bearbeiten.
            </div>

            <div class="content-title">
                Kontaktformular
            </div>

            <div class="kontakt-form">
                <div class="field mb-4">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Anrede</label>
                    <select id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="Herr">Herr</option>
                        <option value="Frau">Frau</option>
                    </select>
                </div>
                <div class="field mb-4">
                    <label for="Nachname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nachname</label>
                    <input type="text" id="Nachname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nachname" required>
                </div>
                <div class="field mb-4">
                    <label for="Vorname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vorname</label>
                    <input type="text" id="Vorname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vorname" required>
                </div>
                <div class="field mb-4">
                    <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" id="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required>
                </div>
                <div class="field mb-4">
                    <label for="Telefonnummer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefonnummer</label>
                    <input type="text" id="Telefonnummer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefonnummer" required>
                </div>
                <div class="field mb-4">
                    <label for="Webseite" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Webseite</label>
                    <input type="text" id="Webseite" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Webseite" required>
                </div>
                <div class="field mb-4">
                    <label for="Kategorie" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategorie</label>
                    <select id="Kategorie"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="Allgemein">Allgemein</option>
                        <option value="Herren">Herren</option>
                        <option value="Frauen">Frauen</option>
                        <option value="Jugend">Jugend</option>
                        <option value="Sponsoring">Sponsoring</option>
                    </select>
                </div>
                <div class="field mb-4">
                    <label for="Betreff" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Betreff</label>
                    <input type="text" id="Betreff" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Betreff" required>
                </div>
                <div class="field mb-4">
                    <label for="Nachricht" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nachricht</label>
                    <input type="text" id="Nachricht" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nachricht" required>
                </div>

                <div class="field mb-4">
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Datenschutz</label>
                    </div>
                    <div>
                        Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an info@fvloechgau.de widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer Datenschutzerklärung.
                    </div>
                </div>

                <redButton path="" text="Kontakt" />
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