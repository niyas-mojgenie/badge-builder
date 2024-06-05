function updateCategory(e) {
    const deligateNameToggle = document.getElementById("toggle-category");
    const deligateName = document.getElementById("category");
    const FormfontWeight = document.getElementById(
        "floating_reg_no_font_weight"
    );
    const Formfontsize = document.getElementById("floating_reg_no_font_size");

    const fontSize = window.getComputedStyle(deligateName).fontSize;
    const fontWeight = window.getComputedStyle(deligateName).fontWeight;

    const fontFamilySelect = document.getElementById("font-family-reg-no");
    const fontFamily = fontFamilySelect.value;
    const textAlignSelect = document.getElementById("text-align-reg-no");
    const textAlign = textAlignSelect.value;

    const colorInput = document.getElementById("favcolor-reg-no");
    const textMaxWidth = document.getElementById("floating_reg_no_max_width");

    e.preventDefault();
    closeModal("category-modal");

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
}
