// Function demonstrating scope, parameters, and return value
function triggerAnimation(elementId) {
  const element = document.getElementById(elementId); // scope: local to function
  if (!element) return false; // return value: false if element not found

  element.classList.add("animate");

  // Remove animation class after it ends to allow re-trigger
  setTimeout(() => {
    element.classList.remove("animate");
  }, 1000);

  return true; // return value: true if animation triggered
}

// Event listener to trigger animation
document.getElementById("animateBtn").addEventListener("click", () => {
  triggerAnimation("box"); // parameter: element ID
});