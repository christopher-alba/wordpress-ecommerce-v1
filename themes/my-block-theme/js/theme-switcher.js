// In your script.js or an inline script tag in footer.php
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Check for saved theme preference in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggleButton.textContent =
      savedTheme === "dark-theme"
        ? "Switch to Light Theme"
        : "Switch to Dark Theme";
  } else {
    // Default to light theme if no preference
    body.classList.add("light-theme");
  }

  // Add event listener to toggle themes
  themeToggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      themeToggleButton.textContent = "Switch to Light Theme";
      localStorage.setItem("theme", "dark-theme");
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      themeToggleButton.textContent = "Switch to Dark Theme";
      localStorage.setItem("theme", "light-theme");
    }
  });
});
