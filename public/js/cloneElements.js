const cloneElements = (quantityInput, cloneContainer, elementToClone) => {
    // Create a unique class for the element to clone
    const uniqueClass = elementToClone.classList[0] + "-cloned";

    // Remove existing cloned elements of the same type
    const clonedElements = cloneContainer.getElementsByClassName(uniqueClass);
    while (clonedElements.length > 0) {
        cloneContainer.removeChild(clonedElements[0]);
    }

    // Get the value and parse it to an integer
    const value = parseInt(quantityInput.value, 10);
    console.log(value);

    // Create and append the specified number of clones
    for (let i = 0; i < value; i++) {
        const clone = elementToClone.cloneNode(true);
        clone.classList.add(uniqueClass); // Add a unique class to identify cloned elements
        clone.removeAttribute("id"); // Remove id attribute to prevent duplicate IDs
        cloneContainer.appendChild(clone);
    }
};
