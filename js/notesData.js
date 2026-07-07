const notes={
bubble:{

title:"Bubble Sort",

category:"Sorting",

definition:
"Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. After every pass, the largest unsorted element moves to its correct position.",

algorithm:[
"Start from the first element.",
"Compare adjacent elements.",
"Swap if left element is greater.",
"Continue until the last unsorted element.",
"Repeat until no swaps occur."
],

pseudo:`BubbleSort(A)

for i = 0 to n-2

    swapped = false

    for j = 0 to n-i-2

        if A[j] > A[j+1]

            swap(A[j],A[j+1])

            swapped = true

    if swapped == false

        break`,

cpp:`void bubbleSort(vector<int>& arr){

    int n=arr.size();

    for(int i=0;i<n-1;i++){

        bool swapped=false;

        for(int j=0;j<n-i-1;j++){

            if(arr[j]>arr[j+1]){

                swap(arr[j],arr[j+1]);

                swapped=true;

            }

        }

        if(!swapped) break;

    }

}`,

dryRun:[
"Input : 5 1 4 2 8",
"Pass 1 : 1 4 2 5 8",
"Pass 2 : 1 2 4 5 8",
"Pass 3 : No swaps → Sorted"
],

advantages:[
"Easy to understand",
"Stable sorting algorithm",
"In-place sorting",
"Works well for nearly sorted arrays (optimized)"
],

disadvantages:[
"Poor performance for large datasets",
"High number of comparisons",
"O(n²) average and worst case"
],

applications:[
"Educational purposes",
"Small datasets",
"Nearly sorted arrays"
]

},

selection:{

title:"Selection Sort",

category:"Sorting",

definition:
"Selection Sort repeatedly finds the minimum element from the unsorted portion of the array and places it at the beginning.",

algorithm:[
"Find the minimum element.",
"Swap it with the first unsorted element.",
"Repeat for the remaining array."
],

pseudo:`SelectionSort(A)

for i = 0 to n-2

    min = i

    for j = i+1 to n-1

        if A[j] < A[min]

            min = j

    swap(A[i],A[min])`,

cpp:`void selectionSort(vector<int>& arr){

    int n=arr.size();

    for(int i=0;i<n-1;i++){

        int minIndex=i;

        for(int j=i+1;j<n;j++){

            if(arr[j]<arr[minIndex])

                minIndex=j;

        }

        swap(arr[i],arr[minIndex]);

    }

}`,

dryRun:[
"Input : 64 25 12 22 11",
"Pass 1 : 11 25 12 22 64",
"Pass 2 : 11 12 25 22 64",
"Pass 3 : 11 12 22 25 64"
],

advantages:[
"Simple implementation",
"Minimum number of swaps",
"In-place sorting"
],

disadvantages:[
"Not stable",
"O(n²) in all cases",
"Slow for large datasets"
],

applications:[
"Small datasets",
"Memory-constrained environments"
]

},

insertion:{

title:"Insertion Sort",

category:"Sorting",

definition:
"Insertion Sort builds the sorted array one element at a time by inserting each element into its correct position.",

algorithm:[
"Assume first element is sorted.",
"Pick the next element.",
"Shift larger elements to the right.",
"Insert the current element.",
"Repeat until all elements are processed."
],

pseudo:`InsertionSort(A)

for i = 1 to n-1

    key = A[i]

    j = i-1

    while j>=0 and A[j]>key

        A[j+1]=A[j]

        j--

    A[j+1]=key`,

cpp:`void insertionSort(vector<int>& arr){

    int n=arr.size();

    for(int i=1;i<n;i++){

        int key=arr[i];

        int j=i-1;

        while(j>=0 && arr[j]>key){

            arr[j+1]=arr[j];

            j--;

        }

        arr[j+1]=key;

    }

}`,

dryRun:[
"Input : 5 2 4 6 1",
"Insert 2 → 2 5 4 6 1",
"Insert 4 → 2 4 5 6 1",
"Insert 1 → 1 2 4 5 6"
],

advantages:[
"Efficient for nearly sorted arrays",
"Stable",
"In-place sorting"
],

disadvantages:[
"O(n²) average and worst case",
"Not suitable for large datasets"
],

applications:[
"Nearly sorted arrays",
"Small datasets"
]

},


merge:{

title:"Merge Sort",

category:"Sorting",

definition:
"Merge Sort is a Divide and Conquer algorithm that recursively divides the array into two halves, sorts them, and merges them into a sorted array.",

algorithm:[
"Divide the array into two halves.",
"Recursively sort both halves.",
"Merge the two sorted halves.",
"Repeat until the entire array is sorted."
],

pseudo:`MergeSort(A,l,r)

if l>=r

    return

mid=(l+r)/2

MergeSort(A,l,mid)

MergeSort(A,mid+1,r)

Merge(A,l,mid,r)`,

cpp:`class Solution{
public:

    void merge(vector<int>& arr,int low,int mid,int high){

        vector<int> temp;

        int left=low;
        int right=mid+1;

        while(left<=mid && right<=high){

            if(arr[left]<=arr[right]){

                temp.push_back(arr[left++]);

            }
            else{

                temp.push_back(arr[right++]);

            }

        }

        while(left<=mid){

            temp.push_back(arr[left++]);

        }

        while(right<=high){

            temp.push_back(arr[right++]);

        }

        for(int i=low;i<=high;i++){

            arr[i]=temp[i-low];

        }

    }

    void mergeSort(vector<int>& arr,int low,int high){

        if(low>=high) return;

        int mid=(low+high)/2;

        mergeSort(arr,low,mid);

        mergeSort(arr,mid+1,high);

        merge(arr,low,mid,high);

    }

};`,

dryRun:[
"Input : 8 3 2 9",
"Divide → [8 3] [2 9]",
"Sort → [3 8] [2 9]",
"Merge → 2 3 8 9"
],

advantages:[
"Stable sorting algorithm",
"Guaranteed O(n log n)",
"Suitable for linked lists",
"Efficient for large datasets"
],

disadvantages:[
"Requires O(n) extra space",
"Not in-place"
],

applications:[
"External sorting",
"Large datasets",
"Linked list sorting"
]

},

quick:{

title:"Quick Sort",

category:"Sorting",

definition:
"Quick Sort selects a pivot element, partitions the array around the pivot, and recursively sorts both partitions.",

algorithm:[
"Choose a pivot element.",
"Partition the array.",
"Recursively sort left partition.",
"Recursively sort right partition."
],

pseudo:`QuickSort(A,low,high)

if low<high

    pivot=partition(A,low,high)

    QuickSort(A,low,pivot-1)

    QuickSort(A,pivot+1,high)`,

cpp:`void quickSort(vector<int>& arr,int low,int high){

    if(low<high){

        int pivot=partition(arr,low,high);

        quickSort(arr,low,pivot-1);

        quickSort(arr,pivot+1,high);

    }

}`,

dryRun:[
"Input : 10 7 8 9 1 5",
"Pivot = 5",
"Partition → 1 5 8 9 10 7",
"Recursively sort left & right partitions"
],

advantages:[
"Very fast in practice",
"In-place sorting",
"Average O(n log n)"
],

disadvantages:[
"Worst case O(n²)",
"Not stable",
"Performance depends on pivot selection"
],

applications:[
"General-purpose sorting",
"Large in-memory datasets"
]

},

linear:{

title:"Linear Search",

category:"Searching",

definition:
"Linear Search checks every element one by one until the target element is found or the array ends.",

algorithm:[
"Start from the first element.",
"Compare with target.",
"If equal, return index.",
"Otherwise move to next element.",
"If end reached, return not found."
],

pseudo:`LinearSearch(A,key)

for i = 0 to n-1

    if A[i] == key

        return i

return -1`,

cpp:`int linearSearch(vector<int>& arr,int key){

    for(int i=0;i<arr.size();i++){

        if(arr[i]==key)

            return i;

    }

    return -1;

}`,

dryRun:[
"Input : 8 3 6 1 5",
"Target : 6",
"Compare 8 → No",
"Compare 3 → No",
"Compare 6 → Found"
],

advantages:[
"Very simple",
"Works on unsorted arrays",
"No preprocessing required"
],

disadvantages:[
"O(n) time complexity",
"Slow for large datasets"
],

applications:[
"Small arrays",
"Unsorted data",
"Simple searching tasks"
]

},
binary:{

title:"Binary Search",

category:"Searching",

definition:
"Binary Search repeatedly divides a sorted array into two halves until the target element is found.",

algorithm:[
"Find the middle element.",
"Compare with target.",
"If equal, return index.",
"If target is smaller, search left half.",
"If target is larger, search right half."
],

pseudo:`BinarySearch(A,key)

low=0

high=n-1

while low<=high

    mid=(low+high)/2

    if A[mid]==key

        return mid

    else if key<A[mid]

        high=mid-1

    else

        low=mid+1

return -1`,

cpp:`int binarySearch(vector<int>& arr,int target){

    int low=0;

    int high=arr.size()-1;

    while(low<=high){

        int mid=(low+high)/2;

        if(arr[mid]==target)

            return mid;

        else if(arr[mid]<target)

            low=mid+1;

        else

            high=mid-1;

    }

    return -1;

}`,

dryRun:[
"Input : 2 4 6 8 10 12",
"Target : 8",
"Middle = 6",
"Search Right Half",
"Middle = 8 → Found"
],

advantages:[
"Very efficient",
"O(log n) time complexity",
"Suitable for large sorted datasets"
],

disadvantages:[
"Requires sorted data",
"Cannot be directly used on unsorted arrays"
],

applications:[
"Searching in sorted arrays",
"Database indexing",
"Dictionary lookup"
]

},

bst:{

title:"Binary Search Tree",

category:"Trees",

definition:
"A Binary Search Tree (BST) is a binary tree where every node satisfies the property that all values in the left subtree are smaller and all values in the right subtree are greater.",

algorithm:[
"Start from the root.",
"If key is smaller, move to left child.",
"If key is greater, move to right child.",
"Repeat until the key is found or NULL is reached."
],

pseudo:`SearchBST(root,key)

if root==NULL

    return NULL

if root->data==key

    return root

if key<root->data

    return SearchBST(root->left,key)

return SearchBST(root->right,key)`,

cpp:`TreeNode* searchBST(TreeNode* root,int key){

    if(root==NULL || root->data==key)

        return root;

    if(key<root->data)

        return searchBST(root->left,key);

    return searchBST(root->right,key);

}`,

dryRun:[
"BST : 8 3 10 1 6 14",
"Search 6",
"8 → Left",
"3 → Right",
"6 → Found"
],

advantages:[
"Fast searching",
"Fast insertion and deletion",
"Maintains sorted order"
],

disadvantages:[
"Can become skewed",
"Worst-case O(n)"
],

applications:[
"Databases",
"Ordered sets",
"Symbol tables"
]

},

inorder:{

title:"Inorder Traversal",

category:"Trees",

definition:
"Inorder Traversal visits the left subtree, then the root, and finally the right subtree.",

algorithm:[
"Traverse left subtree.",
"Visit root.",
"Traverse right subtree."
],

pseudo:`Inorder(root)

if root==NULL

    return

Inorder(root->left)

visit(root)

Inorder(root->right)`,

cpp:`void inorder(TreeNode* root){

    if(root==NULL)

        return;

    inorder(root->left);

    cout<<root->data<<" ";

    inorder(root->right);

}`,

dryRun:[
"Tree : 2",
"      / \\",
"     1   3",
"Output : 1 2 3"
],

advantages:[
"Produces sorted order in BST",
"Simple recursive implementation"
],

disadvantages:[
"Uses recursion stack"
],

applications:[
"BST validation",
"Printing BST in sorted order"
]

},

preorder:{

title:"Preorder Traversal",

category:"Trees",

definition:
"Preorder Traversal visits the root first, then the left subtree, followed by the right subtree.",

algorithm:[
"Visit root.",
"Traverse left subtree.",
"Traverse right subtree."
],

pseudo:`Preorder(root)

if root==NULL

    return

visit(root)

Preorder(root->left)

Preorder(root->right)`,

cpp:`void preorder(TreeNode* root){

    if(root==NULL)

        return;

    cout<<root->data<<" ";

    preorder(root->left);

    preorder(root->right);

}`,

dryRun:[
"Tree : 2",
"      / \\",
"     1   3",
"Output : 2 1 3"
],

advantages:[
"Useful for copying trees",
"Root processed first"
],

disadvantages:[
"Doesn't produce sorted order"
],

applications:[
"Tree serialization",
"Expression trees"
]

},

postorder:{

title:"Postorder Traversal",

category:"Trees",

definition:
"Postorder Traversal visits the left subtree, then the right subtree, and finally the root.",

algorithm:[
"Traverse left subtree.",
"Traverse right subtree.",
"Visit root."
],

pseudo:`Postorder(root)

if root==NULL

    return

Postorder(root->left)

Postorder(root->right)

visit(root)`,

cpp:`void postorder(TreeNode* root){

    if(root==NULL)

        return;

    postorder(root->left);

    postorder(root->right);

    cout<<root->data<<" ";

}`,

dryRun:[
"Tree : 2",
"      / \\",
"     1   3",
"Output : 1 3 2"
],

advantages:[
"Useful for deleting trees",
"Good for expression evaluation"
],

disadvantages:[
"Recursive stack overhead"
],

applications:[
"Deleting trees",
"Expression tree evaluation"
]

},

levelorder:{

title:"Level Order Traversal",

category:"Trees",

definition:
"Level Order Traversal visits nodes level by level from top to bottom using a queue.",

algorithm:[
"Insert root into queue.",
"Remove front node.",
"Visit node.",
"Insert children.",
"Repeat until queue becomes empty."
],

pseudo:`LevelOrder(root)

Queue q

push(root)

while q not empty

    node=q.front()

    q.pop()

    visit(node)

    push(left)

    push(right)`,

cpp:`void levelOrder(TreeNode* root){

    if(root==NULL)

        return;

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

}`,

dryRun:[
"Tree : 2",
"      / \\",
"     1   3",
"Output : 2 1 3"
],

advantages:[
"Visits nodes level by level",
"Uses queue",
"Useful for shortest level traversal"
],

disadvantages:[
"Requires extra queue memory"
],

applications:[
"Tree printing",
"Level-wise processing",
"Finding tree width"
]

},

bfs:{

title:"Breadth First Search (BFS)",

category:"Graphs",

definition:
"Breadth First Search (BFS) is a graph traversal algorithm that explores all vertices level by level using a queue.",

algorithm:[
"Mark the starting node as visited.",
"Insert it into the queue.",
"Remove the front node.",
"Visit all its unvisited neighbours.",
"Mark neighbours as visited and push them into the queue.",
"Repeat until the queue becomes empty."
],

pseudo:`BFS(Graph,source)

Create Queue

Mark source visited

Push source

while Queue not empty

    node = Queue.front()

    Queue.pop()

    visit(node)

    for every neighbour

        if not visited

            mark visited

            Queue.push(neighbour)`,

cpp:`void BFS(int start,vector<vector<int>>& adj){

    vector<bool> vis(adj.size(),false);

    queue<int> q;

    vis[start]=true;

    q.push(start);

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

}`,

dryRun:[
"Graph : A-B-C",
"        |",
"        D",
"Start : A",
"Visit : A",
"Queue : B D",
"Visit : B",
"Queue : D C",
"Visit : D",
"Visit : C"
],

advantages:[
"Finds shortest path in unweighted graphs.",
"Simple implementation.",
"Visits nodes level-wise."
],

disadvantages:[
"Uses extra memory for queue.",
"Not suitable for weighted shortest paths."
],

applications:[
"Shortest path in unweighted graphs.",
"Connected components.",
"Web crawlers.",
"Network broadcasting."
]

},

dfs:{

title:"Depth First Search (DFS)",

category:"Graphs",

definition:
"Depth First Search (DFS) explores one path completely before backtracking. It is commonly implemented using recursion or a stack.",

algorithm:[
"Visit the current node.",
"Mark it as visited.",
"Visit every unvisited neighbour recursively.",
"Backtrack after all neighbours are explored."
],

pseudo:`DFS(node)

mark node visited

visit(node)

for every neighbour

    if not visited

        DFS(neighbour)`,

cpp:`void DFS(int node,

vector<vector<int>>& adj,

vector<bool>& vis){

    vis[node]=true;

    cout<<node<<" ";

    for(int next:adj[node]){

        if(!vis[next])

            DFS(next,adj,vis);

    }

}`,

dryRun:[
"Graph : A-B-C",
"        |",
"        D",
"Start : A",
"Visit : A",
"Visit : B",
"Visit : C",
"Backtrack",
"Visit : D"
],

advantages:[
"Simple recursive implementation.",
"Requires less memory on sparse graphs.",
"Useful for many graph problems."
],

disadvantages:[
"Doesn't guarantee shortest path.",
"Deep recursion may cause stack overflow."
],

applications:[
"Cycle detection.",
"Topological sorting.",
"Connected components.",
"Maze solving."
]

},

factorial:{

title:"Factorial",

category:"Recursion",

definition:
"Factorial of a non-negative integer n is the product of all positive integers from 1 to n.",

algorithm:[
"Check if n is 0 or 1.",
"Return 1 for the base case.",
"Otherwise return n × factorial(n−1)."
],

pseudo:`factorial(n)

if n<=1

    return 1

return n*factorial(n-1)`,

cpp:`int factorial(int n){

    if(n<=1)

        return 1;

    return n*factorial(n-1);

}`,

dryRun:[
"factorial(4)",
"=4×factorial(3)",
"=4×3×factorial(2)",
"=4×3×2×factorial(1)",
"=24"
],

advantages:[
"Simple recursive example.",
"Easy to understand.",
"Introduces recursion concepts."
],

disadvantages:[
"Uses recursion stack.",
"Stack overflow for large n."
],

applications:[
"Combinatorics.",
"Permutations.",
"Combinations.",
"Probability."
]

},

fibonacci:{

title:"Fibonacci",

category:"Recursion",

definition:
"Each Fibonacci number is the sum of the previous two Fibonacci numbers. Recursive implementation clearly demonstrates recursion trees.",

algorithm:[
"Check base case (0 or 1).",
"Return n for the base case.",
"Otherwise compute fib(n−1)+fib(n−2)."
],

pseudo:`fib(n)

if n<=1

    return n

return fib(n-1)+fib(n-2)`,

cpp:`int fib(int n){

    if(n<=1)

        return n;

    return fib(n-1)+fib(n-2);

}`,

dryRun:[
"fib(5)",
"=fib(4)+fib(3)",
"=3+2",
"=5"
],

advantages:[
"Excellent recursion example.",
"Demonstrates recursion tree.",
"Useful for learning recursion."
],

disadvantages:[
"Repeated subproblems.",
"Time complexity O(2^n).",
"Inefficient without memoization."
],

applications:[
"Dynamic Programming.",
"Memoization.",
"Recursion teaching.",
"Mathematical sequences."
]

}
};