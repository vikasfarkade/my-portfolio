
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

// Close menu after selecting a section
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});

// Contact form
document.getElementById("contactForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const subject = encodeURIComponent(
            "Portfolio enquiry from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage: " + message
        );

        window.location.href =
            "mailto:vikasfarkade00@gmail.com?subject=" +
            subject + "&body=" + body;
    }
);

