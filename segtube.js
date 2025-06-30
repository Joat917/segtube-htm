(()=>{console.log("JS loading...")})()
const segtubeData={
    "0":[1,1,1,1,1,1,0],
    "1":[1,1,0,0,0,0,0],
    "2":[1,0,1,1,0,1,1],
    "3":[1,1,1,0,0,1,1],
    "4":[1,1,0,0,1,0,1],
    "5":[0,1,1,0,1,1,1],
    "6":[0,1,1,1,1,1,1],
    "7":[1,1,0,0,0,1,0],
    "8":[1,1,1,1,1,1,1],
    "9":[1,1,1,0,1,1,1],
    "A":[1,1,0,1,1,1,1],
    "B":[0,1,1,1,1,0,1],
    "C":[0,0,1,1,1,1,0],
    "D":[1,1,1,1,0,0,1],
    "E":[0,0,1,1,1,1,1],
    "F":[0,0,0,1,1,1,1],
    "H":[1,1,0,1,1,0,1],
    "J":[1,1,1,0,0,0,0],
    "L":[0,0,1,1,1,0,0],
    "N":[0,1,0,1,0,0,1],
    "O":[0,1,1,1,0,0,1],
    "P":[1,0,0,1,1,1,1],
    "Q":[1,1,0,0,1,1,1],
    "R":[0,0,0,1,0,0,1],
    "U":[1,1,1,1,1,0,0],
    "Y":[1,1,1,0,1,0,1],
    "_":[0,0,1,0,0,0,0],
    "-":[0,0,0,0,0,0,1],
    "=":[0,0,1,0,0,0,1],
    "`":[0,0,0,0,0,1,0],
    "T":[0,0,1,1,1,0,1],
    "G":[1,1,1,0,1,1,1],
    "I":[1,1,0,0,0,0,0],
    "S":[0,1,1,0,1,1,1],
    "Z":[1,0,1,1,0,1,1]
}

const existing_tubes=new Object();
const get_digtube=(tubeID, parent)=>{
    const result=existing_tubes[tubeID];
    if(result===undefined){
        const new_result=new DigTube(tubeID, parent);
        existing_tubes[tubeID]=new_result;
        return new_result;
    }else{
        return result;
    }
}
class DigTube{
    constructor(tubeID, parent){
        console.assert(tubeID!==undefined);
        if(parent===undefined){
            parent=document.body;
        }
        this.tubeID=tubeID;
        this.ele_root=document.createElement("div");
        this.ele_root.classList.add('seg_container');

        this.ele_bg=document.createElement("div");
        this.ele_bg.classList.add('seg_bg');
        this.ele_root.appendChild(this.ele_bg);

        this.ele_tubes=[];
        const arrl=[104,104,12,0,0,12,12];
        const arrt=[12,116,208,116,12,0,104];
        const arrv=[1,1,0,1,1,0,0];
        for(let i=0;i<7;i++){
            const ele=document.createElement("div");
            ele.classList.add('seg');
            if(arrv[i]){ele.classList.add('vert')};
            ele.style.setProperty('--left', arrl[i]+'px');
            ele.style.setProperty('--top', arrt[i]+'px');
            this.ele_tubes.push(ele);
            this.ele_root.appendChild(ele);

            ele.addEventListener("click", ()=>{
                if(ele.classList.contains('hide')){
                    ele.classList.remove('hide');
                }else{
                    ele.classList.add('hide');
                }
            })
        }
        parent.appendChild(this.ele_root);
    }

    get_stat(){
        const arr=[];
        for(const ele of this.ele_tubes){
            arr.push(ele.classList.contains('hide')?0:1);
        }
        return arr;
    }

    set_stat(stat){
        if(stat[6]===undefined){
            stat=segtubeData[(''+stat).toUpperCase()]
        }
        console.assert(stat!==undefined);
        console.assert(stat[6]!==undefined);
        for(let i=0;i<7;i++){
            if(stat[i]){
                this.ele_tubes[i].classList.remove('hide');
            }else{
                this.ele_tubes[i].classList.add('hide');
            }
        }
        return stat;
    }
};
(()=>{
    let i=191;
    for(const char of 'Hello_\nthere1'){
        if(char==='\n'){document.body.appendChild(document.createElement("br"));continue;}
        get_digtube(i++).set_stat(char);
    }
})();
(()=>{console.log("JS loaded!!!")})()