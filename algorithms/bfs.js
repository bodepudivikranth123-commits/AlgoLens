window.algorithm={

    type:"graph",

    name:"Breadth First Search (BFS)",

    difficulty:"Easy",

    timeComplexity:"O(V + E)",

    spaceComplexity:"O(V)",

    cpp:`class Solution{
public:

    void bfs(int start, vector<int> adj[]){

        vector<bool> vis(adj->size(),false);

        queue<int> q;

        q.push(start);

        vis[start]=true;

        while(!q.empty()){

            int node=q.front();

            q.pop();

            cout<<node<<" ";

            for(int next:adj[node]){

                if(!vis[next]){

                    vis[next]=true;

                    q.push(next);

                }

            }

        }

    }

};`,

    pseudo:`BFS(start)

Create Queue

Mark start as visited

Push start

while Queue is not empty

    node = pop()

    Visit node

    for every neighbour

        if not visited

            mark visited

            push neighbour`,

    generateSteps(){

const graphData=

window.currentGraph ||

generateRandomGraph();

window.currentGraph=null;
        const graph=graphData.graph;

        const vertices=graphData.vertices;

        const edges=graphData.edges;

        const steps=[];

        const visited=[];

        const seen=new Set();

        const queue=[];

        const traversedEdges=[];

        const start=vertices[0];

        queue.push(start);

        seen.add(start);

        steps.push({

            nodes:[...vertices],

            edges:[...edges],

            current:start,

            visited:[...visited],

            traversedEdges:[...traversedEdges],

            variables:{

                queue:queue.join(" → ")

            },

            explanation:`
Starting BFS from ${start}


Traversal :
Empty
`

        });

        while(queue.length){

            const node=queue.shift();

            visited.push(node);

            steps.push({

                nodes:[...vertices],

                edges:[...edges],

                current:node,

                visited:[...visited],

                traversedEdges:[...traversedEdges],

                variables:{

                    queue:queue.join(" → ")

                },

                explanation:`
Visiting Node : ${node}

Traversal :
${visited.join(" → ")}
`

            });

            graph[node].forEach(neighbour=>{

                if(!seen.has(neighbour)){

                    seen.add(neighbour);

                    queue.push(neighbour);

                    traversedEdges.push([node,neighbour]);

                    steps.push({

                        nodes:[...vertices],

                        edges:[...edges],

                        current:neighbour,

                        visited:[...visited],

                        traversedEdges:[...traversedEdges],

                        variables:{

                            queue:queue.join(" → ")

                        },

                        explanation:`
Discovered Node : ${neighbour}



Traversal :
${visited.join(" → ")}
`

                    });

                }

            });

        }

        steps.push({

            nodes:[...vertices],

            edges:[...edges],

            current:null,

            visited:[...visited],

            traversedEdges:[...traversedEdges],

            variables:{

                queue:"Empty"

            },

            explanation:`
BFS Traversal Completed

Final Traversal :

${visited.join(" → ")}
`

        });

        return steps;

    }

};