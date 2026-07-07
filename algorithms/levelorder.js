class TreeNode{

    constructor(value){

        this.value=value;

        this.left=null;

        this.right=null;

    }

}

function insert(root,value){

    if(root===null){

        return new TreeNode(value);

    }

    if(value<root.value){

        root.left=insert(root.left,value);

    }
    else{

        root.right=insert(root.right,value);

    }

    return root;

}

window.algorithm={

    type:"tree",

    name:"BST Level Order Traversal",

    difficulty:"Easy",

    timeComplexity:"O(n)",

    spaceComplexity:"O(n)",

    cpp:`class Solution{
public:

    void levelOrder(TreeNode* root){

        if(root==NULL) return;

        queue<TreeNode*> q;

        q.push(root);

        while(!q.empty()){

            TreeNode* node=q.front();

            q.pop();

            cout<<node->data<<" ";

            if(node->left)

                q.push(node->left);

            if(node->right)

                q.push(node->right);

        }

    }

};`,

    pseudo:`LevelOrder(root)

Create Queue

Push root

while Queue is not empty

    node = pop()

    Visit(node)

    if(node->left)

        push(node->left)

    if(node->right)

        push(node->right)`,

    generateSteps(array){

        let root=null;

        array.forEach(value=>{

            root=insert(root,value);

        });

        const steps=[];

        const output=[];

        const queue=[];

        queue.push(root);

        steps.push({

            root:root,

            current:root.value,

            variables:{

                currentNode:root.value,

                queue:queue.map(node=>node.value).join(" → ")

            },

            explanation:`
Starting Level Order Traversal

Traversal Rule :
Level by Level

Queue :
${queue.map(node=>node.value).join(" → ")}

Traversal Output :
Empty
`,

            traversalOutput:""

        });

        while(queue.length){

            const node=queue.shift();

            steps.push({

                root:root,

                current:node.value,

                variables:{

                    currentNode:node.value,

                    queue:queue.map(n=>n.value).join(" → ") || "Empty"

                },

                explanation:`
Dequeued Node : ${node.value}

Now visiting the node.
`,

                traversalOutput:output.join(" → ")

            });

            output.push(node.value);

            steps.push({

                root:root,

                current:node.value,

                variables:{

                    currentNode:node.value,

                    queue:queue.map(n=>n.value).join(" → ") || "Empty"

                },

                explanation:`
Visited Node : ${node.value}

Traversal Output :
${output.join(" → ")}
`,

                traversalOutput:output.join(" → ")

            });

            if(node.left){

                queue.push(node.left);

                steps.push({

                    root:root,

                    current:node.left.value,

                    variables:{

                        currentNode:node.left.value,

                        queue:queue.map(n=>n.value).join(" → ")

                    },

                    explanation:`
Added LEFT child (${node.left.value}) to the queue.
`,

                    traversalOutput:output.join(" → ")

                });

            }

            if(node.right){

                queue.push(node.right);

                steps.push({

                    root:root,

                    current:node.right.value,

                    variables:{

                        currentNode:node.right.value,

                        queue:queue.map(n=>n.value).join(" → ")

                    },

                    explanation:`
Added RIGHT child (${node.right.value}) to the queue.
`,

                    traversalOutput:output.join(" → ")

                });

            }

        }

        steps.push({

            root:root,

            current:-1,

            variables:{

                queue:"Empty"

            },

            explanation:`
Traversal Completed

Final Level Order Traversal :

${output.join(" → ")}
`,

            traversalOutput:output.join(" → ")

        });

        return steps;

    }

};