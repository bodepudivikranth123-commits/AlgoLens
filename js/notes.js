const algorithmList=document.getElementById("algorithmList");

const noteContent=document.getElementById("noteContent");

const searchBox=document.getElementById("searchBox");

const category=document.getElementById("category");


loadAlgorithms();

searchBox.addEventListener("input",loadAlgorithms);

category.addEventListener("change",loadAlgorithms);

let currentCpp="";
let currentPseudo="";

function loadAlgorithms(){

    algorithmList.innerHTML="";

    const search=searchBox.value.toLowerCase();

    const selectedCategory=category.value;

    Object.keys(notes).forEach(key=>{

        const algo=notes[key];

        if(
            algo.title.toLowerCase().includes(search) &&
            (selectedCategory==="All" ||
             algo.category===selectedCategory)
        ){

            const div=document.createElement("div");

            div.className="algorithm";

            div.textContent=algo.title;

            div.onclick=()=>{

                document.querySelectorAll(".algorithm")
                .forEach(item=>item.classList.remove("active"));

                div.classList.add("active");

                showNote(key);

            };

            algorithmList.appendChild(div);

        }

    });

}

function showNote(key){

    const algo=notes[key];

   noteContent.innerHTML=`

<h2>${algo.title}</h2>

<div class="section">

<h3>Definition</h3>

<p>${algo.definition}</p>

</div>

<div class="section">

<h3>Algorithm</h3>

<ul>

${algo.algorithm.map(step=>

`<li>${step}</li>`

).join("")}

</ul>

</div>

<div class="section">

<h3>Implementation</h3>

<section class="code-section">

<div class="code-header">

<h2>Code</h2>

<div class="tabs">

<button
class="tab-btn active"
onclick="showCpp(this)">

C++

</button>

<button
class="tab-btn"
onclick="showPseudo(this)">

Pseudo Code

</button>

</div>

</div>

<pre><code
id="codeArea"
class="language-cpp"></code></pre>

</section>

</div>

<div class="section">

<h3>Advantages</h3>

<ul>

${algo.advantages.map(item=>

`<li>${item}</li>`

).join("")}

</ul>

</div>

<div class="section">

<h3>Disadvantages</h3>

<ul>

${algo.disadvantages.map(item=>

`<li>${item}</li>`

).join("")}

</ul>

</div>

<div class="section">

<h3>Applications</h3>

<ul>

${algo.applications.map(item=>

`<li>${item}</li>`

).join("")}

</ul>

</div>

<button

class="visualizeBtn"

onclick="openWorkspace('${key}')">

Visualize Algorithm

</button>

`;
currentCpp = algo.cpp;
currentPseudo = algo.pseudo;

const code = document.getElementById("codeArea");
code.textContent = currentCpp;
}

function openWorkspace(algo){

    window.location.href=
    `../pages/workspace.html?algo=${algo}`;

}
function showCpp(btn){

    document.querySelectorAll(".tab-btn")
    .forEach(tab=>tab.classList.remove("active"));

    btn.classList.add("active");

    console.log(currentCpp);

    const code=document.getElementById("codeArea");

    code.className="language-cpp";

    code.textContent=currentCpp;

}
function showPseudo(btn){

    document.querySelectorAll(".tab-btn")
    .forEach(tab=>tab.classList.remove("active"));

    btn.classList.add("active");

    const code=document.getElementById("codeArea");

    code.className="language-none";

    code.textContent=currentPseudo;

}