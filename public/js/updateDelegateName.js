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

    const colorInput = document.getElementById("favcolor");

    e.preventDefault();
    closeModal("deligateName-modal");

    colorInput.addEventListener("input", function (event) {
        const selectedColor = event.target.value;
        console.log("Selected color:", selectedColor);
        colorInput.value = selectedColor;
        // You can perform any additional actions here if needed
    });

    // setting font family
    if (fontFamily) {
        deligateName.style.fontFamily = fontFamily;
    }

    if (deligateNameToggle.checked) {
        console.log("checked");
        deligateName.style.display = "block";
        deligateName.style.fontSize = Formfontsize.value + "px";
        deligateName.style.fontWeight = FormfontWeight.value;
        deligateName.style.color = colorInput.value;
    } else {
        deligateName.style.display = "none";
    }
}
