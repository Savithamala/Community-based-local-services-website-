function showNotification() {
  var notificationContainer = document.getElementById("notification-container");
  var notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = "New service available in your area!";

  notificationContainer.appendChild(notification);

  // Automatically hide notification after 5 seconds
  setTimeout(function () {
    notification.classList.add("hide");
    setTimeout(function () {
      notificationContainer.removeChild(notification);
    }, 1000); // Remove notification after it's hidden
  }, 5000); // 5 seconds
}
