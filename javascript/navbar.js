document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");

  if (!navbarPlaceholder) return;

  fetch("/html/partials/navbar.html")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Navbar failed to load: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      navbarPlaceholder.innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading navbar:", error);
    });
});