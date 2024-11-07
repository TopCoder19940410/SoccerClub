<template>
    <div class="container">
        <div class="title">
            Verein | Ansprechpartner
        </div>
        <div class="image">
            <img src="../../assets/chronik/donnerstag.jpeg" alt="">
        </div>
        <div class="text flex">
            <div class="text-container w-50">
                Montag ist Ruhetag <br>
                Dienstag - Freitag ab 17.00 Uhr <br>
                Samstag ab 11.00 Uhr <br>
                Sonntag ab 10.00 Uhr <br>
            </div>
            <div class="text-container w-50">
               <span class="bold">Warme Küche:</span>  <br>
                Dienstag - Samstag ab 17.00 Uhr <br>
                Sonntag ab 11.30 Uhr
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showPopup: false
        }
    },


}
</script>
<style scoped>
.container {
    padding: 10px;
    border-radius: 8px;
    max-width: 500px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 10px 10px 26px -15px rgba(0, 0, 0, 0.75);
    height: 267px;
}

.title {
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