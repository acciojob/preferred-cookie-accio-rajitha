//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Step 5: Load preferences from cookies when the page loads
  loadPreferences();

  // Step 1: Capture the 'submit' event of the form
  document.getElementById("preferences-form").addEventListener("submit", function(event) {
    // Step 2: Prevent the default form submission
    event.preventDefault();

    // Step 3: Get user's chosen font size and color from the form
    const fontSize = document.getElementById("fontsize").value + "px";
    const fontColor = document.getElementById("fontcolor").value;

    // Step 4: Save font size and color as cookies
    setCookie("fontSize", fontSize, 365);
    setCookie("fontColor", fontColor, 365);

    // Apply preferences immediately
    applyPreferences(fontSize, fontColor);
  });
});

// Function to apply preferences to the page
function applyPreferences(fontSize, fontColor) {
  document.body.style.fontSize = fontSize;
  document.body.style.color = fontColor;
}

// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
}

// Function to load preferences from cookies
function loadPreferences() {
  const fontSize = getCookie("fontSize") || "16px";
  const fontColor = getCookie("fontColor") || "#000000";
  applyPreferences(fontSize, fontColor);
}

// Function to retrieve a cookie value
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}
