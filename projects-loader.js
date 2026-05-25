// MAIN
  fetch('./projects-content.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('main-placeholder').innerHTML = html;
  });


//INDEX > LOAD CARDS TO MAIN
async function loadMainContent() {
    const response = await fetch('jsons/projects.json');
    const projects = await response.json();

    return new Promise((resolve, reject) => {
      if (projects && response.status == 200){
            // Sort newest to oldest (parses DD.MM.YYYY format)
            projects.sort((a, b) => {
                const parseDate = str => {
                    const [d, m, y] = str.split('.');
                    return new Date(y, m - 1, d);
                };
                return parseDate(b.date) - parseDate(a.date);
            });


            if(document.getElementById('error-text')){
                const errorTextP = document.getElementById('error-text');
                errorTextP.innerHTML = `<!-- No errors loading cards -->`;
            }

            const main = document.getElementById('main-placeholder');

            projects.forEach(project => {
                main.innerHTML += `
                <!-- card start -->
              <div class="project-wrapper">
                  <div class="project-wrapper-left"></div>
                    <div class="project">
                        <div class="project-header">
                            <span class="project-title">${project.title}</span>
                            <div class="project-line"></div>
                            <span class="project-tag">${project.tag}</span>
                        </div>
                        <div class="project-content-wrapper">
                          <div class="project-image-wrapper"><a href="${project.picture}" target="_blank"><img src="${project.picture}"></a>
                          </div>
                          <div class="project-content-text-wrapper">
                          <p class="project-content-text">${project.content}</p>
                          </div>
                        </div>
                        <div class="project-link"><a href="${project.link}" target="_blank">${project.linktext}</a></div>
                        <div class="project-footer">
                            <span class="project-category">${project.category}</span>
                            <div class="project-line"></div>
                            <span class="project-date">${project.date}</span>
                        </div>
                    </div>
                  <div class="project-wrapper-right"></div>
              </div>
                <!-- card end -->`;
            });
                resolve("Projects loaded!");
            }else{
                reject("Projects not loaded :(");
            }
    });
} 

// error check
function checkErrors(){
    return new Promise((resolve, reject) => {

        if(!document.getElementById('error-text')){
            reject("Cards not loaded, reloading...");
            window.location.reload();
        }else{
            resolve("No errors!");
        }
    });
}

async function tryLoadingMainContent(){
    console.log("Loading cards...");
    try {
        const loadCardsResult = await loadMainContent();
        console.log(loadCardsResult);

        const checkErrorsResult = await checkErrors();
        console.log(checkErrorsResult);
    } catch(error){
        console.log(error);
    }
}

tryLoadingMainContent();
