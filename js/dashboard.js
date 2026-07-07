// ===========================
// ALGORITHM DATA
// ===========================

const algorithms = [

    {
        name: "Bubble Sort",
        category: "Sorting",
        difficulty: "Easy",
        complexity: "O(n²)",
        icon: "📊",
        page: "workspace.html?algo=bubble"
    },

    {
        name: "Selection Sort",
        category: "Sorting",
        difficulty: "Easy",
        complexity: "O(n²)",
        icon: "📊",
        page: "workspace.html?algo=selection"
    },

    {
        name: "Insertion Sort",
        category: "Sorting",
        difficulty: "Easy",
        complexity: "O(n²)",
        icon: "📊",
        page: "workspace.html?algo=insertion"
    },

    {
        name: "Merge Sort",
        category: "Sorting",
        difficulty: "Medium",
        complexity: "O(n log n)",
        icon: "📊",
        page: "workspace.html?algo=merge"
    },

    {
        name: "Quick Sort",
        category: "Sorting",
        difficulty: "Medium",
        complexity: "O(n log n)",
        icon: "📊",
        page: "workspace.html?algo=quick"
    },


    {
        name: "Linear Search",
        category: "Searching",
        difficulty: "Easy",
        complexity: "O(n)",
        icon: "🔍",
        page: "workspace.html?algo=linear"
    },

    {
        name: "Binary Search",
        category: "Searching",
        difficulty: "Easy",
        complexity: "O(log n)",
        icon: "🔍",
        page: "workspace.html?algo=binary"
    },

    {
        name: "DFS",
        category: "Graphs",
        difficulty: "Medium",
        complexity: "O(V+E)",
        icon: "🕸️",
        page: "workspace.html?algo=dfs"
    },

    {
        name: "BFS",
        category: "Graphs",
        difficulty: "Medium",
        complexity: "O(V+E)",
        icon: "🕸️",
        page: "workspace.html?algo=bfs"
    },

    {
        name: "BST Inorder Traversal",
        category: "Trees",
        difficulty: "Medium",
        complexity: "O(n)",
        icon: "🌳",
        page: "workspace.html?algo=inorder"
    },
    {
        name: "BST PreorderTraversal",
        category: "Trees",
        difficulty: "Medium",
        complexity: "O(n)",
        icon: "🌳",
        page: "workspace.html?algo=preorder"
    },
    {
        name: "BST Postorder Traversal",
        category: "Trees",
        difficulty: "Medium",
        complexity: "O(n)",
        icon: "🌳",
        page: "workspace.html?algo=postorder"
    },

    {
    name: "Level Order Traversal",
    category: "Trees",
    difficulty: "Easy",
    complexity: "O(n)",
    icon: "🌳",
    page: "workspace.html?algo=levelorder"
    },

    {
        name: "Factorial",
        category: "Recursion",
        difficulty: "Easy",
        complexity: "O(n)",
        icon: "🔄",
        page: "workspace.html?algo=factorial"
    },

    {
        name: "Fibonacci Recursion",
        category: "Recursion",
        difficulty: "Medium",
        complexity: "O(2^n)",
        icon: "🔄",
        page: "workspace.html?algo=fibonacci"
    }

];

// ===========================
// DOM
// ===========================

const grid = document.getElementById("algorithmGrid");

const searchBox = document.getElementById("searchBox");

const categoryButtons = document.querySelectorAll(".category");

// ===========================
// CREATE CARDS
// ===========================

function displayAlgorithms(list){

    grid.innerHTML = "";

    list.forEach(algo=>{

        grid.innerHTML += `

        <div class="algorithm-card">

            <div class="algorithm-icon">

                ${algo.icon}

            </div>

            <h3>${algo.name}</h3>

            <p><strong>Difficulty:</strong> ${algo.difficulty}</p>

            <p><strong>Complexity:</strong> ${algo.complexity}</p>

            <a class="explore-btn" href="${algo.page}">

                Explore →

            </a>

        </div>

        `;

    });

}

// ===========================
// INITIAL LOAD
// ===========================

displayAlgorithms(algorithms);

// ===========================
// CATEGORY FILTER
// ===========================

categoryButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        categoryButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const category = button.dataset.category;

        if(category==="All"){

            displayAlgorithms(algorithms);

            return;

        }

        const filtered = algorithms.filter(algo=>{

            return algo.category===category;

        });

        displayAlgorithms(filtered);

    });

});

// ===========================
// SEARCH
// ===========================

searchBox.addEventListener("input",()=>{

    const text = searchBox.value.toLowerCase();

    const filtered = algorithms.filter(algo=>{

        return algo.name.toLowerCase().includes(text);

    });

    displayAlgorithms(filtered);

});