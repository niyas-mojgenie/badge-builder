   function updateCanvas(e) {
            const widthInput = document.getElementById("floating_width");
            const heightInput = document.getElementById("floating_height");
            const modalBackdrop = document.querySelector(".bg-gray-900");
            const submittedImageContainer = document.getElementById("submitted-image-container");
            const submittedImage = document.getElementById("submitted-image");

            const width = parseFloat(widthInput.value); // Convert input value to number
            const height = parseFloat(heightInput.value); // Convert input value to number

            // Get the canvas div element
            const canvas = document.getElementById("draggable-container");

            e.preventDefault();
            document.getElementById("add-canvas").classList.add("hidden");
            document
                .getElementById("draggable-container")
                .classList.remove("hidden");
            document
                .getElementById("authentication-modal")
                .classList.toggle("hidden");
            modalBackdrop.remove();

            // Display submitted image in a div after form submit
            if (
                previewImage.src &&
                !previewImage.classList.contains("hidden")
            ) {
                const submittedImageUrl = previewImage.src;
                submittedImage.innerHTML = `<img id="canvas-bg"  src="${submittedImageUrl}" alt="Submitted Image" class="max-w-full h-auto resize-drag  ">`;
                submittedImageContainer.classList.remove("hidden");
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