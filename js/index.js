const barsContainer=document.getElementById("barsContainer");

const playBtn=document.getElementById("playBtn");

const restartBtn=document.getElementById("restartBtn");

const status=document.getElementById("demoStatus");

const speedSlider=document.getElementById("speedSlider");

let array=[];

let speed=400;
let isSorting=false;
let stopSorting=false;

function generateArray(){

    array=[];

    for(let i=0;i<10;i++){

        array.push(Math.floor(Math.random()*220)+40);

    }

    drawBars();

}

function drawBars(a=-1,b=-1,sorted=[]){

    barsContainer.innerHTML="";

    array.forEach((value,index)=>{

        const wrapper=document.createElement("div");

wrapper.className="bar-wrapper";

const label=document.createElement("span");

label.className="bar-value";

label.textContent=value;

const bar=document.createElement("div");

bar.className="bar";

if(index===a || index===b)
    bar.classList.add("compare");

if(sorted.includes(index))
    bar.classList.add("sorted");

bar.style.height=value+"px";

wrapper.appendChild(label);

wrapper.appendChild(bar);

barsContainer.appendChild(wrapper);

    });

}

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

async function bubbleSort(){

    if(isSorting) return;

    isSorting=true;

    stopSorting=false;

    let sorted=[];

    for(let i=0;i<array.length;i++){
        if(stopSorting){

           isSorting=false;

          return;

        }

        for(let j=0;j<array.length-i-1;j++){
            
            if(stopSorting){

              isSorting=false;

              return;

            }

            status.textContent=`Comparing ${array[j]} and ${array[j+1]}`;

            drawBars(j,j+1,sorted);

            await sleep(speed);

            if(array[j]>array[j+1]){

                [array[j],array[j+1]]=[array[j+1],array[j]];

                drawBars(j,j+1,sorted);

                await sleep(speed);

            }

        }

        sorted.push(array.length-i-1);

        drawBars(-1,-1,sorted);

    }

    status.textContent="✔ Array Sorted";

    await sleep(2000);

    generateArray();

    isSorting=false;

    bubbleSort();

}

playBtn.onclick=()=>{

    if(!isSorting)

        bubbleSort();

};
restartBtn.onclick=()=>{

    stopSorting=true;

    setTimeout(()=>{

        generateArray();

        bubbleSort();

    },50);

};

speedSlider.oninput=()=>{

    speed=700-speedSlider.value*100;

};

generateArray();
bubbleSort();