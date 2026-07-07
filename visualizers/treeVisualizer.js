function renderTree(step){

    const visualizer=document.getElementById("visualizer");
    visualizer.style.display="block";

visualizer.style.overflow="auto";

visualizer.style.height="550px";
    visualizer.innerHTML="";

    const svgNS="http://www.w3.org/2000/svg";

    const svg=document.createElementNS(svgNS,"svg");

    svg.setAttribute("width","100%");

    let maxDepth=0;

    function depth(node,d){

        if(node==null) return;

        maxDepth=Math.max(maxDepth,d);

        depth(node.left,d+1);

        depth(node.right,d+1);

    }

    depth(step.root,0);

    const svgHeight=(maxDepth+2)*110;

    svg.setAttribute("height",svgHeight);

    svg.setAttribute("viewBox",`0 0 1400 ${svgHeight}`);
        function draw(node,x,y,gap){

        if(node==null) return;

        // LEFT EDGE

        if(node.left){

            const line=document.createElementNS(svgNS,"line");

            line.setAttribute("x1",x);

            line.setAttribute("y1",y);

            line.setAttribute("x2",x-gap);

            line.setAttribute("y2",y+100);

            line.setAttribute("stroke","#94A3B8");

            line.setAttribute("stroke-width","3");

            svg.appendChild(line);

        }

        // RIGHT EDGE

        if(node.right){

            const line=document.createElementNS(svgNS,"line");

            line.setAttribute("x1",x);

            line.setAttribute("y1",y);

            line.setAttribute("x2",x+gap);

            line.setAttribute("y2",y+100);

            line.setAttribute("stroke","#94A3B8");

            line.setAttribute("stroke-width","3");

            svg.appendChild(line);

        }

        // NODE

        const circle=document.createElementNS(svgNS,"circle");

        circle.setAttribute("cx",x);

        circle.setAttribute("cy",y);

        circle.setAttribute("r","28");

        if(node.value===step.current){

            circle.setAttribute("fill","#EF4444");

            circle.setAttribute("stroke","#FCA5A5");

            circle.setAttribute("stroke-width","4");

        }
        else{

            circle.setAttribute("fill","#2563EB");

            circle.setAttribute("stroke","#FFFFFF");

            circle.setAttribute("stroke-width","3");

        }

        svg.appendChild(circle);

        const text=document.createElementNS(svgNS,"text");

        text.setAttribute("x",x);

        text.setAttribute("y",y+6);

        text.setAttribute("text-anchor","middle");

        text.setAttribute("fill","white");

        text.setAttribute("font-size","16");

        text.setAttribute("font-weight","700");

        text.textContent=node.value;

        svg.appendChild(text);

        const nextGap=Math.max(gap/2,80);

        draw(node.left,x-gap,y+100,nextGap);

        draw(node.right,x+gap,y+100,nextGap);

    }
    draw(

    step.root,

    700,   // center of 1400px SVG

    70,

    280    // initial gap

);

visualizer.appendChild(svg);

}