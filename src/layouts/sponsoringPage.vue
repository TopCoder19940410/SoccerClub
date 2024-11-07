<template>
    <headerComponent />
    <div class="main-container">
        <div class="sponsoring-title red-title-text">
            Förderer
        </div>

        <div class="sponsoring-container">
            <div class="sponsor-item">
                <div class="sponsor-logo">
                    <img src="../assets/img/sponsorship/alwa-Logo-Claim-unten.svg" alt="">
                </div>
                <div class="sponsor-text">
                    Alwa - ein natürliches, frisches und reines Vergnügen. Ob erfrischendes Mineralwasser oder köstliches Getränk - alwa ist der perfekte Begleiter im Leben und bietet für jeden Geschmack und Anlass das passende Getränk. Als regionaler Mineralbrunnen verkörpert alwa ein echtes Stück Heimat und Originalität.
                </div>
            </div>
            <div class="sponsor-item top">
               
                <div class="sponsor-text">
                    Artinger Stahlrohr GmbH & Co. KG - Ein großer Lagerplatz für Stahlrohre im Süden Deutschlands. Wir spezialisieren uns auf die Lieferung von nahtlosen Stahlrohren, Präzisionsstahlrohren für hydraulische und pneumatische Systeme. Unser Team garantiert qualitativ hochwertigen Service und pünktliche Auftragsabwicklung.
                </div>
                <div class="sponsor-logo">
                    <img src="../assets/img/sponsorship/logo2.png" alt="">
                </div>
            </div>
            <div class="sponsor-item">
                <div class="sponsor-logo">
                    <img src="../assets/img/sponsorship/logo3.png" alt="">
                </div>
                <div class="sponsor-text">
                    Raus aus dem Alltag.
Pure Lebensfreude erfahren.
Auf einem Bike, das zu Dir passt.
Es wartet schon auf Dich.
                </div>
               
            </div>
            <div class="sponsor-item top">
               
                <div class="sponsor-text">
                    Konzelmann GmbH, shortly KKI -> Konzelmann Kunststoff Innovationen, headquartered in Löchgau between Stuttgart and Heilbronn in southwestern Germany, develops and produces high-quality plastic injection molding products.


                </div>
                <div class="sponsor-logo">
                    <img src="../assets/img/sponsorship/logo4.png" alt="">
                </div>
            </div>
            <div class="sponsor-item">
                <div class="sponsor-logo">
                    <img src="../assets/img/sponsorship/logo5.png" alt="">
                </div>
                <div class="sponsor-text">
                    Spannende Einblicke in die Welt von ASYS
                    Wir sind die ASYS Group und 'Transforming Ideas' ist unsere Vision. Erhalten Sie aufregende Einblicke in die Welt von ASYS im neuen Unternehmensvideo.
                </div>
               
            </div>
        </div>
    </div>
    <footerComponent />
</template>
<script>
import headerComponent from '../components/headerComponent.vue';
import footerComponent from '../components/footerComponent.vue';
export default {
    components: {
        headerComponent,
        footerComponent
    }
}
</script>
<style scoped>
    @import url('../assets/styles/sponsoring.css');
</style>