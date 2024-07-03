function updateCategory(e) {
    const deligateNameToggle = document.getElementById("toggle-category");
    const deligateName = document.getElementById("category");
    const FormfontWeight = document.getElementById(
        "floating_category_font_weight"
    );
    const Formfontsize = document.getElementById("floating_category_font_size");
    const rotate = document.getElementById("floating_rotate_category");
    const rotateValue = rotate.value;

    const fontSize = window.getComputedStyle(deligateName).fontSize;
    const fontWeight = window.getComputedStyle(deligateName).fontWeight;

    const fontFamilySelect = document.getElementById("font-family-category");
    const fontFamily = fontFamilySelect.value;
    const textAlignSelect = document.getElementById("text-align-category");
    const textAlign = textAlignSelect.value;

    const colorInput = document.getElementById("favcolor-category");
    const textMaxWidth = document.getElementById("floating_category_max_width");

    e.preventDefault();
    closeModal("category-modal");

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

    const decrementButton = document.getElementById("decrement-button-cat");
    const incrementButton = document.getElementById("increment-button-cat");
    const quantityInputId = document.getElementById("quantity-input-cat");

    const cloneContainerId = document.getElementById("draggable-container");
    const elementToCloneId = document.getElementById("category");

    cloneElements(quantityInputId, cloneContainerId, elementToCloneId);
    rotateElement(deligateName, rotateValue);
}
