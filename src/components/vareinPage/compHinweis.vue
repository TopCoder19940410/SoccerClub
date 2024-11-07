<template>
    <div class="container">
        <div class="title">
            Vereinsführung | Hinweis
        </div>
        
        <div class="text mt-3">
            Falls Sie eine hier aufgeführte Person per Email kontaktieren möchten, klicken Sie einfach auf den Namen und Sie gelangen zu einer Detailansicht des Ansprechpartners. Sie können auch einfach eine Email an [vorname].[nachname]@fvloechgau.de senden.
        </div>
    </div>

    <div class="popup" v-if="showPopup">
        <div class="close" @click="closePopup">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
        </div>
        <div class="popup-container">
            <img src="../../assets/img/organigramm.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            showPopup: false
        }
    },

   
}
</script>
<style scoped>
    .container {
        padding: 10px;
        margin-top: 20px;
        max-width: 500px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 10px 10px 26px -15px rgba(0,0,0,0.75);
        height: 167px;
    }

    .title{
        color: #cc3366;
        font-family: 'goboldI', sans-serif;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 5px;
        text-transform: uppercase;
    }

    .image {
        height: 122px;
        display: flex;
        align-items: center;
    }

    .image img {
        width: 100%
    }

    .text {
        font-size: 14px;
    }

    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.4);
        z-index: 999;
    }
    

    .close {
        position: absolute;
        right: 20px;
        top: 20px;
        height: 20px;
        width: 40px;
        fill: #fff;
    }
</style>