<template>
    <dashboardHeader />
    <div class="flex">
        <sideBar />
        <div class="content w-full p-4">
            <div class="title">Neue Seite hinzufugen:</div>
            <div class="page-info flex">
                <div class="w-50 mr-3">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seiten
                        Titel:</label>
                    <input type="text" v-model="title" id="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Title" required />
                </div>
                <div class="w-50 mr-3">
                    <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link
                        Kategorie</label>
                    <input type="text" v-model="category" id="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="URL" required />
                </div>

                <div class="w-50">
                    <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seiten url
                        (Beispiel: home... im Browser wird es dann als /home
                        dargestellt):</label>
                    <input type="text" v-model="url" id="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="URL" required />
                </div>
            </div>
            <div class="title">Seiten Inhalt</div>
            <div class="editor-section w-full flex justify-between">
                <div class="editor-leftside">
                    <!-- <div v-for="(section, index) in content?.leftside"  contenteditable="true"  @blur="updateText(index)" :class="section.className" v-html="section.text"></div> -->
                    <draggable v-model="content.leftside" group="people" @start="drag = true" @end="drag = false"
                        item-key="id">
                        <template #item="{ element, index }">
                            <div class="content-item" :class="element.class" :data-index="index">
                                <div v-if="element.tag == 'title' || element.tag == 'paragraph'" class="contents"
                                    v-html="element.text">

                                </div>
                                <img v-if="element.tag == 'img'" :src="element.imgPath" alt="">
                                <a :href="element.to" v-if="element.tag == 'link'">{{ element.text }}</a>
                                <div v-if="element.tag !== 'img'" class="edit" @click="editObj(index)">
                                    <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd"
                                        stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </div>

                                <div class="edit delete" @click="deleteContent(index)">
                                    <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd"
                                        stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </div>
                            </div>
                        </template>
                    </draggable>
                    <div class="add-new" @click="showEditor = true">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                fill-rule="nonzero" />
                        </svg>
                        <span>Neues Element hinzufügen</span>
                    </div>
                    <div class="red-btn mt-4" @click="sendData">Hinzufügen</div>

                </div>

                <div class="editor-rightside">
                    <div class="right-popups-list">
                        <div class="right-popup " v-for="(item, index) in content.rightside">

                            <div class="delete block" @click="deleteSctionFromRight(index)">
                                <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd"
                                    stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                                        fill-rule="nonzero" />
                                </svg>
                            </div>
                            <div class="title-section">
                                <div class="add-title" v-if="!item[0] || !item[0].title"
                                    @click="addTitleInSection(index)">
                                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                        stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                            fill-rule="nonzero" />
                                    </svg>
                                </div>
                                <div class="title-exist" v-if="item[0] && item[0].title">
                                    {{ item[0].title }}
                                </div>
                            </div>


                            <draggable v-model="content.rightside[index]" group="people" @start="drag = true"
                                @end="drag = false" item-key="id">
                                <template #item="{ element, index: contentIndex }">
                                    <div class="content-item" :class="element.class" :data-index="index">
                                        <div v-if="element.tag == 'title' || element.tag == 'paragraph'"
                                            class="contents" v-html="element.text"></div>
                                        <img v-if="element.tag == 'img'" :src="element.imgPath" alt="">
                                        <a :href="element.to" v-if="element.tag == 'link'">{{ element.text }}</a>
                                        <div v-if="element.tag !== 'img'" class="edit"
                                            @click="editObjRight(index, contentIndex)">
                                            <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd"
                                                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z"
                                                    fill-rule="nonzero" />
                                            </svg>
                                        </div>
                                        <div class="edit delete" @click="deleteContentRight(index, contentIndex)">
                                            <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd"
                                                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                                                    fill-rule="nonzero" />
                                            </svg>
                                        </div>
                                    </div>
                                </template>
                            </draggable>


                            <div class="add-section"
                                @click="this.showEditorRight = true, this.addItemInSectionIndex = index">
                                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                    stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                        fill-rule="nonzero" />
                                </svg>
                            </div>


                        </div>
                    </div>

                    <section class="content" v-for="section in content?.rightside" v-html="section.text"></section>
                    <div class="add-new mt-2" @click="createRightEmptySection">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                fill-rule="nonzero" />
                        </svg>
                        <span>Neues Element hinzufügen</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="elements-popup" v-show="showEditor">
        <div class="popup-container">
            <span class="red-text">Element auswählen</span>
            <div class="elements-box">
                <div class="element" @click="addParagraph">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                    </svg>
                    <span>Text</span>
                </div>

                <div class="element" @click="addTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                    </svg>
                    <span>Überschrift
                        schwarz</span>
                </div>

                <div class="element" @click="addRedTitle">
                    <svg fill="#c36" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                    </svg>
                    <span>Überschrift rot</span>
                </div>

                <label for="file_input">
                    <div class="element" @click="addImage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M14 9l-2.519 4-2.481-1.96-5 6.96h16l-6-9zm8-5v16h-20v-16h20zm2-2h-24v20h24v-20zm-20 6c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.896 2-2 2s-2-.895-2-2z" />
                        </svg>
                        <span>Bild</span>
                    </div>
                </label>
                <input
                    class=" hidden block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="file_input" type="file" @change="uploadFile">



                <div class="element" @click="addLink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M7.092 5.099l1.439-.205-.439-3.083-1.44.204.44 3.084zm-2.211 3.445l.205-1.44-3.084-.44-.205 1.441 3.084.439zm-.494-5.163l-1.03 1.03 2.203 2.204 1.029-1.03-2.202-2.204zm12.541 15.565l-1.439.205.438 3.083 1.441-.204-.44-3.084zm2.21-3.446l-.206 1.441 3.085.439.205-1.44-3.084-.44zm.495 5.163l1.028-1.029-2.204-2.204-1.027 1.03 2.203 2.203zm2.64-18.904c2.344 2.346 2.344 6.149.001 8.494l-3.896 3.896-1.417-1.417 3.895-3.895c1.562-1.562 1.562-4.101 0-5.662-1.562-1.562-4.101-1.562-5.662 0l-3.894 3.895-1.416-1.416 3.895-3.895c2.344-2.345 6.147-2.345 8.494 0zm-8.138 16.631l-3.852 3.851c-2.344 2.347-6.146 2.345-8.494.001-2.344-2.346-2.345-6.149 0-8.494l3.854-3.851 1.414 1.415-3.851 3.851c-1.562 1.562-1.562 4.102-.001 5.663 1.563 1.561 4.102 1.561 5.664-.001l3.85-3.851 1.416 1.416z" />
                    </svg>
                    <span>Link</span>
                </div>
            </div>
        </div>
    </div>

    <div class="elements-popup" v-show="showEditorRight">
        <div class="popup-container">
            <span class="red-text">Element auswählen</span>
            <div class="elements-box">
                <div class="element" @click="addParagraphRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                    </svg>
                    <span>Text</span>
                </div>

                <div class="element" @click="addTitleRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                    </svg>
                    <span>Überschrift
                        schwarz</span>
                </div>

                <div class="element" @click="addRedTitleRight">
                    <svg fill="#c36" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                    </svg>
                    <span>Überschrift rot</span>
                </div>

                <label for="file_input2">
                    <div class="element" @click="addImageRight">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M14 9l-2.519 4-2.481-1.96-5 6.96h16l-6-9zm8-5v16h-20v-16h20zm2-2h-24v20h24v-20zm-20 6c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.896 2-2 2s-2-.895-2-2z" />
                        </svg>
                        <span>Bild</span>
                    </div>
                </label>
                <input
                    class=" hidden block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="file_input2" type="file" @change="uploadFileRight">



                <!-- <div class="element" @click="addLinkRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M7.092 5.099l1.439-.205-.439-3.083-1.44.204.44 3.084zm-2.211 3.445l.205-1.44-3.084-.44-.205 1.441 3.084.439zm-.494-5.163l-1.03 1.03 2.203 2.204 1.029-1.03-2.202-2.204zm12.541 15.565l-1.439.205.438 3.083 1.441-.204-.44-3.084zm2.21-3.446l-.206 1.441 3.085.439.205-1.44-3.084-.44zm.495 5.163l1.028-1.029-2.204-2.204-1.027 1.03 2.203 2.203zm2.64-18.904c2.344 2.346 2.344 6.149.001 8.494l-3.896 3.896-1.417-1.417 3.895-3.895c1.562-1.562 1.562-4.101 0-5.662-1.562-1.562-4.101-1.562-5.662 0l-3.894 3.895-1.416-1.416 3.895-3.895c2.344-2.345 6.147-2.345 8.494 0zm-8.138 16.631l-3.852 3.851c-2.344 2.347-6.146 2.345-8.494.001-2.344-2.346-2.345-6.149 0-8.494l3.854-3.851 1.414 1.415-3.851 3.851c-1.562 1.562-1.562 4.102-.001 5.663 1.563 1.561 4.102 1.561 5.664-.001l3.85-3.851 1.416 1.416z" />
                    </svg>
                    <span>Link</span>
                </div> -->
            </div>
        </div>
    </div>

    <div class="edit-popup" v-if="showEditPopup">
        <div class="edit-container">
            <span>Edit text</span>
            <div>
                <input v-model="tempVar" type="text" id="tempVar"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="text" required />
            </div>
            <div class="buttons">
                <div class="red-btn" @click="submitEditedText">Submit</div>
                <div class="red-btn" @click="cancelEdit">Cancel</div>
            </div>
        </div>
    </div>

    <div class="edit-popup" v-if="showEditPopupRight">
        <div class="edit-container">
            <span>Edit text</span>
            <div>
                <input v-model="tempVarRight" type="text" id="tempVar"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="text" required />
            </div>
            <div class="buttons">
                <div class="red-btn" @click="submitEditedTextRight">Submit</div>
                <div class="red-btn" @click="cancelEditRight">Cancel</div>
            </div>
        </div>
    </div>

    <div class="link-popup" v-show="showLinkPopup">
        <div class="link-container">
            <span>Edit link</span>
            <div>
                <input v-model="tempLinkText" type="text" id="tempVar"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Text" required />
            </div>

            <div>
                <input v-model="tempLinkPath" type="text" id="tempVar"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Path (/example)" required />
            </div>
            <div class="buttons">
                <div class="red-btn" @click="sendLink">Submit</div>
                <div class="red-btn" @click="closeLinkPopup">Cancel</div>
            </div>
        </div>
    </div>


    <!-- <lastNews v-if="componentsList.includes('lastNews')" />
    <div class="edit delete" @click="deletePop(index)">
        <svg width="20" height="20" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
            stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                fill-rule="nonzero" />
        </svg>
    </div>
</div>
<chronikPopup v-if="componentsList.includes('chronikPopup')" />
<compWeitere v-if="componentsList.includes('compWeitere')" />
<ehrenamtComponent v-if="componentsList.includes('ehrenamtComponent')" />
<graphicComponent v-if="componentsList.includes('graphicComponent')" />
<kontaktComponent v-if="componentsList.includes('kontaktComponent')" />
<mitgliederComponent v-if="componentsList.includes('mitgliederComponent')" />
<oktoberFest v-if="componentsList.includes('oktoberFest')" />
<ortsteilturnierPopup v-if="componentsList.includes('ortsteilturnierPopup')" />
<mitgliederComponent v-if="componentsList.includes('mitgliederComponent')" />
<pizzaComponent v-if="componentsList.includes('pizzaComponent')" />
<presseComp v-if="componentsList.includes('presseComp')" />
<spendenkontoLayout v-if="componentsList.includes('spendenkontoLayout')" />
<sponsorighComp v-if="componentsList.includes('sponsorighComp')" />
<stammtischComponent v-if="componentsList.includes('stammtischComponent')" />
<tournierVatertagsturnier v-if="componentsList.includes('tournierVatertagsturnier')" />
<weindorfPopup v-if="componentsList.includes('weindorfPopup')" /> -->

    <div class="elements-popup" v-show="showPopupEditor">
        <div class="popup-container">
            <span class="red-text">Choose element</span>
            <div class="elements-box">

                <div class="element">
                    <div class="element" @click="addParagraph">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                        </svg>
                        <span>Text</span>
                    </div>
                </div>

                <div class="element" @click="addTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                    </svg>
                    <span>Überschrift
                        schwarz</span>
                </div>

                <div class="element" @click="addRedTitle">
                    <svg fill="#c36" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                    </svg>
                    <span>Überschrift rot</span>
                </div>

                <label for="file_input">
                    <div class="element" @click="addImage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M14 9l-2.519 4-2.481-1.96-5 6.96h16l-6-9zm8-5v16h-20v-16h20zm2-2h-24v20h24v-20zm-20 6c0-1.104.896-2 2-2s2 .896 2 2c0 1.105-.896 2-2 2s-2-.895-2-2z" />
                        </svg>
                        <span>Bild</span>
                    </div>
                </label>
                <input
                    class=" hidden block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="file_input" type="file" @change="uploadFile">



                <div class="element" @click="addLink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M7.092 5.099l1.439-.205-.439-3.083-1.44.204.44 3.084zm-2.211 3.445l.205-1.44-3.084-.44-.205 1.441 3.084.439zm-.494-5.163l-1.03 1.03 2.203 2.204 1.029-1.03-2.202-2.204zm12.541 15.565l-1.439.205.438 3.083 1.441-.204-.44-3.084zm2.21-3.446l-.206 1.441 3.085.439.205-1.44-3.084-.44zm.495 5.163l1.028-1.029-2.204-2.204-1.027 1.03 2.203 2.203zm2.64-18.904c2.344 2.346 2.344 6.149.001 8.494l-3.896 3.896-1.417-1.417 3.895-3.895c1.562-1.562 1.562-4.101 0-5.662-1.562-1.562-4.101-1.562-5.662 0l-3.894 3.895-1.416-1.416 3.895-3.895c2.344-2.345 6.147-2.345 8.494 0zm-8.138 16.631l-3.852 3.851c-2.344 2.347-6.146 2.345-8.494.001-2.344-2.346-2.345-6.149 0-8.494l3.854-3.851 1.414 1.415-3.851 3.851c-1.562 1.562-1.562 4.102-.001 5.663 1.563 1.561 4.102 1.561 5.664-.001l3.85-3.851 1.416 1.416z" />
                    </svg>
                    <span>Link</span>
                </div>

            </div>
        </div>
    </div>

    <div v-show="successPush"
        class=" push p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert">
        <span class="font-medium">Success!</span>The page has been added
    </div>
    <div v-show="failPush"
        class="push p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span class="font-medium">Ooops..</span> Something went wrong
    </div>

    <div class="popup" v-if="addTitleInSectionVar">
        <div class="popup-container">
            <div class="header-text">Add title</div>
            <input type="text" v-model="addTitleInSectionTitleVar">
            <div class="buttons">
                <button @click="addTitleInPopup">Add</button>
                <button @click="cancelAddTitleInPopup">Cancel</button>
            </div>

        </div>
    </div>

    <cropImgComponent v-if="showCropImg" @cancel-crop="showCropImg = false" :path="tempImgPath"
        @cropped-image-uploaded="handleCroppedImageUploaded" />

</template>

<script>
import dashboardHeader from '../components/dashboardHeader.vue'
import sideBar from '../components/sideBar.vue'
import draggable from 'vuedraggable';
import axios from 'axios'
import lastNews from '../components/vareinPage/lastNews.vue';
import chronikPopup from '../components/vareinPage/chronikPopup.vue';
import compHinweis from '../components/vareinPage/compHinweis.vue';
import compWeitere from '../components/vareinPage/compWeitere.vue';
import ehrenamtComponent from '../components/vareinPage/ehrenamtComponent.vue';
import graphicComponent from '../components/vareinPage/graphicComponent.vue';
import kontaktComponent from '../components/vareinPage/kontaktComponent.vue';
import mitgliederComponent from '../components/vareinPage/mitgliederComponent.vue';
import oktoberFest from '../components/vareinPage/oktoberFest.vue';
import ortsteilturnierPopup from '../components/vareinPage/ortsteilturnierPopup.vue';
import pizzaComponent from '../components/vareinPage/pizzaComponent.vue';
import presseComp from '../components/vareinPage/presseComp.vue';
import spendenkontoLayout from '../components/vareinPage/spendenkontoLayout.vue';
import sponsorighComp from '../components/vareinPage/sponsorighComp.vue';
import stammtischComponent from '../components/vareinPage/stammtischComponent.vue';
import tournierVatertagsturnier from '../components/vareinPage/tournierVatertagsturnier.vue';
import weindorfPopup from '../components/vareinPage/weindorfPopup.vue';
import cropImgComponent from '../components/cropImgComponent.vue';




export default {
    components: {
        dashboardHeader,
        sideBar,
        draggable,

        lastNews,
        chronikPopup,
        compHinweis,
        compWeitere,
        ehrenamtComponent,
        graphicComponent,
        kontaktComponent,
        oktoberFest,
        ortsteilturnierPopup,
        mitgliederComponent,
        pizzaComponent,
        presseComp,
        spendenkontoLayout,
        sponsorighComp,
        stammtischComponent,
        tournierVatertagsturnier,
        weindorfPopup,
        cropImgComponent,

    },


    data() {
        return {
            title: '',
            content: {
                leftside: [],
                rightside: [],
            },
            showEditor: false,
            dragData: {
                isDragging: false,
                draggedIndex: -1,
                startPosition: { x: 0, y: 0 },
                offset: { x: 0, y: 0 },
            },

            tempVar: '',
            tempIndex: '',
            showEditPopup: false,

            tempLinkText: '',
            tempLinkPath: '',
            showLinkPopup: false,

            showPopupEditor: false,

            componentsList: [

            ],

            url: '',
            title: '',
            category: '',
            showAddPop: false,
            successPush: false,
            failPush: false,

            showCropImg: false,
            tempImgPath: false,


            // RightSection Var
            addTitleInSectionVar: false,
            addTitleInSectionIndex: null,
            addTitleInSectionTitleVar: '',

            // Right menu
            showEditorRight: false,
            addItemInSectionIndex: null,

            showEditPopupRight: false,
            tempVarRight: '',
            tempIndexContentRight: null,
            tempSectionIndexRight: null


        }
    },



    methods: {

        submitEditedTextRight() {
            this.content.rightside[this.tempSectionIndexRight][this.tempIndexContentRight].text = this.tempVarRight;
            this.showEditPopupRight = false;
        },

        cancelEditRight() {
            this.tempVarRight = '';
            this.showEditPopupRight = false;
        },

        cancelEdit() {
            this.showCropImg = false;
            this.tempImgPath = ''
        },

        addParagraph() {
            console.log(this.content)
            this.content.leftside.push({
                text: 'Your paragraph',
                tag: 'paragraph',
                class: 'paragraph'
            });
            this.showEditor = false

            this.$nextTick(() => {
                // Делаем пересчет стилей после добавления элементов
                this.$forceUpdate();
            });
        },
        addParagraphRight(index) {
            console.log(this.content)
            this.content.rightside[this.addItemInSectionIndex].push({
                text: 'Your paragraph',
                tag: 'paragraph',
                class: 'paragraph'
            });
            this.showEditorRight = false

            this.$nextTick(() => {
                this.$forceUpdate();
            });
        },

        updateText(index) {
            const updatedText = this.$refs.editableContent[index].innerText;
            this.content.leftside[index].text = updatedText;
            this.$forceUpdate(); // Принудительное обновление компонента
        },
        getStyles(section) {
            return this.styles[section.class] || {}; // Возвращаем стили в зависимости от класса
        },

        addTitle() {
            console.log(this.content)
            this.content.leftside.push({
                text: 'Your title',
                tag: 'title',
                class: 'dark-title'
            });
            this.showEditor = false
        },

        addTitleRight() {
            console.log(this.content)
            this.content.rightside[this.addItemInSectionIndex].push({
                text: 'Your title',
                tag: 'title',
                class: 'dark-title'
            });
            this.showEditorRight = false
        },

        addTitleInSection(index) {
            console.log(index)
            this.addTitleInSectionVar = true;
            this.addTitleInSectionIndex = index;
        },

        createRightEmptySection() {
            let section = [];
            this.content.rightside.push(section)
            console.log(this.content)
        },

        addTitleInPopup() {

            this.content.rightside[this.addTitleInSectionIndex].push({ 'title': this.addTitleInSectionTitleVar });
            // this.content.rightside[this.addTitleInSectionIndex].title = this.addTitleInSectionTitleVar;
            this.addTitleInSectionVar = false;
            this.addTitleInSectionTitleVar = '';
        },



        cancelAddTitleInPopup() {
            this.addTitleInSectionVar = false;
            this.addTitleInSectionTitleVar = '';
        },



        addRedTitle() {
            console.log(this.content)
            this.content.leftside.push({
                text: 'Your title',
                tag: 'title',
                class: 'red-title'
            });
            this.showEditorRight = false
        },

        addRedTitleRight() {
            console.log(this.content)
            this.content.rightside[this.addItemInSectionIndex].push({
                text: 'Your title',
                tag: 'title',
                class: 'red-title'
            });
            this.showEditorRight = false
        },

        startDrag(index) {
            this.dragData.isDragging = true;
            this.dragData.draggedIndex = index;
            this.dragData.startPosition.x = event.clientX;
            this.dragData.startPosition.y = event.clientY;
        },
        handleDrag(event) {
            if (!this.dragData.isDragging) return;

            this.dragData.offset.x = event.clientX - this.dragData.startPosition.x;
            this.dragData.offset.y = event.clientY - this.dragData.startPosition.y;
        },
        stopDrag() {
            if (!this.dragData.isDragging) return;

            this.dragData.isDragging = false;
            this.dragData.draggedIndex = -1;
            this.dragData.startPosition.x = 0;
            this.dragData.startPosition.y = 0;
            this.dragData.offset.x = 0;
            this.dragData.offset.y = 0;
        },

        editObj(index) {
            this.tempIndex = index;
            this.tempVar = this.content.leftside[index].text;
            this.showEditPopup = true;
        },

        editObjRight(index, contentIndex) {
            this.tempIndexContentRight = contentIndex;
            this.tempSectionIndexRight = index;
            this.showEditPopupRight = true;
            this.tempVarRight = this.content.rightside[this.tempSectionIndexRight][this.tempIndexContentRight].text;
            console.log(this.tempIndexContentRight, this.tempSectionIndexRight)
        },

        cancelEdit() {
            this.tempIndex = '',
                this.tempVar = '',
                this.showEditPopup = false
        },

        deleteContent(index) {
            this.content.leftside.splice(index, 1)
        },

        deleteContentRight(index, contentIndex) {
            this.content.rightside[index].splice(contentIndex, 1)
        },

        submitEditedText() {
            this.content.leftside[this.tempIndex].text = this.tempVar;
            this.tempIndex = '',
                this.tempVar = '',
                this.showEditPopup = false
            console.log(this.content.leftside)
        },

        uploadFile(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'news'; // Замените на нужную папку (players, gallery, news)

            axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                this.content.leftside.push({
                    imgPath: response.data.filePath,
                    tag: 'img',
                    class: 'main-img'
                });
                this.showEditor = false
                console.log(this.content.leftside)
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },

        uploadFileRight(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const folder = 'news'; // Замените на нужную папку (players, gallery, news)

            axios.post(`http://localhost:3000/api/${folder}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'

                    
                }
            }).then(response => {
                // this.content.rightside[this.addItemInSectionIndex].push({
                //     imgPath: response.data.filePath,
                //     tag: 'img',
                //     class: 'main-img'
                // });
                this.tempImgPath = response.data.filePath
                this.showCropImg = true
                this.showEditorRight = false
            }).catch(error => {
                console.error('Error uploading file:', error);
            });
        },

        handleCroppedImageUploaded(savedCroppedImagePath) {
            console.log('Обрезанное изображение успешно загружено:', savedCroppedImagePath);

            this.content.rightside[this.addItemInSectionIndex].push({
                imgPath: savedCroppedImagePath,
                tag: 'img',
                class: 'main-img'
            });
            this.showCropImg = false;
        },

        addLink() {
            this.showEditor = false,
                this.showLinkPopup = true;
        },

        closeLinkPopup() {
            this.showLinkPopup = false,
                this.tempLinkPath = '',
                this.tempLinkText = '';
        },

        sendLink() {
            console.log(this.tempLinkPath, this.tempLinkText)
            console.log(this.content)
            this.content.leftside.push({
                text: this.tempLinkPath,
                tag: 'link',
                to: this.tempLinkText,
                class: 'link'
            });
            this.showEditor = false;
        },

        deletePop(index) {
            // Удаляем элемент из массива по индексу
            this.componentsList.splice(index, 1);
        },

        deleteSctionFromRight(index) {
            this.content.rightside.splice(index, 1)
        },


        sendData() {
            axios.post('http://localhost:3000/api/pages/add', {
                url: this.url,
                category: this.category,
                title: this.title,
                htmlContent: this.content,
                author: this.$store.state.userData._id
            })
                .then((response) => {
                    this.successPush = true;
                    setTimeout(() => {
                        this.successPush = false
                    }, 3000)
                })
                .catch((error) => {
                    this.failPush = true;
                    setTimeout(() => {
                        this.failPush = false
                    }, 3000)
                })
        },


        deleteRightPopup(str) {
            let index = this.content.rightside.indexOf(str);
            if (index !== -1) {
                this.content.rightside.splice(index, 1);
            }
        }



    }
}
</script>

<style scoped>
@import url(../assets/styles/addVereinPage.css);

.content>>>.dark-title {
    color: #003333;
    font-family: 'goboldI', sans-serif;
    margin-bottom: 20px;
    font-size: 20px;
    text-transform: uppercase;
}

.content>>>.paragrapth {
    font-family: 'Pr', sans-serif;
    margin-bottom: 20px;
}

.content>>>.red-title {
    color: #c36;
    font-family: 'goboldI', sans-serif;
    margin-bottom: 20px;
    font-size: 20px;
    text-transform: uppercase;
}

.draggable-item {
    cursor: grab;
    user-select: none;
    margin-bottom: 10px;
}

.draggable-item:active {
    cursor: grabbing;
}

.popup-right {
    position: relative;
}

.popup-right .delete {
    position: absolute;
    width: 30px;
    height: 30px;
    left: -5px;
    top: -5px;
    border-radius: 50px;
    opacity: 0;
    transition: .2s;
}

.popup-right:hover .delete {
    opacity: 0.5;
}

.popup-right .delete:hover {
    cursor: pointer;
    opacity: 1;
    background-color: #c36;
    fill: #fff
}
</style>