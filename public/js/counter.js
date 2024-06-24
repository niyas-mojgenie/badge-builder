document.addEventListener("DOMContentLoaded", () => {
    const decrementButton = document.getElementById("decrement-button");
    const incrementButton = document.getElementById("increment-button");
    const quantityInput = document.getElementById("quantity-input");
    const min = parseInt(
        quantityInput.getAttribute("data-input-counter-min"),
        10
    );
    const max = parseInt(
        quantityInput.getAttribute("data-input-counter-max"),
        10
    );

    const updateValue = (increment) => {
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

    decrementButton.addEventListener("click", () => updateValue(false));
    incrementButton.addEventListener("click", () => updateValue(true));
});
