window.algorithm = {
    type: "array",

    name: "Selection Sort",

    difficulty: "Easy",

    timeComplexity: "O(n²)",

    spaceComplexity: "O(1)",

    cpp: `class Solution{
public:

    void selectionSort(vector<int>& arr){

        int n = arr.size();

        for(int i=0;i<n-1;i++){

            int minIndex=i;

            for(int j=i+1;j<n;j++){

                if(arr[j]<arr[minIndex]){

                    minIndex=j;

                }

            }

            swap(arr[i],arr[minIndex]);

        }

    }

};`,

    pseudo: `for i = 0 to n-2

    minIndex = i

    for j = i+1 to n-1

        if arr[j] < arr[minIndex]

            minIndex = j

    swap(arr[i], arr[minIndex])`,

    generateSteps(array){

        const arr=[...array];

        const steps=[];

        const n=arr.length;

        for(let i=0;i<n-1;i++){

            let minIndex=i;

            steps.push({

                array:[...arr],

                compare:[i],

                swap:false,

                variables:{
                    i,
                    minIndex
                },

                explanation:`Starting pass ${i+1}.`

            });

            for(let j=i+1;j<n;j++){

                steps.push({

                    array:[...arr],

                    compare:[minIndex,j],

                    swap:false,

                    variables:{
                        i,
                        j,
                        minIndex
                    },

                    explanation:`Comparing ${arr[j]} with current minimum ${arr[minIndex]}.`

                });

                if(arr[j]<arr[minIndex]){

                    minIndex=j;

                    steps.push({

                        array:[...arr],

                        compare:[minIndex],

                        swap:false,

                        variables:{
                            i,
                            j,
                            minIndex
                        },

                        explanation:`New minimum found at index ${minIndex}.`

                    });

                }

            }

            if(minIndex!==i){

                [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];

                steps.push({

                    array:[...arr],

                    compare:[i,minIndex],

                    swap:true,

                    variables:{
                        i,
                        minIndex
                    },

                    explanation:`Swapping ${arr[minIndex]} and ${arr[i]}.`

                });

            }

        }

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