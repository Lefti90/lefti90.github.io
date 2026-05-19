// Check FX Status on reload
var fxstate = localStorage.getItem("fx-state")

// OFF
if (fxstate == "off"){
    //do nothing
}

function spawn(x, y, text, drift, duration, rotate, color, direction, scale, multiplier) {
    const el = document.createElement('div');
    el.className = 'spawn';
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top  = y + 'px';
    // el.style.bottom = direction + 'px';
    el.style.setProperty('--drift',    (Math.random() * drift * multiplier - 30) + 'px');
    el.style.setProperty('--duration', (duration + Math.random() * 0.6 * multiplier) + 's');
    el.style.setProperty('--rotate',   (Math.random() * rotate * multiplier - 15) + 'deg');
    el.style.setProperty('--color',    `hsl(${Math.random() * color}, 70%, 50%)`);
    el.style.setProperty('--direction', direction * multiplier + 'px');
    el.style.setProperty('--fxscale',   scale * multiplier);
    el.style.setProperty('--multiplier', multiplier);
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
}

const nato = {
    KeyA: 'Alpha',   KeyB: 'Bravo',   KeyC: 'Charlie', KeyD: 'Delta',
    KeyE: 'Echo',    KeyF: 'Foxtrot', KeyG: 'Golf',    KeyH: 'Hotel',
    KeyI: 'India',   KeyJ: 'Juliet',  KeyK: 'Kilo',    KeyL: 'Lima',
    KeyM: 'Mike',    KeyN: 'November',KeyO: 'Oscar',   KeyP: 'Papa',
    KeyQ: 'Quebec',  KeyR: 'Romeo',   KeyS: 'Sierra',  KeyT: 'Tango',
    KeyU: 'Uniform', KeyV: 'Victor',  KeyW: 'Whiskey', KeyX: 'X-ray',
    KeyY: 'Yankee',  KeyZ: 'Zulu',
};

// Default
//#region DEFAULT
if (fxstate == "default"){
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.addEventListener('keydown', e => {  
        if (e.code === 'Space') spawn(mouseX, mouseY, 'Space');
        let randomString = (Math.random() + 1).toString(36).substring(7);
        spawn(mouseX, mouseY, '~\\.secret\\.'+ randomString +'\\' + (nato[e.code] || e.key), 60, 0.6, 30, 360, -40, 1, 1);
    });

    document.addEventListener('click', e => {
        spawn(e.clientX, e.clientY, '*Click*', 60, 0.6, 30, 360, -40, 1, 1);
    });

    document.addEventListener('wheel', e => {
        if (event.deltaY < 0) {
        spawn(e.clientX, e.clientY, '*', 60, 0.6, 30, 360, 60, 1, 1);
        } else {
            spawn(e.clientX, e.clientY, '*', 60, 0.6, 30, 360, -60, 1, 1);
        }
    });
}
//#endregion DEFAULT

// BONKERS
//#region BONKERS
if (fxstate == "bonkers"){
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.addEventListener('keydown', e => {  
        if (e.code === 'Space') spawn(mouseX, mouseY, 'Space');
        let randomString = (Math.random() + 1).toString(36).substring(7);
        spawn(mouseX, mouseY, '~\\.secret\\.'+ randomString +'\\' + (nato[e.code] || e.key), 
                                    (Math.random() * (-360 * 2 + 1) + 360), 0.5, 3600, 360, -40, 2, Math.random()*5);
    });

    // x, y, text, 
    // drift, duration, rotate, color, direction, scale, multiplier

    document.addEventListener('click', e => {
        spawn(e.clientX, e.clientY, '*Click*', 
                                    (Math.random() * (-360 * 2 + 1) + 360), 0.5, 3600, 360, -40, 2, Math.random()*5);
    });

    document.addEventListener('wheel', e => {
        if (event.deltaY < 0) {
        spawn(e.clientX, e.clientY, 'XD', 
                                    (Math.random() * (-360 * 2 + 1) + 360), 0.5, 3600, 360, 40, 2, Math.random()*5);
        } else {
            spawn(e.clientX, e.clientY, '*', 
                                    (Math.random() * (-360 * 2 + 1) + 360), 0.5, 3600, 360, -40, 2, Math.random()*5);
        }
    });
}
//#endregion BONKERS