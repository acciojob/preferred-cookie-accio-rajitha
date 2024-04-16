//your JS code here. If required.
// Function to set cookies
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get cookies
function getCookie(name) {
  const cookieName = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  
  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');
  
  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;
  
  // Save preferences as cookies
  setCookie('fontSize', fontSize, 30);
  setCookie('fontColor', fontColor, 30);
  
  // Apply preferences to the page
  document.body.style.fontSize = `${fontSize}px`;
  document.body.style.color = fontColor;
}

// Function to apply saved preferences on page load
function applyPreferences() {
  const fontSize = getCookie('fontSize');
  const fontColor = getCookie('fontColor');
  
  if (fontSize) {
    document.body.style.fontSize = `${fontSize}px`;
  }
  
  if (fontColor) {
    document.body.style.color = fontColor;
  }
}

// Add event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// Apply saved preferences on page load
applyPreferences();
