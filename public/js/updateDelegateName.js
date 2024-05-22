function updateDelegateName(e) {
    const deligateNameToggle = document.getElementById("toggle-delegate-name");
    const deligateName = document.getElementById("delegate-name");
    const FormfontWeight = document.getElementById("floating_font_weight");
    const Formfontsize = document.getElementById("floating_font_size");

    const fontSize = window.getComputedStyle(deligateName).fontSize;
    const fontWeight = window.getComputedStyle(deligateName).fontWeight;

    e.preventDefault();
    closeModal("deligateName-modal");

    if (deligateNameToggle.checked) {
        console.log("checked");
        deligateName.style.display = "block";
        deligateName.style.fontSize = Formfontsize.value + "px";
        deligateName.style.fontWeight = FormfontWeight.value;
    } else {
        deligateName.style.display = "none";
    }
}
