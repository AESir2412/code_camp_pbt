document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('select-file');
    const submitBtn = document.getElementById('submit-btn');
    const files = document.getElementById('files');
    const totalFiles = document.getElementById('total-files');

    fileInput.addEventListener('change', async (event) => {
        const selectedFiles = event.target.files;
        totalFiles.innerText = selectedFiles.length;
        files.innerHTML = '';

        if (selectedFiles.length > 0) {
            submitBtn.removeAttribute('disabled');

            for (const file of selectedFiles) {
                const reader = new FileReader();

                reader.readAsDataURL(file);

                reader.addEventListener('load', async () => {
                    const pdfData = reader.result.split(',')[1]; // Lấy phần dữ liệu base64 sau dấu phẩy
                    const pdfBuffer = Uint8Array.from(atob(pdfData), c => c.charCodeAt(0)); // Chuyển base64 thành Uint8Array
                    const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise; // Đọc file PDF

                    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                        const page = await pdf.getPage(pageNum);
                        const scale = 1.5;
                        const viewport = page.getViewport({ scale });
                        const canvas = document.createElement('canvas');
                        const canvasContext = canvas.getContext('2d');

                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        const renderContext = {
                            canvasContext,
                            viewport,
                        };

                        const renderTask = page.render(renderContext);
                        await renderTask.promise;

                        files.innerHTML += `
                            <div class="pdf_page">
                                <h4>Page ${pageNum}</h4>
                                <img src="${canvas.toDataURL()}" alt="Page ${pageNum}">
                            </div>
                        `;
                    }
                });
            }
        } else {
            submitBtn.setAttribute('disabled', true);
        }
    });
});
