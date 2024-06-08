//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {

  loadPreferences();

  
  document.getElementById("preferences-form").addEventListener("submit", function(event) {

    event.preventDefault();

   
    const fontSize = document.getElementById("fontsize").value + "px";
    const fontColor = document.getElementById("fontcolor").value;

    
    setCookie("fontSize", fontSize, 365);
    setCookie("fontColor", fontColor, 365);


    applyPreferences(fontSize, fontColor);
  });
});


function applyPreferences(fontSize, fontColor) {
  document.body.style.fontSize = fontSize;
  document.body.style.color = fontColor;
}


function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
}


function loadPreferences() {
  const fontSize = getCookie("fontSize") || "16px";
  const fontColor = getCookie("fontColor") || "#000000";
  applyPreferences(fontSize, fontColor);
}


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
