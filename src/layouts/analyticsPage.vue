<template>
    <headerComponent />
    <div class="analytics">
  <iframe src="https://yourufxspace.matomo.cloud/index.php?module=Widgetize&action=iframe&moduleToWidgetize=Dashboard&actionToWidgetize=index&idSite=1&period=week&date=yesterday" frameborder="0" marginheight="0" marginwidth="0" width="600px" height="700px"></iframe>
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
    
</style>