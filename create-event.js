// Toggle Create Event Form
document.getElementById("create-event-btn").addEventListener("click", () => {
    const form = document.getElementById("create-event-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
});

// Toggle Create Template Form
document.getElementById("create-template-btn").addEventListener("click", () => {
    const section = document.getElementById("template-section");
    section.style.display = section.style.display === "none" ? "block" : "none";
});
