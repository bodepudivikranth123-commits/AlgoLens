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

    name:"BST Postorder Traversal",

    difficulty:"Easy",

    timeComplexity:"O(n)",

    spaceComplexity:"O(h)",

    cpp:`class Solution{
public:

    void postorder(TreeNode* root){

        if(root==NULL) return;

        postorder(root->left);

        postorder(root->right);

        cout<<root->data<<" ";

    }

};`,

    pseudo:`Postorder(root)

if(root==NULL)

    return

Postorder(root->left)

Postorder(root->right)

Visit(root)`,

    generateSteps(array){

        let root=null;

        array.forEach(value=>{

            root=insert(root,value);

        });
        const output=[];

        const steps=[];

        

function postorder(node){

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

    postorder(node.left);

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

    postorder(node.right);

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
Starting Postorder Traversal

Traversal Rule :
Left → Right → Root

Traversal Output :
Empty
`,

    traversalOutput:""

});
        postorder(root);

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