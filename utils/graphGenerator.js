function createExampleGraph(){

    return{

        vertices:["A","B","C","D","E","F","G"],

        graph:{

            A:["B","C","D"],

            B:["A","E","F"],

            C:["A"],

            D:["A","G"],

            E:["B"],

            F:["B"],

            G:["D"]

        },

        edges:[

            ["A","B"],
            ["A","C"],
            ["A","D"],
            ["B","E"],
            ["B","F"],
            ["D","G"]

        ]

    };

}

function generateRandomGraph(){

    const vertices=[];

    const graph={};

    const edges=[];

    const n=Math.floor(Math.random()*3)+6;

    for(let i=0;i<n;i++){

        const v=String.fromCharCode(65+i);

        vertices.push(v);

        graph[v]=[];

    }

    // Connected graph

    for(let i=1;i<n;i++){

        const parent=Math.floor(Math.random()*i);

        const u=vertices[parent];

        const v=vertices[i];

        graph[u].push(v);

        graph[v].push(u);

        edges.push([u,v]);

    }

    // Extra edges

    const extra=Math.floor(Math.random()*3)+2;

    let added=0;

    while(added<extra){

        const u=vertices[Math.floor(Math.random()*n)];

        const v=vertices[Math.floor(Math.random()*n)];

        if(u===v) continue;

        if(graph[u].includes(v)) continue;

        graph[u].push(v);

        graph[v].push(u);

        edges.push([u,v]);

        added++;

    }

    return{

        vertices,

        graph,

        edges

    };

}