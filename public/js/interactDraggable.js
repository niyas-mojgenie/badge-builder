interact(".draggable-rotatable")
    .draggable({
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
    })
    .gesturable({
        onmove: rotateMoveListener,
    });

function dragMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
    moveElement(target, x, y);
}

function rotateMoveListener(event) {
    var target = event.target;
    var currentRotation = parseFloat(target.getAttribute("data-rotation")) || 0;
    var newRotation = currentRotation + event.da;
    rotateElement(target, newRotation);
}

function rotateElement(target, rotation) {
    var x = target.getAttribute("data-x") || 0;
    var y = target.getAttribute("data-y") || 0;

    target.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    target.setAttribute("data-rotation", rotation);
}

function moveElement(target, x, y) {
    var rotation = target.getAttribute("data-rotation") || 0;
    target.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
}
