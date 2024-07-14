// $(document).ready(function () {
//   // Smooth scrolling for links
//   $('a[href^="#"]').on("click", function (event) {
//     var target = this.hash;
//     var $target = $(target);
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $target.offset().top,
//         },
//         900,
//         "swing",
//         function () {
//           window.location.hash = target;
//         }
//       );
//   });

// Form submission
//   $("form").on("submit", function (event) {
//     event.preventDefault();
//     var fname = $("#fname").val();
//     var email = $("#email").val();
//     var lname = $("#lname").val();

//     // Simple form validation
//     if (fname && email && lname) {
//       alert("Thank you for contacting us, " + fname + " " + lname + " !");
//       $(this).trigger("reset");
//     } else {
//       alert("Please fill out all fields.");
//     }
//   });
// });
let counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);
function toggleContactButton() {
  var agreeCheckbox = document.getElementById("agree");
  var submitButton = document.getElementById("submitBtn");

  // Enable or disable the submit button based on the checkbox state
  submitButton.disabled = !agreeCheckbox.checked;
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons with class 'choose-button'
  var buttons = document.querySelectorAll(".choose-button");

  // Loop through each button
  buttons.forEach(function (button) {
    // Add click event listener
    button.addEventListener("click", function () {
      // Get the value of 'data-image' attribute from the clicked button
      var imageUrl = this.getAttribute("data-image");

      // Update the 'src' attribute of the 'selected-image' img tag
      document.getElementById("selected-image").src = imageUrl;
    });
  });
});
