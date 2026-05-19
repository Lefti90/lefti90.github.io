// MAIN
  fetch('./contact-content.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('main-placeholder').innerHTML = html;
  });