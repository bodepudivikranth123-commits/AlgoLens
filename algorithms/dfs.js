window.algorithm={

    type:"graph",

    name:"Depth First Search (DFS)",

    difficulty:"Easy",

    timeComplexity:"O(V + E)",

    spaceComplexity:"O(V)",

    cpp:`class Solution{
public:

    void dfs(int node, vector<int> adj[], vector<bool>& vis){

        vis[node]=true;

        cout<<node<<" ";

        for(int next:adj[node]){

            if(!vis[next]){

                dfs(next,adj,vis);

            }

        }

    }

};`,

    pseudo:`DFS(node)

Mark node as visited

Visit node

for every neighbour

    if not visited

        DFS(neighbour)`,

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

        const traversedEdges=[];
        const callStack=[];

        const start=vertices[0];

        steps.push({

            nodes:[...vertices],

            edges:[...edges],

            current:start,

            visited:[...visited],

            traversedEdges:[...traversedEdges],

            variables:{

                recursionStack:start

            },

            explanation:`
Starting DFS from ${start}

Traversal :
Empty
`

        });

        function dfs(node){
            callStack.push(node);

            seen.add(node);

            visited.push(node);

            steps.push({

                nodes:[...vertices],

                edges:[...edges],

                current:node,

                visited:[...visited],

                traversedEdges:[...traversedEdges],

                variables:{

                  recursionStack:callStack.join(" → ")
                },

                explanation:`
Visited Node : ${node}

Traversal :
${visited.join(" → ")}
`

            });

            graph[node].forEach(neighbour=>{
                
                if(!seen.has(neighbour)){

                    traversedEdges.push([node,neighbour]);

                    steps.push({

                        nodes:[...vertices],

                        edges:[...edges],

                        current:node,

                        visited:[...visited],

                        traversedEdges:[...traversedEdges],

                        variables:{

                            recursionStack:callStack.join(" → ")
                        },

                        explanation:`
Recursively moving from ${node} to ${neighbour}.
`

                    });

                    dfs(neighbour);

                    steps.push({

                        nodes:[...vertices],

                        edges:[...edges],

                        current:node,

                        visited:[...visited],

                        traversedEdges:[...traversedEdges],

                        variables:{

                            recursionStack:callStack.join(" → ")

                        },

                        explanation:`
Returning to node ${node}.
`

                    });

                }

            });
 callStack.pop();
        }

        dfs(start);

        steps.push({

            nodes:[...vertices],

            edges:[...edges],

            current:null,

            visited:[...visited],

            traversedEdges:[...traversedEdges],

            variables:{

                recursionStack:"Empty"

            },

            explanation:`
DFS Traversal Completed

Final Traversal :

${visited.join(" → ")}
`

        });

        return steps;

    }

};