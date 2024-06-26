function updateDesignation(e) {
    const deligateNameToggle = document.getElementById("toggle-designation");
    const deligateName = document.getElementById("designation");
    const FormfontWeight = document.getElementById(
        "floating_designation_font_weight"
    );
    const Formfontsize = document.getElementById(
        "floating_designation_font_size"
    );

    const fontSize = window.getComputedStyle(deligateName).fontSize;
    const fontWeight = window.getComputedStyle(deligateName).fontWeight;

    const fontFamilySelect = document.getElementById("font-family-designation");
    const fontFamily = fontFamilySelect.value;
    const textAlignSelect = document.getElementById("text-align-designation");
    const textAlign = textAlignSelect.value;

    const colorInput = document.getElementById("favcolor-designation");
    const textMaxWidth = document.getElementById(
        "floating_designation_max_width"
    );

    e.preventDefault();
    closeModal("designation-modal");

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

    const decrementButton = document.getElementById(
        "decrement-button-designation"
    );
    const incrementButton = document.getElementById(
        "increment-button-designation"
    );
    const quantityInputId = document.getElementById(
        "quantity-input-designation"
    );

    const cloneContainerId = document.getElementById("draggable-container");
    const elementToCloneId = document.getElementById("designation");

    cloneElements(quantityInputId, cloneContainerId, elementToCloneId);
}
