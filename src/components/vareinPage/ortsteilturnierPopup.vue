<template>
    <div class="container">
        <div class="title">
            Ortsteilturnier | Siegerliste
        </div>
        
      

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-2 py-3">
                    Mannschaft
                </th>
                <th scope="col" class="px-2 py-3">
                    Siege
                </th>
                <th scope="col" class="px-2 py-3">
                    Mannschaft
                </th>
                <th scope="col" class="px-2 py-3">
                    Siege
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Neusätz
                </th>
                <td class="px-2 py-2">
                    8
                </td>
                <td class="px-2 py-2">
                    Kopfkratzer
                </td>
                <td class="px-2 py-2">
                    4
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kleinfeldle
                </th>
                <td class="px-2 py-2">
                    6
                </td>
                <td class="px-2 py-2">
                    Schulhofkicker
                </td>
                <td class="px-2 py-2">
                    3
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Siedlungsbolzer
                </th>
                <td class="px-2 py-2">
                    5
                </td>
                <td class="px-2 py-2">
                    Kopfkicker
                </td>
                <td class="px-2 py-2">
                    3
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Fleckenwetzer
                </th>
                <td class="px-2 py-2">
                    5
                </td>
                <td class="px-2 py-2">
                    
                </td>
                <td class="px-2 py-2">
                    
                </td>
            </tr>
           
        </tbody>
    </table>
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

    .red {
        color: #cc3366;
    }
</style>