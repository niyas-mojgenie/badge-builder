const cloneElements = (quantityInput, cloneContainer, elementToClone) => {
    // Remove existing cloned elements (not the original element)
    const clonedElements =
        cloneContainer.getElementsByClassName("cloned-element");
    while (clonedElements.length > 0) {
        cloneContainer.removeChild(clonedElements[0]);
    }

    const value = parseInt(quantityInput.value, 10); // Get the value and parse it to an integer
    console.log(value);

    for (let i = 0; i < value; i++) {
        const clone = elementToClone.cloneNode(true);
        clone.classList.add("cloned-element"); // Add a class to identify cloned elements
        clone.removeAttribute("id"); // Remove id attribute to prevent duplicate IDs
        cloneContainer.appendChild(clone);
    }
};
