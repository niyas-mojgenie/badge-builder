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
        listeners: {
            move: rotateMoveListener,
        },
    })
    .on("down", function (event) {
        // Track if the shift key is pressed
        event.target.setAttribute("data-shift", event.shiftKey);
    })
    .on("up", function (event) {
        // Reset the shift key tracker
        event.target.setAttribute("data-shift", false);
    });

function dragMoveListener(event) {
    var target = event.target;
    var shiftPressed = target.getAttribute("data-shift") === "true";
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    if (shiftPressed) {
        // Rotate instead of move if Shift key is pressed
        rotateElement(target, event.dx);
    } else {
        // Move normally
        moveElement(target, x, y);
    }
}

function rotateMoveListener(event) {
    var target = event.target;
    var rotation = parseFloat(target.getAttribute("data-rotation")) || 0;
    var deltaRotation = event.da;

    // Add the change in rotation
    rotation += deltaRotation;

    // Define snapping angles with stronger snapping
    var snappingAngles = [
        0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225,
        240, 255, 270, 285, 300, 315, 330, 345, 360,
    ];

    // Find the nearest snapping angle
    var nearestAngle = snappingAngles.reduce(function (prev, curr) {
        return Math.abs(curr - rotation) < Math.abs(prev - rotation)
            ? curr
            : prev;
    });

    // Snap the rotation to the nearest angle
    rotation = nearestAngle;

    // Update the transformation
    var x = parseFloat(target.getAttribute("data-x")) || 0;
    var y = parseFloat(target.getAttribute("data-y")) || 0;

    target.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    target.setAttribute("data-rotation", rotation);
}

function rotateElement(target, deltaRotation) {
    var rotation =
        (parseFloat(target.getAttribute("data-rotation")) || 0) + deltaRotation;
    var x = parseFloat(target.getAttribute("data-x")) || 0;
    var y = parseFloat(target.getAttribute("data-y")) || 0;

    target.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    target.setAttribute("data-rotation", rotation);
}

function moveElement(target, x, y) {
    target.style.transform = `translate(${x}px, ${y}px) rotate(${
        target.getAttribute("data-rotation") || 0
    }deg)`;

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
}
