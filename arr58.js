const root = document.querySelector('.array_container');
const data = { "0": "E195E35443", "1": "01F0004740", "2": "2119646544", "3": "0199624443", "4": "842F011171", "5": "7991044430", "6": "CA90034430", "7": "1195300700", "8": "6996034430", "9": "699E004430", " ": "0000000000", "A": "CA9AC30003", "B": "F55A032210", "C": "E111012220", "D": "F11E032210", "E": "F551032220", "F": "F991030000", "G": "E199812221", "H": "F44F030030", "I": "01F1002320", "J": "001F112210", "K": "F4A1030030", "L": "F000032220", "M": "F242F30003", "N": "F248F30003", "O": "E111E12221", "P": "F996030000", "Q": "E11E012122", "R": "F996030012", "S": "2558022210", "T": "11F1100300", "U": "F000F12221", "V": "F000F01210", "W": "F0E0F12121", "X": "1A4A130003", "Y": "3484300300", "Z": "1953132222", ",": "0000005300", ".": "0000003300", "a": "299E034474", "b": "F448032210", "c": "8440012200", "d": "844F012230", "e": "8448035510", "f": "08F9000700", "g": "C22C049970", "h": "F448030030", "i": "00A0000300", "j": "00A0048F00", "k": "F840030120", "l": "0F00003200", "m": "8484830303", "n": "8448030030", "p": "C4480F2210", "o": "8448012210", "q": "844C0122F8", "r": "E422030000", "s": "0844004520", "t": "08E8000740", "u": "8008034434", "v": "8000812421", "w": "8080812121", "x": "4808442124", "y": "C00C049970", "z": "44C4065440", "$": "69F9144743", "#": "4F4F417171", "@": "E959E34553", "!": "00F0000500", "`": "0120000000", "%": "65B4221653", "~": "8480800010", "^": "4212400000", "&": "6996034525", "*": "AC8CA21012", "(": "00C2000120", ")": "02C0002100", "[": "00F1000320", "]": "01F0002300", "{": "0871000740", "}": "0178004700", "|": "00F0000700", "\\": "12C0000012", "/": "00C2121000", "+": "88E8800300", "=": "4444022220", ":": "0040000200", ";": "0040004600", "\"": "0303000000", "'": "0030000000", "<": "0842000120", ">": "0248002100", "?": "2199600500", "-": "0888000000", "_": "0000004440" };
const pixelSize = (() => {
    let pixelSize = 8;
    if (window.screen.width < 700) {
        pixelSize = 6;
    } else if (window.screen.width < 1200) {
        pixelSize = 8;
    } else if (window.screen.width < 2100) {
        pixelSize = 10;
    } else {
        pixelSize = 14;
    }
    return pixelSize;
})();
const pixelWidth = Math.max(Math.floor(window.visualViewport.width / pixelSize) - 2, 12);
(() => {
    const z = document.createElement("style");
    z.innerHTML = `.array_row{width:${pixelWidth * pixelSize}px;height:${pixelSize}px;}.array_cell{width:${pixelSize}px;height:${pixelSize}px;}`;
    document.head.appendChild(z);
})();
(() => {
    const ele_body = document.querySelector('body');
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
        ele_body.setAttribute('data-theme', 'dark');
    } else {
        ele_body.setAttribute('data-theme', 'light');
    }
})();
const [getPixel, setPixel] = (() => {
    const pixelArray = [];
    const pixelHeight = Math.max(Math.floor(window.visualViewport.height / pixelSize) - 2, 9);
    for (let i = 0; i < pixelHeight; i++) {
        pixelArray.push([]);
        const row = document.createElement("div");
        row.classList.add("array_row");
        for (let j = 0; j < pixelWidth; j++) {
            const cell = document.createElement("div");
            cell.classList.add("array_cell");
            cell.classList.add("hide");
            row.appendChild(cell);
            pixelArray[i][j] = cell;
        }
        root.appendChild(row);
    }
    const _checkPixel = pos => {
        if (pos[1] >= pixelArray.length) {
            for (let i = pixelArray.length; i <= pos[1]; i++) {
                pixelArray.push([]);
                const row = document.createElement("div");
                row.classList.add("array_row");
                row.style.width = (pixelWidth * 8) + 'px';
                for (let j = 0; j < pixelWidth; j++) {
                    const cell = document.createElement("div");
                    cell.classList.add("array_cell");
                    cell.classList.add("hide");
                    row.appendChild(cell);
                    pixelArray[i][j] = cell;
                }
                root.appendChild(row);
            }
        }
    }
    const getPixel = (pos) => {
        _checkPixel(pos);
        return pixelArray[pos[1]][pos[0]].classList.contains("hide") ? 0 : 1;
    }
    const setPixel = (pos, stat) => {
        _checkPixel(pos);
        if (stat) {
            pixelArray[pos[1]][pos[0]].classList.remove("hide");
        } else {
            pixelArray[pos[1]][pos[0]].classList.add("hide");
        }
    }
    return [getPixel, setPixel];
})();
const wordStarts = [[0, 0]];
const wordNewline = () => {
    let [x, y] = wordStarts.pop();
    y += 9;
    wordStarts.push([0, y]);
    return [0, y];
}
const wordBackspace = () => {
    if (wordStarts.length <= 1) { return false; }
    cursorReset();
    let end = wordStarts.pop();
    let start = wordStarts[wordStarts.length - 1];
    if (start[1] !== end[1]) {
        end = [pixelWidth, start[1]];
    }
    for (let j = start[0]; j < end[0]; j++) {
        for (let i = start[1]; i < start[1] + 8; i++) {
            setPixel([j, i], 0);
        }
    }
    cursorStart();
    return true;
}

const num2pixelmap = (s) => {
    const out = [];
    for (let i = 0; i < 8; i++) { out.push([]) };
    for (let i = 0; i < 10; i++) {
        const d = Number.parseInt(s[i], 16);
        const rowbase = Math.floor(i / 5) * 4;
        const col = i % 5;
        for (let j = 0; j < 4; j++) {
            out[rowbase + j][col] = d & (1 << j) ? 1 : 0;
        }
    }
    return out;
}
const pixelmap2bbox = (a) => {
    //left:include;right:exclude
    if (a.length === 0) { return [0, 0]; }
    let left, right;
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 8; i++) {
            if (a[i][j]) { left = j; break; }
        }
        if (left !== undefined) { break; }
    }

    if (left === undefined) { return [0, 3]; }
    for (let j = 4; j >= 0; j--) {
        for (let i = 0; i < 8; i++) {
            if (a[i][j]) { right = j + 1; break; }
        }
        if (right !== undefined) { break; }
    }
    if (right === undefined) { return [0, 4]; }
    return [left, right];
}
const pixelmap2display = (a) => {
    const [bl, br] = pixelmap2bbox(a);
    let ac = wordStarts[wordStarts.length - 1];
    cursorReset();
    if (ac[0] + br - bl > pixelWidth) {
        wordNewline();
        ac = wordStarts[wordStarts.length - 1];
    }
    for (let i = 0; i < br - bl; i++) {
        for (let h = 0; h < 8; h++) {
            setPixel([ac[0] + i, ac[1] + h], a[h][bl + i]);
        }
    }
    wordStarts.push([ac[0] + br - bl + 1, ac[1]]);
    cursorStart();
}

document.addEventListener("keydown", (ev) => {
    if (ev.key.toLowerCase() === 'backspace') {
        wordBackspace();
        ev.preventDefault();
        return;
    } else if (ev.key.toLowerCase() === 'enter') {
        pixelmap2display([]);
        cursorReset();
        wordNewline();
        cursorStart();
        ev.preventDefault();
        return;
    }
    if (ev.ctrlKey) return;
    if (ev.key.length !== 1) return;
    const s = data[ev.key];
    if (s === undefined || s === null) return;
    const a = num2pixelmap(s);
    pixelmap2display(a);
    ev.preventDefault();
    return;
})

const [cursorReset, cursorStart] = (() => {
    let cursorTicker;
    let oldWordStart = [0, 0];
    let lit = false;
    const ref = () => {
        if (wordStarts[wordStarts.length - 1] !== oldWordStart) {
            oldWordStart = wordStarts[wordStarts.length - 1];
            lit = false;
        }
        if (oldWordStart[0] < pixelWidth) {
            if (!lit) {
                for (let i = 0; i < 8; i++) {
                    setPixel([oldWordStart[0], oldWordStart[1] + i], 1);
                }
                lit = true;
            } else {
                for (let i = 0; i < 8; i++) {
                    setPixel([oldWordStart[0], oldWordStart[1] + i], 0);
                }
                lit = false;
            }
        }
    }
    const res = () => {
        if (cursorTicker !== undefined) {
            clearInterval(cursorTicker);
            cursorTicker = undefined;
        }
        if (lit) {
            for (let i = 0; i < 8; i++) {
                setPixel([oldWordStart[0], oldWordStart[1] + i], 0);
            }
            lit = false;
        }
    }
    const stt = () => {
        oldWordStart = wordStarts[wordStarts.length - 1];
        if (oldWordStart[0] < pixelWidth) {
            for (let i = 0; i < 8; i++) {
                setPixel([oldWordStart[0], oldWordStart[1] + i], 1);
            }
            lit = true;
        }
        cursorTicker = setInterval(ref, 500);
    }
    stt();
    return [res, stt];
})();
(() => {
    for (let c of "Press a key to type") {
        pixelmap2display(num2pixelmap(data[c]));
    }
})()