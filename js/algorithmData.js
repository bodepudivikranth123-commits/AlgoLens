const algorithms = {

    bubble:{
        id:"bubble",
        name:"Bubble Sort",
        category:"Sorting",
        time:"O(n²)",
        space:"O(1)",
        best:"O(n)",
        average:"O(n²)",
        worst:"O(n²)",
        stable:"Yes",
        inplace:"Yes",
        recursive:"No",
        description:"Repeatedly swaps adjacent elements until the array becomes sorted.",
        applications:["Educational purposes","Small datasets"]
    },

    selection:{
        id:"selection",
        name:"Selection Sort",
        category:"Sorting",
        time:"O(n²)",
        space:"O(1)",
        best:"O(n²)",
        average:"O(n²)",
        worst:"O(n²)",
        stable:"No",
        inplace:"Yes",
        recursive:"No",
        description:"Repeatedly selects the minimum element and places it at its correct position.",
        applications:["Memory-constrained systems"]
    },

    insertion:{
        id:"insertion",
        name:"Insertion Sort",
        category:"Sorting",
        time:"O(n²)",
        space:"O(1)",
        best:"O(n)",
        average:"O(n²)",
        worst:"O(n²)",
        stable:"Yes",
        inplace:"Yes",
        recursive:"No",
        description:"Builds the sorted array one element at a time.",
        applications:["Nearly sorted arrays","Small datasets"]
    },

    merge:{
        id:"merge",
        name:"Merge Sort",
        category:"Sorting",
        time:"O(n log n)",
        space:"O(n)",
        best:"O(n log n)",
        average:"O(n log n)",
        worst:"O(n log n)",
        stable:"Yes",
        inplace:"No",
        recursive:"Yes",
        description:"Uses divide and conquer to recursively sort and merge arrays.",
        applications:["Large datasets","External sorting"]
    },

    quick:{
        id:"quick",
        name:"Quick Sort",
        category:"Sorting",
        time:"Average O(n log n)",
        space:"O(log n)",
        best:"O(n log n)",
        average:"O(n log n)",
        worst:"O(n²)",
        stable:"No",
        inplace:"Yes",
        recursive:"Yes",
        description:"Partitions the array around a pivot and recursively sorts both halves.",
        applications:["General-purpose sorting"]
    },

    linear:{
        id:"linear",
        name:"Linear Search",
        category:"Searching",
        time:"O(n)",
        space:"O(1)",
        best:"O(1)",
        average:"O(n)",
        worst:"O(n)",
        stable:"-",
        inplace:"-",
        recursive:"Optional",
        description:"Checks every element sequentially until the target is found.",
        applications:["Unsorted arrays"]
    },

    binary:{
        id:"binary",
        name:"Binary Search",
        category:"Searching",
        time:"O(log n)",
        space:"O(1)",
        best:"O(1)",
        average:"O(log n)",
        worst:"O(log n)",
        stable:"-",
        inplace:"-",
        recursive:"Optional",
        description:"Repeatedly divides the sorted array into halves.",
        applications:["Searching in sorted arrays"]
    },

    bst:{
        id:"bst",
        name:"Binary Search Tree",
        category:"Trees",
        time:"O(log n) Average",
        space:"O(h)",
        best:"O(log n)",
        average:"O(log n)",
        worst:"O(n)",
        stable:"-",
        inplace:"-",
        recursive:"Yes",
        description:"Maintains ordered data where left child is smaller and right child is larger.",
        applications:["Dynamic searching","Ordered sets"]
    },

    inorder:{
        id:"inorder",
        name:"Inorder Traversal",
        category:"Trees",
        time:"O(n)",
        space:"O(h)",
        best:"O(n)",
        average:"O(n)",
        worst:"O(n)",
        stable:"-",
        inplace:"No",
        recursive:"Yes",
        description:"Visits Left → Root → Right.",
        applications:["Getting sorted order from BST"]
    },

    preorder:{
        id:"preorder",
        name:"Preorder Traversal",
        category:"Trees",
        time:"O(n)",
        space:"O(h)",
        best:"O(n)",
        average:"O(n)",
        worst:"O(n)",
        stable:"-",
        inplace:"No",
        recursive:"Yes",
        description:"Visits Root → Left → Right.",
        applications:["Tree cloning","Serialization"]
    },

    postorder:{
        id:"postorder",
        name:"Postorder Traversal",
        category:"Trees",
        time:"O(n)",
        space:"O(h)",
        best:"O(n)",
        average:"O(n)",
        worst:"O(n)",
        stable:"-",
        inplace:"No",
        recursive:"Yes",
        description:"Visits Left → Right → Root.",
        applications:["Deleting trees","Expression evaluation"]
    },

    levelorder:{
        id:"levelorder",
        name:"Level Order Traversal",
        category:"Trees",
        time:"O(n)",
        space:"O(n)",
        best:"O(n)",
        average:"O(n)",
        worst:"O(n)",
        stable:"-",
        inplace:"No",
        recursive:"No",
        description:"Traverses the tree level by level using a queue.",
        applications:["Breadth-first tree traversal"]
    },

    bfs:{
        id:"bfs",
        name:"Breadth First Search",
        category:"Graphs",
        time:"O(V + E)",
        space:"O(V)",
        best:"O(V + E)",
        average:"O(V + E)",
        worst:"O(V + E)",
        stable:"-",
        inplace:"No",
        recursive:"No",
        description:"Visits graph vertices level by level using a queue.",
        applications:["Shortest path in unweighted graphs"]
    },

    dfs:{
        id:"dfs",
        name:"Depth First Search",
        category:"Graphs",
        time:"O(V + E)",
        space:"O(V)",
        best:"O(V + E)",
        average:"O(V + E)",
        worst:"O(V + E)",
        stable:"-",
        inplace:"No",
        recursive:"Yes",
        description:"Explores a path completely before backtracking.",
        applications:["Cycle detection","Topological sort","Connected components"]
    },

    factorial:{
        id:"factorial",
        name:"Factorial",
        category:"Recursion",
        time:"O(n)",
        space:"O(n)",
        best:"O(n)",
        average:"O(n)",
        worst:"O(n)",
        stable:"-",
        inplace:"-",
        recursive:"Yes",
        description:"Computes n! using recursive multiplication.",
        applications:["Permutations","Probability"]
    },

    fibonacci:{
        id:"fibonacci",
        name:"Fibonacci",
        category:"Recursion",
        time:"O(2ⁿ)",
        space:"O(n)",
        best:"O(2ⁿ)",
        average:"O(2ⁿ)",
        worst:"O(2ⁿ)",
        stable:"-",
        inplace:"-",
        recursive:"Yes",
        description:"Computes Fibonacci numbers recursively.",
        applications:["Dynamic Programming","Recursion demonstration"]
    }

};