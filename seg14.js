(() => { console.log("JS loading...") })();
setTimeout(() => {
    const ele_body = document.querySelector('body');
    for (const ele_dark_switch of document.querySelectorAll('.dark_switch')) {
        ele_dark_switch.addEventListener('click', () => {
            let old = ele_body.getAttribute('data-theme');
            if (old === 'dark') {
                ele_body.setAttribute('data-theme', 'light');
                ele_dark_switch.innerHTML = '☀️';
            } else {
                ele_body.setAttribute('data-theme', 'dark');
                ele_dark_switch.innerHTML = '🌙';
            }
        })
    }
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
        ele_body.setAttribute('data-theme', 'dark');
        for (const ele_dark_switch of document.querySelectorAll('.dark_switch')) {
            ele_dark_switch.innerHTML = '🌙';
        }
    } else {
        ele_body.setAttribute('data-theme', 'light');
        for (const ele_dark_switch of document.querySelectorAll('.dark_switch')) {
            ele_dark_switch.innerHTML = '☀️';
        }
    }
}, 2);
const segtubeData = {
    "0": [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
    "1": [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "2": [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
    "3": [0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    "4": [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "5": [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    "6": [0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    "7": [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
    "8": [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    "9": [1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    "A": [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
    "B": [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
    "C": [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    "D": [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    "E": [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    "F": [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    "G": [0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    "H": [1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "I": [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    "J": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "K": [0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    "L": [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "M": [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    "N": [1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    "O": [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    "P": [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    "Q": [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    "R": [1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
    "S": [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    "T": [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    "U": [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "V": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    "W": [1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    "X": [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    "Y": [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    "Z": [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
    " ": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "_": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "-": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "`": [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    "+": [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    "=": [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "(": [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    ")": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    "!": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    "*": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    "^": [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    "$": [0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    "&": [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
    "|": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    "/": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    "\\": [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    ",": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    "?": [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ".": [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    "a": [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    "b": [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "c": [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "d": [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "h": [0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "i": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    "n": [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "o": [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    "q": [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    "r": [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    "t": [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    "u": [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "w": [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    "z": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    "'": [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "\"": [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "{": [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    "}": [0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0]
}
const get_digtube = (() => {
    const existing_tubes = new Object();
    const get_digtube = (tubeID, parent) => {
        const result = existing_tubes[tubeID];
        if (result === undefined) {
            const new_result = new DigTube(tubeID, parent);
            existing_tubes[tubeID] = new_result;
            return new_result;
        } else {
            return result;
        }
    }
    class DigTube {
        constructor(tubeID, parent) {
            console.assert(tubeID !== undefined);
            if (parent === undefined) {
                parent = document.body;
            }
            this.tubeID = tubeID;
            this.ele_root = document.createElement("div");
            this.ele_root.classList.add('seg_container');

            this.ele_bg = document.createElement("div");
            this.ele_bg.classList.add('seg_bg');
            this.ele_root.appendChild(this.ele_bg);

            this.ele_tubes = [];
            const arrl = [104, 104, 12, 0, 0, 12, 53, 64, 53, 42, 12, 12, 12, 42];
            const arrt = [12, 116, 208, 116, 12, 0, 55, 104, 146, 186, 146, 104, 55, 22];
            const arrv = [1, 1, 0, 1, 1, 0, 5, 2, 4, 3, 5, 2, 4, 3];
            for (let i = 0; i < 14; i++) {
                const ele = document.createElement("div");
                ele.classList.add('seg');
                switch (arrv[i]) {
                    case 1:
                        ele.classList.add('vert');
                        break;
                    case 2:
                        ele.classList.add('short');
                        break;
                    case 3:
                        ele.classList.add('decap');
                        break;
                    case 4:
                        ele.classList.add('pllg');
                        break;
                    case 5:
                        ele.classList.add('pllgi');
                        break;
                };
                ele.style.setProperty('--left', arrl[i] + 'px');
                ele.style.setProperty('--top', arrt[i] + 'px');
                if (i === 9) { ele.style.transform = "rotateY(180deg)" };
                this.ele_tubes.push(ele);
                this.ele_root.appendChild(ele);

                ele.addEventListener("click", () => {
                    if (ele.classList.contains('hide')) {
                        ele.classList.remove('hide');
                    } else {
                        ele.classList.add('hide');
                    }
                })
            }
            parent.appendChild(this.ele_root);
        }

        get_stat() {
            const arr = [];
            for (const ele of this.ele_tubes) {
                arr.push(ele.classList.contains('hide') ? 0 : 1);
            }
            return arr;
        }

        set_stat(stat) {
            if (stat[6] === undefined) {
                let old_stat = stat;
                stat = segtubeData[('' + stat)];
                if (stat === undefined) {
                    stat = segtubeData[('' + old_stat).toUpperCase()];
                }
            }
            if (stat === undefined || stat[6] === undefined) { stat = segtubeData['_'] };
            for (let i = 0; i < 14; i++) {
                if (stat[i]) {
                    this.ele_tubes[i].classList.remove('hide');
                } else {
                    this.ele_tubes[i].classList.add('hide');
                }
            }
            return stat;
        }
    };
    return get_digtube;
})();
(() => {
    let i = 1000;
    for (const char of 'Hello,\nWorld!') {
        if (char === '\n') { document.body.appendChild(document.createElement("br")); continue; }
        get_digtube(i++).set_stat(char);
    }
    document.addEventListener('keydown', (ev)=>{
        if(ev.key.length===1){
            if(i>=1012){i=1000};
            get_digtube(i++).set_stat(ev.key);
        }else if(ev.key.toLowerCase()==='backspace'){
            if(i<=1000){i=1012};
            get_digtube(--i).set_stat(' ');
        }
    })
})();
(() => {
    const t2s = () => {
        const now = new Date();
        const sep = now.getMilliseconds() >= 500 ? ' ' : '_';
        return now.getHours().toString().padStart(2, '0') + sep + now.getMinutes().toString().padStart(2, '0') + sep + now.getSeconds().toString().padStart(2, '0');
    }
    let old_display = '';
    const ref = () => {
        const new_display = t2s();
        if (old_display !== new_display) {
            old_display = new_display;
            for (let i = 0; i < 8; i++) {
                get_digtube('timedisplay' + i).set_stat(new_display[i]);
            }
        }
    }
    setInterval(ref, 20);
    document.body.appendChild(document.createElement("br"));
    ref();
})();
(() => {
    let se = document.createElement("span");
    se.classList.add("dark_switch");
    document.body.appendChild(se);
})();
(() => { console.log("JS loaded!!!") })()