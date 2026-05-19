async function loadReasons() {
    const response = await fetch('jsons/reasons.json');
    const reasons = await response.json();

if (reasons && response.status == 200){
    // randomizeReason
    randomReason = Math.floor(Math.random() * reasons.length);

      const main = document.getElementById('random-flavor');
      main.innerHTML =`"${reasons[randomReason].text}"`;
  } else {
    console.log("Reasons not loaded :(")
  }
} 

loadReasons();