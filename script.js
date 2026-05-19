// Check Font and FX Status on reload
var fxstate = localStorage.getItem("fx-state");
var fontstate = localStorage.getItem("font-state");

// HEADER
fetch('./header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;

    // FX
    // Restore saved fx-state from localStorage
    const savedFx = localStorage.getItem("fx-state");
    if (savedFx) {
      const radio = document.querySelector(`input[name="fx-state"][value="${savedFx}"]`);
      // add class checked to parent div for styling
      const parent = radio.parentNode;
      parent.classList.add("checkedFx");
      if (radio) radio.checked = true;
    }

    // If there's no saved fx-state value, return to default
    if (!savedFx) {
      const savedFx = localStorage.setItem("fx-state", "default");
      window.location.reload(); 
    }

    // FONT
    // Restore saved font-state from localStorage
    const savedFont = localStorage.getItem("font-state");
    if (savedFont) {
      const radio = document.querySelector(`input[name="font-state"][value="${savedFont}"]`);
      // add class checked to parent div for styling
      const parent = radio.parentNode;
      parent.classList.add("checkedFont");
      if (radio) radio.checked = true;
    }

    // If there's no saved font-state value, return to default
    if (!savedFont) {
      const savedFont = localStorage.setItem("font-state", "default");
      window.location.reload(); 
    }
  });

// NAV
  fetch('./nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;
  });

// FOOTER
  fetch('./footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  });

// FX HANDLER - defined here so it's available globally
function changeFx() {
    const selectedFx = document.querySelector('input[name="fx-state"]:checked');
    if (selectedFx) {
        localStorage.setItem("fx-state", selectedFx.value);
        window.location.reload();  
    }
}

// FONT HANDLER - defined here so it's available globally
function changeFont() {
    const selectedFont = document.querySelector('input[name="font-state"]:checked');
    if (selectedFont) {
        localStorage.setItem("font-state", selectedFont.value);
        window.location.reload();
    }
}