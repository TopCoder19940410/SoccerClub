<template>
    <div class="popup">
        <div class="popup-container">
            <cropper :src="image" @change="change" ref="cropper"></cropper>
            <div class="buttons">
                <button @click="saveAndUploadCroppedImage">Save</button>
                <button @click="cancelCrop">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import axios from 'axios'

export default {
    components: {
        Cropper,
    },

    props: {
        path: String,
    },
    data() {
        return {
            image: '',
        };
    },

    mounted() {
        this.image = this.path;
    },
    methods: {
        change({ coordinates, canvas }) {
            console.log(coordinates, canvas);
        },

        saveAndUploadCroppedImage() {
            const { canvas } = this.$refs.cropper.getResult();

            if (canvas) {
                const form = new FormData();
                canvas.toBlob((blob) => {
                    const uniqueFileName = `cropped_image_${Date.now()}.png`;
                    form.append('file', blob, uniqueFileName);
                    this.uploadImage(form);
                }, 'image/jpeg');
            }
        },

        async uploadImage(formData) {
            try {
                const folder = 'videos';
                const uploadUrl = `http://localhost:3000/api/${folder}/upload`;

                const uploadResponse = await axios.post(uploadUrl, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const savedCroppedImagePath = uploadResponse.data.filePath;
                console.log('Обрезанное изображение успешно сохранено на сервере:', savedCroppedImagePath);
                this.$emit('cropped-image-uploaded', savedCroppedImagePath);
            } catch (error) {
                console.error('Ошибка при сохранении обрезанного изображения на сервере:', error);
            }
        },

        cancelCrop() {
            this.$emit('cancel-crop');
        }
    },
};
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.popup-container {
    padding: 40px;
    background: #fff;
    width: 800px;
    overflow: hidden;
    border-radius: 8px;
}

.buttons {
    max-width: 600px;
    display: flex;
    margin: 30px auto 0 auto;
    justify-content: space-between;
}

.buttons button {
    font-family: 'goboldI', sans-serif;
    color: #fff;
    background: #cc0033;
    width: 140px;
    height: 40px;
    border-radius: 8px;
    text-transform: uppercase;
    transition: 0.2s;
}

button:hover {
    background-color: #830223;
}
</style>