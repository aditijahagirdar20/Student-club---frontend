// Wait until the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all "See More" buttons
    const buttons = document.querySelectorAll(".see-more-btn");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const hiddenContent = document.getElementById(`hidden-content-${index + 1}`);
            if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
                hiddenContent.style.display = "block";
                button.textContent = "See Less";
            } else {
                hiddenContent.style.display = "none";
                button.textContent = "See More";
            }
        });
    });
});
