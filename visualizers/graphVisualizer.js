function renderGraph(step){

    const visualizer=document.getElementById("visualizer");
    visualizer.style.display="block";

visualizer.style.overflow="hidden";

visualizer.style.height="450px";
    visualizer.innerHTML="";

    const svgNS="http://www.w3.org/2000/svg";

    const svg=document.createElementNS(svgNS,"svg");

    svg.setAttribute("width","100%");

    svg.setAttribute("height","450");

    svg.setAttribute("viewBox","0 0 900 450");

    // ---------- NODE POSITIONS ----------

    const positions={};

    const total=step.nodes.length;

    const centerX=450;

    const centerY=220;

    const radius=150;

    step.nodes.forEach((node,index)=>{

        const angle=(2*Math.PI*index)/total-Math.PI/2;

        positions[node]={

            x:centerX+radius*Math.cos(angle),

            y:centerY+radius*Math.sin(angle)

        };

    });

    // ---------- DRAW EDGES ----------

    step.edges.forEach(([u,v])=>{

        const line=document.createElementNS(svgNS,"line");

        line.setAttribute("x1",positions[u].x);

        line.setAttribute("y1",positions[u].y);

        line.setAttribute("x2",positions[v].x);

        line.setAttribute("y2",positions[v].y);

        const traversed=step.traversedEdges.some(edge=>

            (edge[0]===u && edge[1]===v) ||

            (edge[0]===v && edge[1]===u)

        );

        line.setAttribute(

            "stroke",

            traversed ? "#22C55E" : "#94A3B8"

        );

        line.setAttribute(

            "stroke-width",

            traversed ? "4" : "2"

        );

        svg.appendChild(line);

    });

    // ---------- DRAW NODES ----------

    step.nodes.forEach(node=>{

        const circle=document.createElementNS(svgNS,"circle");

        circle.setAttribute("cx",positions[node].x);

        circle.setAttribute("cy",positions[node].y);

        circle.setAttribute("r","24");

        if(step.current===node){

            circle.setAttribute("fill","#EF4444");

        }
        else if(step.visited.includes(node)){

            circle.setAttribute("fill","#22C55E");

        }
        else{

            circle.setAttribute("fill","#2563EB");

        }

        circle.setAttribute("stroke","white");

        circle.setAttribute("stroke-width","3");

        svg.appendChild(circle);

        const text=document.createElementNS(svgNS,"text");

        text.setAttribute("x",positions[node].x);

        text.setAttribute("y",positions[node].y+5);

        text.setAttribute("text-anchor","middle");

        text.setAttribute("fill","white");

        text.setAttribute("font-size","15");

        text.setAttribute("font-weight","700");

        text.textContent=node;

        svg.appendChild(text);

    });

    visualizer.appendChild(svg);

}