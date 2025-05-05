const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

// Highlight drag events
["dragenter", "dragover"].forEach(event => {
    dropZone.addEventListener(event, e => {
        /**** codar */
    });
});
["dragleave", "drop"].forEach(event => {
    dropZone.addEventListener(event, e => {
        /**** codar */
    });
});

// Drop to input
dropZone.addEventListener("drop", e => {
    /**** codar */
});

// Click to select
dropZone.addEventListener("click", () => fileInput.click());

// Auto upload
fileInput.addEventListener("change", () => {
    /**** codar */
});

function showStatus(message, type = "success") {
    const box = document.getElementById("uploadStatus");
    box.textContent = message;
    box.className = type;
    setTimeout(() => {
        box.className = "hidden";
    }, 4000);
}

function handleUpload(file) {
    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    const progress = document.getElementById("uploadProgress");
    const bar = document.getElementById("uploadBar");

    xhr.open("POST", "/aula-09/upload");

    // Mostrar progresso
    xhr.upload.onprogress = (e) => {
        /**** codar */
    };

    // Fim do upload
    xhr.onload = () => {
        progress.style.display = "none";
        bar.style.width = "0%";

        if (xhr.status === 200) {
            showStatus("✅ Upload concluído com sucesso!", "success");
            fetchFileList();
        } else {
            showStatus("❌ Erro no upload.", "error");
        }
    };

    xhr.onerror = () => {
        /**** codar */
    };

    progress.style.display = "block";
    xhr.send(formData);
}


async function fetchFileList() {
    /**** codar */
}

fetchFileList();
