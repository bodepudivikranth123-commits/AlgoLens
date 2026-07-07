function renderArray(step){

    const visualizer=document.getElementById("visualizer");

visualizer.innerHTML="";

visualizer.style.display="flex";

visualizer.style.alignItems="flex-end";

visualizer.style.justifyContent="center";

visualizer.style.gap="8px";

visualizer.style.overflowX="auto";

visualizer.style.overflowY="hidden";

visualizer.style.height="350px";
    visualizer.innerHTML="";

    const maxValue=Math.max(...step.array,1);

    step.array.forEach((value,index)=>{

        const bar=document.createElement("div");

        bar.className="bar";

        bar.style.height=(value/maxValue)*280+"px";

        bar.textContent=value;

        if(step.compare && step.compare.includes(index)){

            if(step.swap){

                bar.classList.add("swap");

            }
            else{

                bar.classList.add("compare");

            }

        }

        visualizer.appendChild(bar);

    });

}