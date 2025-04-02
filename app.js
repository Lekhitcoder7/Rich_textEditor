new Vue({
    el: '#app',
    data: {
        content: '',
        fontSize: '3',
    },
    methods: {
        formatText(command) {
            document.execCommand(command);
        },
        changeFontSize() {
            // Handle font size change
            document.execCommand('fontSize', false, this.fontSize);
        },
        changeColor(color) {
            // Change text color
            document.execCommand('foreColor', false, color);
        },
        uploadImage() {
            this.$refs.fileInput.click();
        },
        undo() {
            document.execCommand('undo');
        },
        redo() {
            document.execCommand('redo');
        },
        saveContent() {
            localStorage.setItem('content', this.content);
        },
        loadContent() {
            this.content = localStorage.getItem('content') || '';
        },
        updateContent(event) {
            this.content = event.target.innerHTML;
        },
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const img = document.createElement('img');
                    img.src = reader.result;
                    document.querySelector('.editor').appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        }
    }
});
