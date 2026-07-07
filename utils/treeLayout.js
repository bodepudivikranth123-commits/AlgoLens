function computeTreeLayout(root){

    let nextX=0;

    const nodes=[];
    const edges=[];

    function dfs(node,depth){

        if(node===null) return;

        dfs(node.left,depth+1);

        node.layoutX=nextX++;
        node.layoutY=depth;

        nodes.push(node);

        if(node.left){

            edges.push({
                from:node,
                to:node.left
            });

        }

        if(node.right){

            edges.push({
                from:node,
                to:node.right
            });

        }

        dfs(node.right,depth+1);

    }

    dfs(root,0);

    const HSPACE=80;
    const VSPACE=110;

    const width=Math.max(1,nextX-1)*HSPACE;

    const startX=(1200-width)/2;

    nodes.forEach(node=>{

        node.x=startX+node.layoutX*HSPACE;

        node.y=80+node.layoutY*VSPACE;

    });

    return{

        nodes,
        edges

    };

}