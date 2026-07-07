function renderRecursion(step){

    const visualizer=document.getElementById("visualizer");

    visualizer.innerHTML="";

    visualizer.style.display="block";
    visualizer.style.overflow="auto";
    visualizer.style.height="600px";

    const maxLevel=Math.max(...step.nodes.map(node=>node.level));

    const svgHeight=(maxLevel+2)*130;

    const svgNS="http://www.w3.org/2000/svg";

    const svg=document.createElementNS(svgNS,"svg");

    svg.setAttribute("width","100%");
    svg.setAttribute("height",svgHeight);
const maxX = Math.max(...step.nodes.map(node => node.x));
const maxY = Math.max(...step.nodes.map(node => node.y));

svg.setAttribute("viewBox", `0 0 ${maxX + 200} ${maxY + 120}`);
    const nodeMap={};

    // ---------- POSITION NODES ----------

    step.nodes.forEach(node=>{

        node.x;

        node.y;

        nodeMap[node.id]=node;

    });

    // ---------- DRAW EDGES ----------

    step.nodes.forEach(node=>{

        if(node.parent===null) return;

        const parent=nodeMap[node.parent];

        if(!parent) return;

        const line=document.createElementNS(svgNS,"line");

        line.setAttribute("x1",parent.x);

        line.setAttribute("y1",parent.y+30);

        line.setAttribute("x2",node.x);

        line.setAttribute("y2",node.y-30);

        line.setAttribute("stroke","#94A3B8");

        line.setAttribute("stroke-width","3");

        svg.appendChild(line);

    });

    // ---------- DRAW NODES ----------

    step.nodes.forEach(node=>{

        const group=document.createElementNS(svgNS,"g");

        const rect=document.createElementNS(svgNS,"rect");

        rect.setAttribute("x",node.x-90);

        rect.setAttribute("y",node.y-30);

        rect.setAttribute("width","180");

        rect.setAttribute("height","60");

        rect.setAttribute("rx","12");

        if(node.state==="active"){

            rect.setAttribute("fill","#EF4444");

        }

        else if(node.state==="computed"){

            rect.setAttribute("fill","#22C55E");

        }

        else{

            rect.setAttribute("fill","#2563EB");

        }

        rect.setAttribute("stroke","white");

        rect.setAttribute("stroke-width","3");

        group.appendChild(rect);

        const text=document.createElementNS(svgNS,"text");

        text.setAttribute("x",node.x);

        text.setAttribute("y",node.y-5);

        text.setAttribute("text-anchor","middle");

        text.setAttribute("fill","white");

        text.setAttribute("font-size","16");

        text.setAttribute("font-weight","700");

        text.textContent = node.label || `f(${node.n})`;

        group.appendChild(text);

        if(node.value!==null){

            const value=document.createElementNS(svgNS,"text");

            value.setAttribute("x",node.x);

            value.setAttribute("y",node.y+18);

            value.setAttribute("text-anchor","middle");

            value.setAttribute("fill","white");

            value.setAttribute("font-size","15");

            value.setAttribute("font-weight","700");

            value.textContent=`= ${node.value}`;

            group.appendChild(value);

        }

        svg.appendChild(group);

    });

    visualizer.appendChild(svg);

}