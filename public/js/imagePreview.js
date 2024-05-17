const fileInput = document.getElementById("dropzone-file");
const imagePreview = document.getElementById("image-preview");
const previewImage = document.getElementById("preview-image");
const removeOverlay = document.getElementById("remove-overlay");
const uploadContent = document.getElementById("upload-content");

// Function to handle file selection
fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();

        // Show image preview
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewImage.classList.remove("hidden");
            uploadContent.classList.add("hidden");
            imagePreview.classList.remove("hidden");
        };

        reader.readAsDataURL(file);
    }
});

// Function to handle image removal on overlay click
removeOverlay.addEventListener("click", () => {
    previewImage.src = "#";
    previewImage.classList.add("hidden");
    imagePreview.classList.add("hidden");
    uploadContent.classList.remove("hidden");
    fileInput.value = ""; // Reset file input
});

// Show remove overlay on hover
imagePreview.addEventListener("mouseover", () => {
    removeOverlay.classList.remove("hidden");
});

imagePreview.addEventListener("mouseout", () => {
    removeOverlay.classList.add("hidden");
});
