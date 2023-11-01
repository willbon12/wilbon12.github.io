document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check localStorage for the user's theme preference
  const userTheme = localStorage.getItem("user-theme");

  // Apply the user's preferred theme
  if (userTheme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }

  // Toggle the theme when the button is clicked
  themeToggle.addEventListener("click", function() {
    body.classList.toggle("dark-mode");

    // Update the user's theme preference in localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("user-theme", "dark");
    } else {
      localStorage.setItem("user-theme", "light");
    }
  });
});