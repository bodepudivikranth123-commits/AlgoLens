window.algorithm = {
     type: "array",
     
    name: "Linear Search",

    difficulty: "Easy",

    timeComplexity: "O(n)",

    spaceComplexity: "O(1)",

    cpp: `class Solution{
public:

    int linearSearch(vector<int>& arr,int target){

        for(int i=0;i<arr.size();i++){

            if(arr[i]==target){

                return i;

            }

        }

        return -1;

    }

};`,

    pseudo: `for each element

if element == target

return index

return -1`,

   generateSteps(array,target){

    const arr=[...array];

    const steps=[];

    if(target===null || isNaN(target)){

        steps.push({

            array:[...arr],

            compare:[],

            swap:false,

            variables:{},

            explanation:"Select a target to start searching."

        });

        return steps;

    }

    for(let i=0;i<arr.length;i++){

        steps.push({

            array:[...arr],

            compare:[i],

            swap:false,

            variables:{
                i,
                target
            },

            explanation:`Comparing ${arr[i]} with target ${target}.`

        });

        if(arr[i]===target){

            steps.push({

                array:[...arr],

                compare:[i],

                swap:true,

                variables:{
                    index:i,
                    target
                },

                explanation:`Target ${target} found at index ${i}.`

            });

            return steps;

        }

    }

    steps.push({

        array:[...arr],

        compare:[],

        swap:false,

        variables:{
            target
        },

        explanation:`Target ${target} not found.`

    });

    return steps;

}

};