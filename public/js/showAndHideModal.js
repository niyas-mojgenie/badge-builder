function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }

    // Hide any modal backdrop directly under the body
    const backdrop = document.querySelector("body > div[modal-backdrop]");
    if (backdrop) {
        backdrop.style.display = "none";
    }
}

function showModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }

    // Show any modal backdrop directly under the body
    const backdrop = document.querySelector("body > div[modal-backdrop]");
    if (backdrop) {
        backdrop.style.display = "block";
    }
}
