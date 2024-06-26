function updateDaypass(e) {
    const deligateNameToggle = document.getElementById("toggle-daypass");
    const deligateName = document.getElementById("daypass");
    const FormfontWeight = document.getElementById(
        "floating_daypass_font_weight"
    );
    const Formfontsize = document.getElementById("floating_daypass_font_size");

    const fontSize = window.getComputedStyle(deligateName).fontSize;
    const fontWeight = window.getComputedStyle(deligateName).fontWeight;

    const fontFamilySelect = document.getElementById("font-family-daypass");
    const fontFamily = fontFamilySelect.value;
    const textAlignSelect = document.getElementById("text-align-daypass");
    const textAlign = textAlignSelect.value;

    const colorInput = document.getElementById("favcolor-daypass");
    const textMaxWidth = document.getElementById("floating_daypass_max_width");

    e.preventDefault();
    closeModal("daypass-modal");

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
        "decrement-button-day-pass"
    );
    const incrementButton = document.getElementById(
        "increment-button-day-pass"
    );
    const quantityInputId = document.getElementById("quantity-input-day-pass");

    const cloneContainerId = document.getElementById("draggable-container");
    const elementToCloneId = document.getElementById("daypass");

    cloneElements(quantityInputId, cloneContainerId, elementToCloneId);
}
