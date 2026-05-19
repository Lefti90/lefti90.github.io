// Check font Status on reload
var fontstate = localStorage.getItem("font-state")

// Default
//#region DEFAULT
if (fontstate == "default"){
    const element = document.getElementById('main-placeholder');
    // element.style.setProperty('--userSelectedFont', "ForcedSquare, sans-serif");
    element.style.setProperty('--userSelectedFont', "ForcedSquare, sans-serif");
}
//#endregion DEFAULT

// BOLD
//#region BOLD
if (fontstate == "bold"){
    const element = document.getElementById('main-placeholder');
    // element.style.setProperty('--userSelectedFont', "ForcedSquare, sans-serif");
    element.style.setProperty('--userSelectedFont', "Kimberley_BL, sans-serif");
}
//#endregion BOLD


// SIMPLE
//#region SIMPLE
if (fontstate == "simple"){
    const element = document.getElementById('main-placeholder');
    element.style.setProperty('--userSelectedFont', "Poppins, sans-serif");
}
//#endregion SIMPLE