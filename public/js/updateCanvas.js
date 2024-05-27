function updateCanvas(e) {
    const widthInput = document.getElementById("floating_width");
    const heightInput = document.getElementById("floating_height");
    const fontFamilySelect = document.getElementById("font-family-select");
    const fontFamily = fontFamilySelect.value;
    const canvasBg = document.getElementById("canvas-bg");
    const canvas = document.getElementById("draggable-container");

    const width = parseFloat(widthInput.value); // Convert input value to number
    const height = parseFloat(heightInput.value); // Convert input value to number

    e.preventDefault();
    closeModal("authentication-modal");

    document.getElementById("add-canvas").classList.add("hidden");
    document.getElementById("draggable-container").classList.remove("hidden");

    // Display submitted image in a div after form submit
    if (previewImage.src && !previewImage.classList.contains("hidden")) {
        const submittedImageUrl = previewImage.src;
        canvas.style.backgroundImage = `url('${submittedImageUrl}')`;
    }
    // setting font family
    if (fontFamily) {
        canvas.style.fontFamily = fontFamily;
    }

    // Set the width and height of the canvas div
    if (!isNaN(width) && !isNaN(height)) {
        canvas.style.width = `${width}mm`;
        canvas.style.height = `${height}mm`;
    } else {
        // Handle invalid input (if needed)
        console.error("Invalid width or height entered");
    }
    return false;
}
