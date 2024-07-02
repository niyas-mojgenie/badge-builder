interact(".draggable-rotatable").draggable({
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
        }),
    ],
    autoScroll: true,
    listeners: {
        move: dragMoveListener,
    },
});

function dragMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
    moveElement(target, x, y);
}

function rotateElement(target, rotation) {
    // var currentRotation = parseFloat(target.getAttribute("data-rotation")) || 0;
    var newRotation = rotation;

    target.style.transform = `translate(${target.getAttribute(
        "data-x"
    )}px, ${target.getAttribute("data-y")}px) rotate(${newRotation}deg)`;
    target.setAttribute("data-rotation", newRotation);
}

function moveElement(target, x, y) {
    target.style.transform = `translate(${x}px, ${y}px) rotate(${
        target.getAttribute("data-rotation") || 0
    }deg)`;
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
}
