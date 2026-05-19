// MAIN
  fetch('./main.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('main-placeholder').innerHTML = html;
  });


//INDEX > LOAD CARDS TO MAIN
async function loadCards() {
    const response = await fetch('jsons/home-cards.json');
    const cards = await response.json();

if (cards && response.status == 200){
      // Sort newest to oldest (parses DD.MM.YYYY format)
      cards.sort((a, b) => {
          const parseDate = str => {
              const [d, m, y] = str.split('.');
              return new Date(y, m - 1, d);
          };
          return parseDate(b.date) - parseDate(a.date);
      });

      const errorTextP = document.getElementById('error-text');
      errorTextP.innerHTML = `<!-- No errors loading cards -->`;

      const main = document.getElementById('main-placeholder');

      cards.forEach(card => {
          main.innerHTML += `
          <!-- card start -->
          <div class="card-wrapper">
              <div class="card-wrapper-left"></div>
              <div class="card">
                  <div class="card-header">
                      <span class="card-title">${card.title}</span>
                      <div class="card-line"></div>
                      <span class="card-tag">${card.tag}</span>
                  </div>
                  <p class="card-content">${card.content}</p>
                  <div class="card-link"><a href="${card.link}">${card.linktext}</a></div>
                  <div class="card-footer">
                      <span class="card-category">${card.category}</span>
                      <div class="card-line"></div>
                      <span class="card-date">${card.date}</span>
                  </div>
              </div>
              <div class="card-wrapper-right"></div>
          </div>
          <!-- card end -->`;
      });
  } else {
    console.log("Cards not loaded :(")
  }
} 

loadCards();