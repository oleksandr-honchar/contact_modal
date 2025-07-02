// Open Modal (trigger this from any action, e.g., button click)
function openModal() {
  document.getElementById("contactModal").style.display = "block";
  document.getElementById("registerBtn").style.display = "none"; // Hide Register button
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Close Modal
function closeModal() {
  document.getElementById("contactModal").style.display = "none";
  document.getElementById("registerBtn").style.display = "block"; // Show Register button
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal on backdrop click
document.getElementById("contactModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("contactModal")) {
    closeModal();
  }
});

// Close modal on pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Close modal on clicking the close button
document.getElementById("closeBtn").addEventListener("click", closeModal);

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Simple form validation (can be extended)
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Name and Email are required!");
    return;
  }

  // If validation passes, you can process the form (e.g., send it to the backend)
  console.log("Form submitted:", {
    name: name,
    email: email,
    message: document.getElementById("message").value,
  });

  // Close modal after submission
  closeModal();
});
