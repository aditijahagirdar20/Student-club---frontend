// Toggle to Renewal Form
document.getElementById("toggle-to-renew").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("membership-form-container").style.display = "none";
    document.getElementById("renewal-form").style.display = "block";
});

// Toggle to Membership Form
document.getElementById("toggle-to-join").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("renewal-form").style.display = "none";
    document.getElementById("membership-form-container").style.display = "block";
});

// Handle Membership Form Submission
document.getElementById("membership-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const usn = document.getElementById("usn").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, usn, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            const thankYouMsg = document.getElementById("thank-you-msg");
            thankYouMsg.style.display = "block";
            if (data.success) {
                thankYouMsg.textContent = data.success;

                // Clear the form fields after successful submission
                document.getElementById("membership-form").reset();
            } else if (data.error) {
                thankYouMsg.textContent = data.error;
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

// Handle Renewal Form Submission
document.getElementById("renew-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const usn = document.getElementById("renew-usn").value;

    fetch("http://localhost:3000/renew", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ usn }),
    })
        .then((response) => response.json())
        .then((data) => {
            const renewThankYouMsg = document.getElementById("renew-thank-you-msg");
            renewThankYouMsg.style.display = "block";
            if (data.success) {
                renewThankYouMsg.textContent = data.success;

                // Clear the renewal form fields after successful submission
                document.getElementById("renew-form").reset();
            } else if (data.error) {
                renewThankYouMsg.textContent = data.error;
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});
