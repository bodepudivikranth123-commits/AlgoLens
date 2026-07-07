// ===========================================
// ALGORITHMLENS WORKSPACE ENGINE - PART 1
// ===========================================

// ---------- URL PARAMETER ----------

const params = new URLSearchParams(window.location.search);

const algoName = params.get("algo") || "bubble";


// ---------- LOAD ALGORITHM FILE ----------

const script = document.createElement("script");

script.src = `../algorithms/${algoName}.js`;

script.onload = initializeWorkspace;

document.body.appendChild(script);

// ---------- GLOBAL VARIABLES ----------

let steps = [];

let currentStep = 0;

let timer = null;

let animationSpeed = 500;
let currentArray = [];

// ---------- DOM ----------

const algorithmName = document.getElementById("algorithmName");

const difficulty = document.getElementById("difficulty");

const timeComplexity = document.getElementById("timeComplexity");

const spaceComplexity = document.getElementById("spaceComplexity");

const codeArea = document.getElementById("codeArea");

const input = document.getElementById("arrayInput");

// ---------- INITIALIZE ----------

function initializeWorkspace(){

    // Load algorithm information

    algorithmName.textContent = algorithm.name;

    difficulty.textContent = algorithm.difficulty;

    timeComplexity.textContent = algorithm.timeComplexity;

    spaceComplexity.textContent = algorithm.spaceComplexity;

    // Show C++ code by default

    showCpp();
const searchingAlgorithms=["linear","binary"];

const targetContainer=document.getElementById("targetContainer");

if(searchingAlgorithms.includes(algoName)){

    targetContainer.style.display="flex";

}
else{

    targetContainer.style.display="none";

}
const visualizerScript=document.createElement("script");

switch(algorithm.type){

    case "array":

        visualizerScript.src="../visualizers/arrayVisualizer.js";

        break;

    case "tree":

        visualizerScript.src="../visualizers/treeVisualizer.js";

        break;

    case "graph":

        visualizerScript.src="../visualizers/graphVisualizer.js";

        break;

    case "recursion":

       visualizerScript.src="../visualizers/recursionVisualizer.js";

    break;

}

document.body.appendChild(visualizerScript);
    visualizerScript.onload=()=>{

if(algorithm.type==="graph"){

    prepareSteps();

}
else{

    createRandomArray();

}
    initializeButtons();

};

}

// ===========================================
// CODE TAB
// ===========================================

function showCpp(){

    codeArea.textContent = algorithm.cpp;

    Prism.highlightElement(codeArea);

}

function showPseudo(){

    codeArea.textContent = algorithm.pseudo;

    Prism.highlightElement(codeArea);

}

const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(button=>{

    button.addEventListener("click",()=>{

        tabs.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        if(button.dataset.tab==="cpp"){

            showCpp();

        }
        else{

            showPseudo();

        }

    });

});

// ===========================================
// ARRAY GENERATION
// ===========================================

function setArray(arr){

    currentArray=[...arr];

    input.value=currentArray.join(",");

    const targetInput=document.getElementById("targetInput");

    if(targetInput){

        targetInput.value="";

    }

    prepareSteps();

}

function createRandomArray(){

    const arr=[];

    const used=new Set();

    const size=(algorithm.type==="tree") ? 7 : 8;

    if(algorithm.type==="recursion"){

    const n=Math.floor(Math.random()*6)+3;

    input.value=n;

    prepareSteps();

    return;

    }

    while(arr.length<size){

        const value=Math.floor(Math.random()*90)+10;

        if(used.has(value)) continue;

        used.add(value);

        arr.push(value);

    }

    setArray(arr);

}

// ===========================================
// BUTTON EVENTS
// ===========================================

function initializeButtons(){
    

    document
.getElementById("randomBtn")
.addEventListener("click",()=>{

    if(algorithm.type==="graph"){

        prepareSteps();

    }

    else{

        createRandomArray();

    }

});
    document
.getElementById("exampleBtn")
.addEventListener("click",()=>{

    if(algorithm.type==="graph"){

        window.currentGraph=createExampleGraph();

        prepareSteps();

    }

    else if(algorithm.type==="tree"){

        setArray([50,30,70,20,40,60,80]);

    }
    else if(algorithm.type==="recursion"){

        input.value=5;

        prepareSteps();

    }
    else{

        setArray([5,3,8,1,7]);

    }

});


    const targetBtn=document.getElementById("targetBtn");

    if(targetBtn){

       targetBtn.addEventListener("click",()=>{

        if(currentArray.length===0) return;

        const index=Math.floor(Math.random()*currentArray.length);

        document.getElementById("targetInput").value=currentArray[index];

        prepareSteps();

       });

    }

}

// ===========================================
// PREPARE ANIMATION STEPS
// ===========================================

function prepareSteps(){

    if(currentArray.length===0){

        currentArray=input.value

        .split(",")

        .map(Number)

        .filter(num=>!isNaN(num));

    }

    if(currentArray.length===0){

        return;

    }

    const targetInput=document.getElementById("targetInput");

    const target=(targetInput && targetInput.value!=="")
        ? Number(targetInput.value)
        : null;

    if(algorithm.type==="array"){

        steps=algorithm.generateSteps(currentArray,target);

    }

    else if(algorithm.type==="tree"){

        steps=algorithm.generateSteps(currentArray);

    }

    else if(algorithm.type==="graph"){

        steps=algorithm.generateSteps();

    }
    else if(algorithm.type==="recursion"){

         const n=Number(input.value);

        steps=algorithm.generateSteps(n);

}

    currentStep=0;

    renderStep();

}

// ===========================================
// RENDER CURRENT STEP
// ===========================================

const visualizer = document.getElementById("visualizer");

const variablesBox = document.getElementById("variables");

const explanationBox = document.getElementById("explanation");

function renderStep(){

    if(steps.length===0) return;

    const step=steps[currentStep];

    switch(algorithm.type){

        case "array":

            renderArray(step);

            break;

        case "tree":

            renderTree(step);

            break;

        case "graph":

            renderGraph(step);

            break;
        case "recursion":

           renderRecursion(step);

           break;   

    }

    let variableHTML="";

    for(const key in step.variables){

        variableHTML+=`<p><strong>${key}</strong> : ${step.variables[key]}</p>`;

    }

    variablesBox.innerHTML=variableHTML;

    explanationBox.textContent=step.explanation;

}

// ===========================================
// PLAY
// ===========================================

function playAnimation(){

    if(timer) return;

    timer=setInterval(()=>{

        if(currentStep>=steps.length-1){

            clearInterval(timer);

            timer=null;

            return;

        }

        currentStep++;

        renderStep();

    },animationSpeed);

}

// ===========================================
// PAUSE
// ===========================================

function pauseAnimation(){

    clearInterval(timer);

    timer=null;

}

// ===========================================
// NEXT
// ===========================================

function nextStep(){

    if(currentStep<steps.length-1){

        currentStep++;

        renderStep();

    }

}

// ===========================================
// PREVIOUS
// ===========================================

function previousStep(){

    if(currentStep>0){

        currentStep--;

        renderStep();

    }

}

// ===========================================
// RESET
// ===========================================

function resetAnimation(){

    pauseAnimation();

    currentStep=0;

    renderStep();

}

// ===========================================
// BUTTON EVENTS
// ===========================================

document

.getElementById("playBtn")

.addEventListener("click",playAnimation);

document

.getElementById("pauseBtn")

.addEventListener("click",pauseAnimation);

document

.getElementById("nextBtn")

.addEventListener("click",nextStep);

document

.getElementById("previousBtn")

.addEventListener("click",previousStep);

document

.getElementById("resetBtn")

.addEventListener("click",resetAnimation);

// ===========================================
// SPEED
// ===========================================

document

.getElementById("speedSlider")

.addEventListener("input",function(){

    const value=Number(this.value);

    animationSpeed=1000/value;

    if(timer){

        pauseAnimation();

        playAnimation();

    }

});