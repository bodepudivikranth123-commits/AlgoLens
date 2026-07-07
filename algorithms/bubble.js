window.algorithm = {

    // ==========================
    // BASIC INFO
    // ==========================
    type: "array",
    
    name: "Bubble Sort",

    difficulty: "Easy",

    timeComplexity: "O(n²)",

    spaceComplexity: "O(1)",

    // ==========================
    // CODE
    // ==========================

    cpp: `class Solution {
public:

    void bubbleSort(vector<int>& arr){

        int n = arr.size();

        for(int i = 0; i < n - 1; i++){

            for(int j = 0; j < n - i - 1; j++){

                if(arr[j] > arr[j + 1]){

                    swap(arr[j], arr[j + 1]);

                }

            }

        }

    }

};`,

    // ==========================
    // PSEUDO CODE
    // ==========================

    pseudo: `repeat n-1 times

compare adjacent elements

if left > right

swap them

largest element moves to end`,

    // ==========================
    // STEP GENERATOR
    // ==========================

    generateSteps(array){

        const arr = [...array];

        const steps = [];

        const n = arr.length;

        for(let i = 0; i < n - 1; i++){

            for(let j = 0; j < n - i - 1; j++){

                // comparison

                steps.push({

                    array:[...arr],

                    compare:[j,j+1],

                    swap:false,

                    variables:{
                        i,
                        j
                    },

                    explanation:`Comparing ${arr[j]} and ${arr[j+1]}.`

                });

                if(arr[j] > arr[j+1]){

                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];

                    // after swap

                    steps.push({

                        array:[...arr],

                        compare:[j,j+1],

                        swap:true,

                        variables:{
                            i,
                            j
                        },

                        explanation:`${arr[j]} and ${arr[j+1]} were swapped.`

                    });

                }

            }

        }

        // Final state

        steps.push({

            array:[...arr],

            compare:[],

            swap:false,

            variables:{},

            explanation:"Sorting completed."

        });

        return steps;

    }

};