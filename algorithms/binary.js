window.algorithm = {
    type: "array",
    
    name: "Binary Search",

    difficulty: "Easy",

    timeComplexity: "O(log n)",

    spaceComplexity: "O(1)",

    cpp: `class Solution{
public:

    int binarySearch(vector<int>& arr,int target){

        int low=0;
        int high=arr.size()-1;

        while(low<=high){

            int mid=low+(high-low)/2;

            if(arr[mid]==target)
                return mid;

            else if(arr[mid]<target)
                low=mid+1;

            else
                high=mid-1;

        }

        return -1;

    }

};`,

    pseudo: `low = 0

high = n-1

while low <= high

    mid = (low + high) / 2

    if arr[mid] == target

        return mid

    else if arr[mid] < target

        low = mid + 1

    else

        high = mid - 1

return -1`,

    generateSteps(array,target){

    const arr=[...array].sort((a,b)=>a-b);

    const steps=[];
    steps.push({

    array:[...arr],

    compare:[],

    swap:false,

    variables:{target},

    explanation:"Array sorted. Binary Search starts."

});

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

    let low=0;

    let high=arr.length-1;

    while(low<=high){

        const mid=Math.floor((low+high)/2);

        steps.push({

            array:[...arr],

            compare:[mid],

            swap:false,

            variables:{
                low,
                high,
                mid,
                target
            },

            explanation:`Checking middle element ${arr[mid]}.`

        });

        if(arr[mid]===target){

            steps.push({

                array:[...arr],

                compare:[mid],

                swap:true,

                variables:{
                    index:mid,
                    target
                },

                explanation:`Target ${target} found at index ${mid}.`

            });

            return steps;

        }

        if(arr[mid]<target){

            low=mid+1;

        }
        else{

            high=mid-1;

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