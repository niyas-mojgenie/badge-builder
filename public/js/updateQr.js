function updateQr(e) {
    const qrToggle = document.getElementById("toggle-qr");
    const qr = document.getElementById("qr-image");
    const widthInput = document.getElementById("floating_qr_width");
    const heightInput = document.getElementById("floating_qr_height");
    const width = parseFloat(widthInput.value); // Convert input value to number
    const height = parseFloat(heightInput.value); // Convert input value to number

    e.preventDefault();
    closeModal("qr-modal");

    if (qrToggle.checked) {
        console.log("checked");
        qr.style.display = "block";
        // Set the width and height of the canvas div
        if (!isNaN(width) && !isNaN(height)) {
            0;
            qr.style.width = `${width}px`;
            qr.style.height = `${height}px`;
        } else {
            // Handle invalid input (if needed)
            console.error("Invalid width or height entered");
        }
    } else {
        qr.style.display = "none";
    }
}
