const algo1=document.getElementById("algo1");
const algo2=document.getElementById("algo2");

const compareBtn=document.getElementById("compareBtn");

const leftCard=document.getElementById("leftCard");
const rightCard=document.getElementById("rightCard");

function openWorkspace(algo){

    window.location.href=`workspace.html?algo=${algo}`;

}
function createCard(algo){

    return `

        <h2>${algo.name}</h2>

        <div class="row">
            <span class="label">Category</span>
            <span class="value">${algo.category}</span>
        </div>

        <div class="row">
            <span class="label">Time Complexity</span>
            <span class="value">${algo.time}</span>
        </div>

        <div class="row">
            <span class="label">Space Complexity</span>
            <span class="value">${algo.space}</span>
        </div>

        <div class="row">
            <span class="label">Best Case</span>
            <span class="value">${algo.best}</span>
        </div>

        <div class="row">
            <span class="label">Average Case</span>
            <span class="value">${algo.average}</span>
        </div>

        <div class="row">
            <span class="label">Worst Case</span>
            <span class="value">${algo.worst}</span>
        </div>

        <div class="row">
            <span class="label">Stable</span>
            <span class="value">${algo.stable}</span>
        </div>

        <div class="row">
            <span class="label">In-place</span>
            <span class="value">${algo.inplace}</span>
        </div>

        <div class="row">
            <span class="label">Recursive</span>
            <span class="value">${algo.recursive}</span>
        </div>

        <div class="row">
            <span class="label">Description</span>
        </div>

        <p style="margin-top:10px;color:#475569;">
            ${algo.description}
        </p>

        <div class="row" style="margin-top:20px;">
            <span class="label">Applications</span>
        </div>

        <ul class="list">

            ${algo.applications.map(app=>`<li>${app}</li>`).join("")}

        </ul>
        <div style="margin-top:30px;text-align:center;">

       <button class="visualize-btn"
          onclick="openWorkspace('${algo.id}')">

          Visualize Algorithm

        </button>

</div>

    `;
}

compareBtn.addEventListener("click",()=>{

    if(algo1.value===algo2.value){

    alert("Please select two different algorithms.");

    return;

}

    if(algo1.value==="" || algo2.value===""){

        alert("Please select both algorithms.");

        return;
    }

    const first=algorithms[algo1.value];

    const second=algorithms[algo2.value];

    leftCard.innerHTML=createCard(first);

    rightCard.innerHTML=createCard(second);

});