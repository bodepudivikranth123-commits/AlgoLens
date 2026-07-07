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

    name:"BST Preorder Traversal",

    difficulty:"Easy",

    timeComplexity:"O(n)",

    spaceComplexity:"O(h)",

    cpp:`class Solution{
public:

    void preorder(TreeNode* root){

        if(root==NULL) return;

        cout<<root->data<<" ";

        preorder(root->left);

        preorder(root->right);

    }

};`,

    pseudo:`Preorder(root)

if(root==NULL)

    return

Visit(root)

Preorder(root->left)

Preorder(root->right)`,

    generateSteps(array){

        let root=null;

        array.forEach(value=>{

            root=insert(root,value);

        });
        const output=[];

        const steps=[];

        

function preorder(node){

    if(node===null) return;

    // Current node reached
    steps.push({

        root:root,

        current:node.value,

        variables:{

            currentNode:node.value

        },

        explanation:`
Current Node : ${node.value}

Visiting the current node first (Preorder).
`,

        traversalOutput:output.join(" → ")

    });

    // Visit current node
    output.push(node.value);

    steps.push({

        root:root,

        current:node.value,

        variables:{

            currentNode:node.value

        },

        explanation:`
Visited Node : ${node.value}

Traversal Output :
${output.join(" → ")}
`,

        traversalOutput:output.join(" → ")

    });

    // Move to left subtree
    if(node.left){

        steps.push({

            root:root,

            current:node.value,

            variables:{

                currentNode:node.value

            },

            explanation:`
Recursively moving to the LEFT subtree.
`,

            traversalOutput:output.join(" → ")

        });

    }

    preorder(node.left);

    // Move to right subtree
    if(node.right){

        steps.push({

            root:root,

            current:node.value,

            variables:{

                currentNode:node.value

            },

            explanation:`
Left subtree completed.

Recursively moving to the RIGHT subtree.
`,

            traversalOutput:output.join(" → ")

        });

    }

    preorder(node.right);

    // Return to parent
    steps.push({

        root:root,

        current:node.value,

        variables:{

            currentNode:node.value

        },

        explanation:`
Returning to the parent node.
`,

        traversalOutput:output.join(" → ")

    });

}
steps.push({

    root:root,

    current:root.value,

    variables:{

        currentNode:root.value

    },

    explanation:`
Starting Preorder Traversal

Traversal Rule :
Root → Left → Right

Traversal Output :
Empty
`,

    traversalOutput:""

});
        preorder(root);

       steps.push({

    root:root,

    current:-1,

    variables:{},

    explanation:`
Traversal Completed

Final Output :
${output.join(" → ")}
`,

    traversalOutput:output.join(" → ")

});

        return steps;

    }

};