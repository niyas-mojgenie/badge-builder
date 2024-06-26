function updateDelegateName(e) {
    const deligateNameToggle = document.getElementById("toggle-delegate-name");
    const deligateName = document.getElementById("delegate-name");
    const FormfontWeight = document.getElementById("floating_font_weight");
    const Formfontsize = document.getElementById("floating_font_size");

    const fontSize = window.getComputedStyle(deligateName).fontSize;
    const fontWeight = window.getComputedStyle(deligateName).fontWeight;

    const fontFamilySelect = document.getElementById(
        "font-family-delegate-name"
    );
    const fontFamily = fontFamilySelect.value;
    const textAlignSelect = document.getElementById("text-align-deligate");
    const textAlign = textAlignSelect.value;

    const colorInput = document.getElementById("favcolor");
    const textMaxWidth = document.getElementById("floating_max_width");

    e.preventDefault();
    closeModal("deligateName-modal");

    colorInput.addEventListener("input", function (event) {
        const selectedColor = event.target.value;
        console.log("Selected color:", selectedColor);
        colorInput.value = selectedColor;
        // You can perform any additional actions here if needed
    });

    if (deligateNameToggle.checked) {
        console.log("checked");
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

    const decrementButton = document.getElementById("decrement-button");
    const incrementButton = document.getElementById("increment-button");
    const quantityInputId = document.getElementById("quantity-input");

    const cloneContainerId = document.getElementById("draggable-container");
    const elementToCloneId = document.getElementById("delegate-name");

    cloneElements(quantityInputId, cloneContainerId, elementToCloneId);
}
