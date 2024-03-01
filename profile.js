document.addEventListener("DOMContentLoaded", function () {
  const viewProfileButtons = document.querySelectorAll(".view-profile-btn");

  viewProfileButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the profile information and display it in a modal or navigate to a new page
      alert("View Profile button clicked");
    });
  });
});
