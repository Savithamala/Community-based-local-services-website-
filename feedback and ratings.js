const stars = document.querySelectorAll(".star");
const feedbackTextarea = document.getElementById("feedback");

function highlightStars(starValue) {
  stars.forEach((star) => {
    if (parseInt(star.getAttribute("data-value")) <= starValue) {
      star.innerHTML = "&#9733;";
    } else {
      star.innerHTML = "&#9734;";
    }
  });
}

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = parseInt(star.getAttribute("data-value"));
    highlightStars(value);
  });
});

function submitFeedback() {
  const rating =
    document.querySelectorAll(".star").length -
    document.querySelectorAll(".star:empty").length;
  const feedback = feedbackTextarea.value;
  // Here you can process the feedback and rating, e.g., send it to a server
  console.log("Rating:", rating);
  console.log("Feedback:", feedback);
  // Reset the stars and textarea after submission
  stars.forEach((star) => {
    star.innerHTML = "&#9734;";
  });
  feedbackTextarea.value = "";
  alert("Feedback submitted successfully!");
}
