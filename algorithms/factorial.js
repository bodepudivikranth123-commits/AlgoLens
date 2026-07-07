function assignPositions(nodes){

    let currentX=100;

    function dfs(id){

        const node=nodes.find(n=>n.id===id);

        if(!node) return;

        const children=nodes.filter(n=>n.parent===id);

        children.forEach(child=>{

            dfs(child.id);

        });

        if(children.length===0){

            node.x=currentX;

            currentX+=180;

        }

        else{

            node.x=(

                children[0].x+

                children[children.length-1].x

            )/2;

        }

    }

    const root=nodes.find(n=>n.parent===null);

    dfs(root.id);

    nodes.forEach(node=>{

        node.y=80+node.level*110;

    });

}

window.algorithm={

    type:"recursion",

    name:"Factorial",

    difficulty:"Easy",

    timeComplexity:"O(n)",

    spaceComplexity:"O(n)",

    cpp:`int factorial(int n){

    if(n==1)

        return 1;

    return n*factorial(n-1);

}`,

    pseudo:`factorial(n)

if n==1

    return 1

return n*factorial(n-1)`,

    generateSteps(n){

        const steps=[];

        const nodes=[];

        let nodeId=0;

        function saveStep(explanation){

          assignPositions(nodes);

          steps.push({

           nodes:JSON.parse(JSON.stringify(nodes)),

           explanation,

           variables:{}

           });

        }

        function factorial(num,parent=null,level=0){

            const node={

                id:++nodeId,

                n:num,

                parent:parent,

                level:level,

                state:"active",

                value:null

            };

            nodes.push(node);

            saveStep(`Calling factorial(${num})`);

            if(num===1){

                node.value=1;

                node.state="computed";

                saveStep("Base Case Reached\nfactorial(1) = 1");

                return 1;

            }

            const ans=num*factorial(

                num-1,

                node.id,

                level+1

            );

            node.value=ans;

            node.state="computed";

            saveStep(

                `Returning ${ans} from factorial(${num})`

            );

            return ans;

        }

        factorial(n);

        saveStep("Factorial Computation Completed");

        return steps;

    }

};