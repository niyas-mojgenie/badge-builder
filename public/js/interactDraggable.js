// Target the draggable elements within the container
interact(".draggable").draggable({
    // Enable inertial throwing
    inertia: true,

    // Restrict movement to the parent element
    restrict: {
        restriction: "#draggable-container",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
    },

    // Enable autoScroll
    autoScroll: true,

    // Call this function on every dragmove event
    onmove: dragMoveListener,
});

function dragMoveListener(event) {
    var target = event.target;
    // Keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // Translate the element
    target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

    // Update the position attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
}
