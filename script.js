const toggleDarkModeButton = document.getElementById("toggleDarkMode");

toggleDarkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleDarkModeButton.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleDarkModeButton.textContent = "Light";
  } else {
    toggleDarkModeButton.textContent = "Dark";
  }
});
