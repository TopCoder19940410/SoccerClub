<template>
    <headerComponent />
    <vereinLine  class="line"/>
    <div class="main-container">
        <div class="content-block">
            <div class="employes-container">
                <div class="content-title">
                    Schiedsrichter
                </div>
                <div class="employer-box">
                    <div class="employer-item">
                        <div class="ei-img">
                            <img src="../../../assets/img/schied/1.jpeg" alt="">
                        </div>
                        <div class="ei-info">
                            <div class="ei-name">
                                Bierhals, Andre
                            </div>
                            <div class="ei-job-title">
                                Schiedsrichter | Bereich: Spielbetrieb
                            </div>
                            <div class="contact-block">
                                <span class="bold">
                                    Info:
                                </span>
                               <div>
                                Schiedsrichter für den FV Löchgau seit 2012
                               </div>
                            </div>
                        </div>
                    </div>

                    <div class="employer-item">
                        <div class="ei-img">
                            <img src="../../../assets/img/schied/2.jpeg" alt="">
                        </div>
                        <div class="ei-info">
                            <div class="ei-name">
                                Frick, Jürgen
                            </div>
                            <div class="ei-job-title">
                                Jürgen Frick ist Schiedsrichter für den FV Löchgau seit 2012.
                            </div>
                            <div class="contact-block">
                                <span class="bold">
                                    Info:
                                </span>
                               <div>
                                Schiedsrichter für den FV Löchgau seit 2012
                               </div>
                            </div>
                        </div>
                    </div>

                    <div class="employer-item">
                        <div class="ei-img">
                            <img src="../../../assets/img/schied/3.jpeg" alt="">
                        </div>
                        <div class="ei-info">
                            <div class="ei-name">
                                Müller, Pascal

                            </div>
                            <div class="ei-job-title">
                                Schiedsrichter | Bereich: Spielbetrieb
                            </div>
                            <div class="contact-block">
                                <span class="bold">
                                    Info:
                                </span>
                               <div>
                                Pascal Müller ist Schiedsrichter seit 2002 und ist seitdem in immer höheren Ligen als Referee und Assistent aktiv.
                               </div>
                            </div>
                        </div>
                    </div>

                    <div class="employer-item">
                        <div class="ei-img">
                            <img src="../../../assets/img/schied/4.jpeg" alt="">
                        </div>
                        <div class="ei-info">
                            <div class="ei-name">
                                Puglisi, Vanessa
                            </div>
                            <div class="ei-job-title">
                                Schiedsrichter | Bereich: Schiedsrichter
                            </div>
                            <div class="contact-block">
                                <span class="bold">
                                    Info:
                                </span>
                               <div>
                                Schiedsrichterin für den FV Löchgau seit 01.09.2016.
                               </div>
                            </div>
                        </div>
                    </div>

                    <div class="employer-item">
                        <div class="ei-img">
                            <img src="../../../assets/img/schied/5.jpeg" alt="">
                        </div>
                        <div class="ei-info">
                            <div class="ei-name">
                                Raich, Jennifer
                            </div>
                            <div class="ei-job-title">
                                Schiedsrichter | Bereich: Spielbetrieb
                            </div>
                            <div class="contact-block">
                                <span class="bold">
                                    Info:
                                </span>
                               <div>
                                Jennifer Raich ist seit 21.07.2013 Schiedsrichterin für den FV Löchgau und seit 2018 in der Schiedsrichter Gruppe Ludwigsburg als Beisitzerin für den Bereich Frauen und Digitales verantwortlich                               </div>
                            </div>
                        </div>
                    </div>
                    <div class="employer-item">
                        <div class="ei-img">
                            <img src="../../../assets/img/schied/6.jpeg" alt="">
                        </div>
                        <div class="ei-info">
                            <div class="ei-name">
                                Vullo, Calogero
                            </div>
                            <div class="ei-job-title">
                                Schiedsrichter | Bereich: Spielbetrieb
                            </div>
                            <div class="contact-block">
                                <span class="bold">
                                    Info:
                                </span>
                               <div>
                                Calogero Vullo ist seit 2012 Schiedsrichter für den FV Löchgau und seit 2021 im Bezirksvorstand des Bezirks Enz/Murr als Beisitzer "Bildung und Qualifizierung" tätig.
                               </div>
                            </div>
                        </div>
                    </div>

                    <div class="employer-item">
                        <div class="ei-img">
                            <img src="../../../assets/img/schied/7.jpeg" alt="">
                        </div>
                        <div class="ei-info">
                            <div class="ei-name">
                                Vullo, Luca
                            </div>
                            <div class="ei-job-title">
                                Schiedsrichter | Bereich: Spielbetrieb
                            </div>
                            <div class="contact-block">
                                <span class="bold">
                                    Info:
                                </span>
                               <div>
                                Seit 2019 Schiedsrichter für den FVL.
                               </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

             
            </div>
        </div>
        <div class="additional-blocks">
           
            <compHinweis class="mt-3" />
            <compWeitere />
           
        </div>
    </div>
    <footerComponent />
</template>
<script>

import headerComponent from '../../../components/headerComponent.vue';
import vereinLine from '../../../components/vereinLine.vue'
import compHinweis from '../../../components/vareinPage/compHinweis.vue';
import compWeitere from '../../../components/vareinPage/compWeitere.vue';
import footerComponent from '../../../components/footerComponent.vue';
export default {
    components: {
        headerComponent,
        vereinLine,
        compHinweis,
        footerComponent,
        compWeitere
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


    .employer-item {
        font-size: 14px ;
    }

    .bold {
        font-family: 'metropolis', sans-serif;
    }


</style>