// Set the hidden timestamp field on page load
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("form-timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});

// Modal Logic
function showModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.showModal();
    }
}