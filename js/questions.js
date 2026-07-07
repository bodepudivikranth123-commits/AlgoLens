// ====================== SORTING ======================

const questions=[
    {
category:"Sorting",
difficulty:"Easy",
question:"Which sorting algorithm repeatedly swaps adjacent elements?",
options:["Merge Sort","Bubble Sort","Quick Sort","Selection Sort"],
answer:1
},

{
category:"Sorting",
difficulty:"Easy",
question:"Which sorting algorithm repeatedly selects the minimum element?",
options:["Insertion Sort","Selection Sort","Merge Sort","Quick Sort"],
answer:1
},

{
category:"Sorting",
difficulty:"Easy",
question:"Which sorting algorithm builds the sorted array one element at a time?",
options:["Insertion Sort","Bubble Sort","Quick Sort","Heap Sort"],
answer:0
},

{
category:"Sorting",
difficulty:"Easy",
question:"Which sorting algorithm is naturally stable?",
options:["Selection Sort","Quick Sort","Bubble Sort","Heap Sort"],
answer:2
},

{
category:"Sorting",
difficulty:"Easy",
question:"Which sorting algorithm is best suited for nearly sorted arrays?",
options:["Insertion Sort","Selection Sort","Heap Sort","Quick Sort"],
answer:0
},

{
category:"Sorting",
difficulty:"Easy",
question:"Bubble Sort compares which elements?",
options:["First and Last","Adjacent Elements","Random Elements","Middle Elements"],
answer:1
},

{
category:"Sorting",
difficulty:"Medium",
question:"What is the worst-case time complexity of Bubble Sort?",
options:["O(n)","O(log n)","O(n²)","O(n log n)"],
answer:2
},

{
category:"Sorting",
difficulty:"Medium",
question:"Which sorting algorithm uses Divide and Conquer?",
options:["Bubble Sort","Selection Sort","Merge Sort","Insertion Sort"],
answer:2
},

{
category:"Sorting",
difficulty:"Medium",
question:"Quick Sort selects a ____ before partitioning.",
options:["Median","Pivot","Root","Minimum"],
answer:1
},

{
category:"Sorting",
difficulty:"Medium",
question:"Merge Sort requires extra space of:",
options:["O(1)","O(log n)","O(n)","O(n²)"],
answer:2
},

{
category:"Sorting",
difficulty:"Medium",
question:"Which sorting algorithm is NOT stable?",
options:["Merge Sort","Insertion Sort","Selection Sort","Bubble Sort"],
answer:2
},

{
category:"Sorting",
difficulty:"Medium",
question:"Which sorting algorithm is in-place?",
options:["Merge Sort","Bubble Sort","Counting Sort","Radix Sort"],
answer:1
},

{
category:"Sorting",
difficulty:"Medium",
question:"Average-case complexity of Quick Sort is:",
options:["O(n²)","O(log n)","O(n log n)","O(n)"],
answer:2
},

{
category:"Sorting",
difficulty:"Medium",
question:"Best-case complexity of Bubble Sort (optimized) is:",
options:["O(n)","O(n²)","O(log n)","O(n log n)"],
answer:0
},

{
category:"Sorting",
difficulty:"Medium",
question:"Selection Sort performs how many swaps approximately?",
options:["n²","n","log n","0"],
answer:1
},

{
category:"Sorting",
difficulty:"Hard",
question:"Which sorting algorithm has O(n²) worst case but O(n log n) average case?",
options:["Merge Sort","Quick Sort","Bubble Sort","Selection Sort"],
answer:1
},

{
category:"Sorting",
difficulty:"Hard",
question:"Why is Merge Sort preferred for linked lists?",
options:[
"Requires no recursion",
"Efficient merging without random access",
"Uses no extra memory",
"Works only on linked lists"
],
answer:1
},

{
category:"Sorting",
difficulty:"Hard",
question:"What causes Quick Sort's worst-case performance?",
options:[
"Balanced partitions",
"Already sorted array with poor pivot selection",
"Duplicate elements",
"Using recursion"
],
answer:1
},

{
category:"Sorting",
difficulty:"Hard",
question:"Which sorting algorithm always performs O(n²) comparisons regardless of input?",
options:[
"Bubble Sort",
"Selection Sort",
"Insertion Sort",
"Quick Sort"
],
answer:1
},

{
category:"Sorting",
difficulty:"Hard",
question:"Which sorting algorithm is generally fastest in practice for large in-memory arrays?",
options:[
"Bubble Sort",
"Insertion Sort",
"Quick Sort",
"Selection Sort"
],
answer:2
},
// ====================== SEARCHING ======================

{
category:"Searching",
difficulty:"Easy",
question:"Binary Search requires the array to be:",
options:["Sorted","Unsorted","Circular","Unique"],
answer:0
},

{
category:"Searching",
difficulty:"Easy",
question:"Linear Search checks elements:",
options:["Randomly","Sequentially","Using Divide and Conquer","Using Recursion Only"],
answer:1
},

{
category:"Searching",
difficulty:"Easy",
question:"Worst-case complexity of Linear Search is:",
options:["O(log n)","O(1)","O(n)","O(n log n)"],
answer:2
},

{
category:"Searching",
difficulty:"Easy",
question:"Best-case complexity of Binary Search is:",
options:["O(1)","O(log n)","O(n)","O(n log n)"],
answer:0
},

{
category:"Searching",
difficulty:"Medium",
question:"Average-case complexity of Binary Search is:",
options:["O(1)","O(log n)","O(n)","O(n²)"],
answer:1
},

{
category:"Searching",
difficulty:"Medium",
question:"Binary Search repeatedly divides the search space into:",
options:["Three Parts","Two Parts","Four Parts","Equal Arrays"],
answer:1
},

{
category:"Searching",
difficulty:"Medium",
question:"Which searching algorithm works on unsorted data?",
options:["Binary Search","Interpolation Search","Linear Search","Jump Search"],
answer:2
},

{
category:"Searching",
difficulty:"Hard",
question:"Binary Search is based on which strategy?",
options:["Greedy","Dynamic Programming","Divide and Conquer","Backtracking"],
answer:2
},

{
category:"Searching",
difficulty:"Hard",
question:"Which searching algorithm has the simplest implementation?",
options:["Binary Search","Interpolation Search","Linear Search","Exponential Search"],
answer:2
},

{
category:"Searching",
difficulty:"Hard",
question:"What is the worst-case complexity of recursive Binary Search?",
options:["O(log n)","O(n)","O(1)","O(n log n)"],
answer:0
},
{
category:"Searching",
difficulty:"Medium",
question:"What is the first step in Binary Search?",
options:[
"Compare with the last element",
"Compare with the middle element",
"Sort the array",
"Traverse the entire array"
],
answer:1
},

{
category:"Searching",
difficulty:"Medium",
question:"Which searching algorithm is generally faster on large sorted arrays?",
options:[
"Linear Search",
"Binary Search",
"DFS",
"BFS"
],
answer:1
},

{
category:"Searching",
difficulty:"Hard",
question:"How many comparisons are required in the worst case for Binary Search on 1024 elements?",
options:[
"10",
"32",
"512",
"1024"
],
answer:0
},

{
category:"Searching",
difficulty:"Hard",
question:"What is the worst-case complexity of Linear Search when the target element is absent?",
options:[
"O(1)",
"O(log n)",
"O(n)",
"O(n log n)"
],
answer:2
},

{
category:"Searching",
difficulty:"Hard",
question:"Which searching algorithm repeatedly eliminates half of the remaining search space?",
options:[
"Linear Search",
"Binary Search",
"Depth First Search",
"Breadth First Search"
],
answer:1
},
// ====================== TREES ======================

{
category:"Trees",
difficulty:"Easy",
question:"Which traversal visits Left → Root → Right?",
options:["Preorder","Postorder","Inorder","Level Order"],
answer:2
},

{
category:"Trees",
difficulty:"Easy",
question:"Which traversal visits Root first?",
options:["Postorder","Preorder","Inorder","Level Order"],
answer:1
},

{
category:"Trees",
difficulty:"Easy",
question:"Which traversal visits Root last?",
options:["Inorder","Level Order","Postorder","Preorder"],
answer:2
},

{
category:"Trees",
difficulty:"Easy",
question:"Which traversal uses a Queue?",
options:["Preorder","Inorder","Level Order","Postorder"],
answer:2
},

{
category:"Trees",
difficulty:"Easy",
question:"In a BST, all left subtree nodes are:",
options:["Greater","Smaller","Equal","Random"],
answer:1
},

{
category:"Trees",
difficulty:"Easy",
question:"In a BST, all right subtree nodes are:",
options:["Greater","Smaller","Equal","Random"],
answer:0
},

{
category:"Trees",
difficulty:"Medium",
question:"Time complexity of tree traversals is:",
options:["O(log n)","O(n)","O(n²)","O(1)"],
answer:1
},

{
category:"Trees",
difficulty:"Medium",
question:"Which traversal produces sorted order in a BST?",
options:["Preorder","Level Order","Postorder","Inorder"],
answer:3
},

{
category:"Trees",
difficulty:"Medium",
question:"Level Order Traversal is also called:",
options:["DFS","BFS","Backtracking","Recursive Traversal"],
answer:1
},

{
category:"Trees",
difficulty:"Medium",
question:"Which data structure is used in Level Order Traversal?",
options:["Stack","Queue","Heap","Array"],
answer:1
},

{
category:"Trees",
difficulty:"Medium",
question:"Height of a balanced BST is approximately:",
options:["O(n)","O(log n)","O(n²)","O(1)"],
answer:1
},

{
category:"Trees",
difficulty:"Hard",
question:"Which traversal is commonly used to delete an entire tree?",
options:["Inorder","Preorder","Postorder","Level Order"],
answer:2
},

{
category:"Trees",
difficulty:"Hard",
question:"Which traversal is useful for copying a tree?",
options:["Preorder","Postorder","Inorder","Level Order"],
answer:0
},

{
category:"Trees",
difficulty:"Hard",
question:"Searching in a balanced BST takes:",
options:["O(log n)","O(n)","O(n²)","O(1)"],
answer:0
},

{
category:"Trees",
difficulty:"Hard",
question:"Worst-case search complexity of an unbalanced BST is:",
options:["O(log n)","O(n)","O(n²)","O(1)"],
answer:1
},
{
category:"Trees",
difficulty:"Medium",
question:"Which traversal is useful for serializing a tree?",
options:["Preorder","Postorder","Inorder","Level Order"],
answer:0
},

{
category:"Trees",
difficulty:"Medium",
question:"How many children can a binary tree node have at most?",
options:["1","2","3","4"],
answer:1
},

{
category:"Trees",
difficulty:"Medium",
question:"Which data structure is used in iterative inorder traversal?",
options:["Queue","Stack","Heap","Array"],
answer:1
},

{
category:"Trees",
difficulty:"Hard",
question:"The minimum number of nodes in a binary tree of height h is:",
options:["h","h+1","1","2^h"],
answer:2
},

{
category:"Trees",
difficulty:"Hard",
question:"Maximum number of nodes at level l of a binary tree is:",
options:["l","2^l","2^(l-1)","l²"],
answer:1
},

{
category:"Trees",
difficulty:"Hard",
question:"Which traversal should be used to evaluate an expression tree?",
options:["Inorder","Postorder","Preorder","Level Order"],
answer:1
},

{
category:"Trees",
difficulty:"Hard",
question:"A Binary Search Tree becomes inefficient when:",
options:["Balanced","Complete","Skewed","Full"],
answer:2
},

{
category:"Trees",
difficulty:"Hard",
question:"Searching in a skewed BST takes:",
options:["O(log n)","O(1)","O(n)","O(n log n)"],
answer:2
},

{
category:"Trees",
difficulty:"Hard",
question:"Which traversal visits every node exactly once?",
options:["Only Inorder","Only Preorder","Only Postorder","All Traversals"],
answer:3
},

{
category:"Trees",
difficulty:"Hard",
question:"Level Order Traversal is an example of:",
options:["DFS","BFS","Greedy","DP"],
answer:1
},
// ====================== GRAPHS ======================

{
category:"Graphs",
difficulty:"Easy",
question:"Which traversal uses a Queue?",
options:["DFS","BFS","Inorder","Preorder"],
answer:1
},

{
category:"Graphs",
difficulty:"Easy",
question:"Which traversal uses a Stack (or recursion)?",
options:["BFS","DFS","Level Order","Binary Search"],
answer:1
},

{
category:"Graphs",
difficulty:"Easy",
question:"BFS explores nodes:",
options:["Depth First","Level by Level","Randomly","Using Priority"],
answer:1
},

{
category:"Graphs",
difficulty:"Easy",
question:"DFS explores:",
options:["Level by Level","One path completely before backtracking","Random nodes","Smallest node first"],
answer:1
},

{
category:"Graphs",
difficulty:"Easy",
question:"Time complexity of BFS is:",
options:["O(V+E)","O(V²)","O(E²)","O(log V)"],
answer:0
},

{
category:"Graphs",
difficulty:"Medium",
question:"Time complexity of DFS is:",
options:["O(V+E)","O(V²)","O(E²)","O(log V)"],
answer:0
},

{
category:"Graphs",
difficulty:"Medium",
question:"BFS always finds the shortest path in:",
options:["Weighted Graph","Unweighted Graph","Directed Graph","Complete Graph"],
answer:1
},

{
category:"Graphs",
difficulty:"Medium",
question:"Which data structure is essential for BFS?",
options:["Stack","Queue","Priority Queue","Heap"],
answer:1
},

{
category:"Graphs",
difficulty:"Medium",
question:"Which data structure is commonly used in iterative DFS?",
options:["Queue","Stack","Heap","Array"],
answer:1
},

{
category:"Graphs",
difficulty:"Medium",
question:"To avoid revisiting vertices, we maintain:",
options:["Parent Array","Visited Array","Distance Array","Weight Array"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"DFS is commonly used for:",
options:["Shortest Path in Weighted Graph","Cycle Detection","Sorting Arrays","Binary Search"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"Which traversal is used in Topological Sorting?",
options:["BFS Only","DFS","Binary Search","Merge Sort"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"Which traversal is preferred for finding minimum edges in an unweighted graph?",
options:["DFS","BFS","Preorder","Postorder"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"DFS recursion depth depends on:",
options:["Edges","Vertices in current path","Graph Weight","Queue Size"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"Space complexity of BFS in the worst case is:",
options:["O(log V)","O(V)","O(E)","O(1)"],
answer:1
},
{
category:"Graphs",
difficulty:"Medium",
question:"Which representation is memory efficient for sparse graphs?",
options:["Adjacency Matrix","Adjacency List","Incidence Matrix","Array"],
answer:1
},

{
category:"Graphs",
difficulty:"Medium",
question:"Adjacency Matrix requires:",
options:["O(V)","O(E)","O(V²)","O(log V)"],
answer:2
},

{
category:"Graphs",
difficulty:"Medium",
question:"DFS can be implemented using:",
options:["Queue","Stack","Both Stack and Recursion","Heap"],
answer:2
},

{
category:"Graphs",
difficulty:"Hard",
question:"BFS guarantees shortest path in:",
options:["Weighted Graph","Unweighted Graph","Directed Graph","Complete Graph"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"Which traversal is commonly used to find connected components?",
options:["Binary Search","DFS","Selection Sort","Bubble Sort"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"Which traversal can detect cycles in directed graphs?",
options:["DFS","Binary Search","Selection Sort","Merge Sort"],
answer:0
},

{
category:"Graphs",
difficulty:"Hard",
question:"Number of edges in a complete graph with n vertices is:",
options:["n²","n(n−1)/2","2n","n−1"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"Which traversal visits neighbors before grandchildren?",
options:["DFS","BFS","Inorder","Postorder"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"Which graph representation is faster for checking whether an edge exists?",
options:["Adjacency List","Adjacency Matrix","Queue","Stack"],
answer:1
},

{
category:"Graphs",
difficulty:"Hard",
question:"DFS is mainly based on which principle?",
options:["FIFO","LIFO","Priority","Random"],
answer:1
},

// ====================== RECURSION ======================

{
category:"Recursion",
difficulty:"Easy",
question:"What is recursion?",
options:[
"A loop",
"A function calling itself",
"A sorting technique",
"A graph traversal"
],
answer:1
},

{
category:"Recursion",
difficulty:"Easy",
question:"Which condition stops recursion?",
options:[
"Loop",
"Base Case",
"Queue",
"Stack"
],
answer:1
},

{
category:"Recursion",
difficulty:"Easy",
question:"Factorial(5) is:",
options:["24","120","60","720"],
answer:1
},

{
category:"Recursion",
difficulty:"Easy",
question:"Factorial(0) equals:",
options:["0","1","Undefined","2"],
answer:1
},

{
category:"Recursion",
difficulty:"Medium",
question:"Recursive factorial has time complexity:",
options:["O(log n)","O(n)","O(n²)","O(2ⁿ)"],
answer:1
},

{
category:"Recursion",
difficulty:"Medium",
question:"Recursive Fibonacci has time complexity:",
options:["O(n)","O(log n)","O(2ⁿ)","O(n²)"],
answer:2
},

{
category:"Recursion",
difficulty:"Medium",
question:"Recursive calls are stored in:",
options:["Queue","Heap","Call Stack","Graph"],
answer:2
},

{
category:"Recursion",
difficulty:"Hard",
question:"Why is recursive Fibonacci inefficient?",
options:[
"Too many loops",
"Repeated computation of subproblems",
"No base case",
"Uses sorting"
],
answer:1
},

{
category:"Recursion",
difficulty:"Hard",
question:"Which technique optimizes recursive Fibonacci?",
options:[
"Binary Search",
"Memoization",
"BFS",
"Heap"
],
answer:1
},

{
category:"Recursion",
difficulty:"Hard",
question:"Maximum recursion depth mainly depends on:",
options:[
"Input Size",
"Compiler",
"Stack Space",
"Array Size"
],
answer:2
},
{
category:"Recursion",
difficulty:"Medium",
question:"Recursive functions primarily use which memory area?",
options:["Heap","Stack","Queue","Cache"],
answer:1
},

{
category:"Recursion",
difficulty:"Medium",
question:"If a recursive function has no base case, it leads to:",
options:["Compilation Error","Infinite Recursion","Syntax Error","No Output"],
answer:1
},

{
category:"Recursion",
difficulty:"Medium",
question:"Which traversal of a tree is naturally recursive?",
options:["Inorder","Preorder","Postorder","All of the above"],
answer:3
},

{
category:"Recursion",
difficulty:"Hard",
question:"Which optimization avoids repeated recursive calls in Fibonacci?",
options:["Binary Search","Memoization","Queue","Sorting"],
answer:1
},

{
category:"Recursion",
difficulty:"Hard",
question:"Tail recursion can often be optimized into:",
options:["Dynamic Programming","Iteration","Heap","BFS"],
answer:1
},

{
category:"Recursion",
difficulty:"Hard",
question:"Space complexity of recursive factorial is:",
options:["O(1)","O(log n)","O(n)","O(n²)"],
answer:2
},

{
category:"Recursion",
difficulty:"Hard",
question:"Recursive Fibonacci repeatedly solves:",
options:["Unique Problems","Overlapping Subproblems","Graph Traversals","Sorting"],
answer:1
},

{
category:"Recursion",
difficulty:"Hard",
question:"The maximum recursion depth depends mainly on:",
options:["Array Size","Available Stack Space","CPU Speed","Heap Size"],
answer:1
},

{
category:"Recursion",
difficulty:"Hard",
question:"Which paradigm is commonly associated with recursion?",
options:["Divide and Conquer","Greedy","Hashing","Heap"],
answer:0
},

{
category:"Recursion",
difficulty:"Hard",
question:"Which of the following is NOT a characteristic of recursion?",
options:[
"Function calls itself",
"Requires a base case",
"Uses call stack",
"Always faster than iteration"
],
answer:3
}


];