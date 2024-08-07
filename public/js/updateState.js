function updateState(e) {
    const deligateNameToggle = document.getElementById("toggle-state");
    const deligateName = document.getElementById("state");
    const FormfontWeight = document.getElementById(
        "floating_state_font_weight"
    );
    const Formfontsize = document.getElementById("floating_state_font_size");

    const fontSize = window.getComputedStyle(deligateName).fontSize;
    const fontWeight = window.getComputedStyle(deligateName).fontWeight;
    const rotate = document.getElementById("floating_rotate_state");
    const rotateValue = rotate.value;

    const fontFamilySelect = document.getElementById("font-family-state");
    const fontFamily = fontFamilySelect.value;
    const textAlignSelect = document.getElementById("text-align-state");
    const textAlign = textAlignSelect.value;

    const colorInput = document.getElementById("favcolor-state");
    const textMaxWidth = document.getElementById("floating_state_max_width");

    e.preventDefault();
    closeModal("state-modal");

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

    const decrementButton = document.getElementById("decrement-button-state");
    const incrementButton = document.getElementById("increment-button-state");
    const quantityInputId = document.getElementById("quantity-input-state");

    const cloneContainerId = document.getElementById("draggable-container");
    const elementToCloneId = document.getElementById("state");

    cloneElements(quantityInputId, cloneContainerId, elementToCloneId);
    rotateElement(deligateName, rotateValue);
}
