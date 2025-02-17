document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Form validation
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function(event) {
            const inputs = this.querySelectorAll("input, textarea");
            let valid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    alert("Please fill all fields");
                    valid = false;
                }
            });

            if (!valid) event.preventDefault();
        });
    });
});
