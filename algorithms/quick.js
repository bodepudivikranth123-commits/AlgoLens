window.algorithm = {
      type: "array",
      
    name: "Quick Sort",

    difficulty: "Medium",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(log n)",

    cpp: `class Solution{
public:

    int partition(vector<int>& arr,int low,int high){

        int pivot=arr[high];

        int i=low-1;

        for(int j=low;j<high;j++){

            if(arr[j]<pivot){

                i++;

                swap(arr[i],arr[j]);

            }

        }

        swap(arr[i+1],arr[high]);

        return i+1;

    }

    void quickSort(vector<int>& arr,int low,int high){

        if(low<high){

            int pi=partition(arr,low,high);

            quickSort(arr,low,pi-1);

            quickSort(arr,pi+1,high);

        }

    }

};`,

    pseudo: `Choose last element as pivot

Partition array

Place pivot in correct position

Recursively sort left and right parts`,

    generateSteps(array){

        const arr=[...array];

        const steps=[];

        function partition(low,high){

            let pivot=arr[high];

            let i=low-1;

            for(let j=low;j<high;j++){

                steps.push({

                    array:[...arr],

                    compare:[j,high],

                    swap:false,

                    variables:{
                        low,
                        high,
                        i,
                        j,
                        pivot
                    },

                    explanation:`Comparing ${arr[j]} with pivot ${pivot}.`

                });

                if(arr[j]<pivot){

                    i++;

                    [arr[i],arr[j]]=[arr[j],arr[i]];

                    steps.push({

                        array:[...arr],

                        compare:[i,j],

                        swap:true,

                        variables:{
                            low,
                            high,
                            i,
                            j,
                            pivot
                        },

                        explanation:`Swapped ${arr[i]} and ${arr[j]}.`

                    });

                }

            }

            [arr[i+1],arr[high]]=[arr[high],arr[i+1]];

            steps.push({

                array:[...arr],

                compare:[i+1,high],

                swap:true,

                variables:{
                    low,
                    high,
                    pivotIndex:i+1
                },

                explanation:`Placed pivot ${pivot} at index ${i+1}.`

            });

            return i+1;

        }

        function quickSort(low,high){

            if(low<high){

                const pi=partition(low,high);

                quickSort(low,pi-1);

                quickSort(pi+1,high);

            }

        }

        quickSort(0,arr.length-1);

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