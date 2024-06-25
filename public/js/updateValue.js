const min = 0;
const max = 5;
const updateValue = (increment, id) => {
    const quantityInput = document.getElementById(id);
    let currentValue = parseInt(quantityInput.value, 10) || 0;
    if (increment) {
        if (currentValue < max) {
            quantityInput.value = currentValue + 1;
        }
    } else {
        if (currentValue > min) {
            quantityInput.value = currentValue - 1;
        }
    }
};
