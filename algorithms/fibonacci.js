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
window.algorithm = {

    type: "recursion",

    name: "Fibonacci Recursion",

    difficulty: "Easy",

    timeComplexity: "O(2^n)",

    spaceComplexity: "O(n)",

    cpp: `int fib(int n){
    if(n<=1) return n;
    return fib(n-1) + fib(n-2);
}`,

    pseudo: `fib(n)
if n<=1 return n
return fib(n-1) + fib(n-2)`,

    generateSteps(n){

        const steps=[];
        const nodes=[];
        let id=0;

        function saveStep(msg){

    assignPositions(nodes);

    steps.push({

        nodes: JSON.parse(JSON.stringify(nodes)),

        explanation: msg,

        variables:{}

    });

}

        function fib(num, parent=null, level=0){

            const node = {

                id: ++id,
                n: num,
                parent,
                level,
                state: "active",
                value: null,
                label: `fib(${num})`

            };

            nodes.push(node);

            saveStep(`Calling fib(${num})`);

            if(num <= 1){

                node.value = num;
                node.state = "computed";

                saveStep(`Base case fib(${num}) = ${num}`);

                return num;
            }

            const left = fib(num - 1, node.id, level + 1);
            const right = fib(num - 2, node.id, level + 1);

            node.value = left + right;
            node.state = "computed";

            saveStep(`Returning fib(${num}) = ${node.value}`);

            return node.value;
        }

        fib(n);

        saveStep("Fibonacci computation completed");

        return steps;
    }
};