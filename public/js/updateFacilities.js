function updateFacilities(e) {
    const deligateNameToggle = document.getElementById("toggle-facilities");
    const deligateName = document.getElementById("facilities");
    const FormfontWeight = document.getElementById(
        "floating_facilities_font_weight"
    );
    const Formfontsize = document.getElementById(
        "floating_facilities_font_size"
    );

    const fontSize = window.getComputedStyle(deligateName).fontSize;
    const fontWeight = window.getComputedStyle(deligateName).fontWeight;
    const rotate = document.getElementById("floating_rotate_facilities");
    const rotateValue = rotate.value;

    const fontFamilySelect = document.getElementById("font-family-facilities");
    const fontFamily = fontFamilySelect.value;
    const textAlignSelect = document.getElementById("text-align-facilities");
    const textAlign = textAlignSelect.value;

    const colorInput = document.getElementById("favcolor-facilities");
    const textMaxWidth = document.getElementById(
        "floating_facilities_max_width"
    );

    e.preventDefault();
    closeModal("facilities-modal");

    colorInput.addEventListener("input", function (event) {
        const selectedColor = event.target.value;

        colorInput.value = selectedColor;
        // You can perform any additional actions here if needed
    });

    if (deligateNameToggle.checked) {
        deligateName.style.display = "block";
        deligateName.style.fontSize = Formfontsize.value + "px";
        deligateName.style.fontWeight = FormfontWeight.value;
        deligateName.style.color = colorInput.value;
        deligateName.style.maxWidth = `${textMaxWidth.value}px`;
        deligateName.style.textAlign = textAlign;
        deligateName.style.fontFamily = fontFamily;
    } else {
        deligateName.style.display = "none";
    }

    // counter

    const decrementButton = document.getElementById(
        "decrement-button-facilities"
    );
    const incrementButton = document.getElementById(
        "increment-button-facilities"
    );
    const quantityInputId = document.getElementById(
        "quantity-input-facilities"
    );

    const cloneContainerId = document.getElementById("draggable-container");
    const elementToCloneId = document.getElementById("facilities");

    cloneElements(quantityInputId, cloneContainerId, elementToCloneId);
    rotateElement(deligateName, rotateValue);
}
