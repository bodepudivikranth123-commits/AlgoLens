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

    name:"BST Inorder Traversal",

    difficulty:"Easy",

    timeComplexity:"O(n)",

    spaceComplexity:"O(h)",

    cpp:`class Solution{
public:

    void inorder(TreeNode* root){

        if(root==NULL) return;

        inorder(root->left);

        cout<<root->data<<" ";

        inorder(root->right);

    }

};`,

    pseudo:`Inorder(root)

if(root==NULL)

    return

Inorder(root->left)

Visit(root)

Inorder(root->right)`,

    generateSteps(array){

        let root=null;

        array.forEach(value=>{

            root=insert(root,value);

        });
        const output=[];

        const steps=[];

        

function inorder(node){

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

Recursively moving to the LEFT subtree.
`,

        traversalOutput:output.join(" → ")

    });

    inorder(node.left);

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

    // Going to right subtree
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

    inorder(node.right);

    // Returning to parent
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
        Starting Inorder Traversal

        Traversal Output :
        Empty
       `,

    traversalOutput:""

     });
        inorder(root);

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