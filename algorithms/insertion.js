window.algorithm = {
     type: "array",
     
    name: "Insertion Sort",

    difficulty: "Easy",

    timeComplexity: "O(n²)",

    spaceComplexity: "O(1)",

    cpp: `class Solution{
public:

    void insertionSort(vector<int>& arr){

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

    }

};`,

    pseudo: `for i = 1 to n-1

    key = arr[i]

    j = i-1

    while j>=0 and arr[j]>key

        arr[j+1]=arr[j]

        j--

    arr[j+1]=key`,

    generateSteps(array){

        const arr=[...array];

        const steps=[];

        const n=arr.length;

        for(let i=1;i<n;i++){

            let key=arr[i];

            let j=i-1;

            steps.push({

                array:[...arr],

                compare:[i],

                swap:false,

                variables:{
                    i,
                    j,
                    key
                },

                explanation:`Selected ${key} as key.`

            });

            while(j>=0){

                steps.push({

                    array:[...arr],

                    compare:[j,j+1],

                    swap:false,

                    variables:{
                        i,
                        j,
                        key
                    },

                    explanation:`Comparing ${arr[j]} with ${key}.`

                });

                if(arr[j]>key){

                    arr[j+1]=arr[j];

                    steps.push({

                        array:[...arr],

                        compare:[j,j+1],

                        swap:true,

                        variables:{
                            i,
                            j,
                            key
                        },

                        explanation:`Shifted ${arr[j]} to the right.`

                    });

                    j--;

                }
                else{

                    break;

                }

            }

            arr[j+1]=key;

            steps.push({

                array:[...arr],

                compare:[j+1],

                swap:false,

                variables:{
                    i,
                    key
                },

                explanation:`Inserted ${key} at index ${j+1}.`

            });

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