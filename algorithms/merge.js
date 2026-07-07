window.algorithm = {
     type: "array",
     
    name: "Merge Sort",

    difficulty: "Medium",

    timeComplexity: "O(n log n)",

    spaceComplexity: "O(n)",

    cpp: `class Solution{
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

    pseudo: `Divide array into two halves

Sort left half

Sort right half

Merge both sorted halves`,

    generateSteps(array){

        const arr=[...array];

        const steps=[];

        function merge(low,mid,high){

            let temp=[];

            let left=low;

            let right=mid+1;

            while(left<=mid && right<=high){

                steps.push({

                    array:[...arr],

                    compare:[left,right],

                    swap:false,

                    variables:{low,mid,high,left,right},

                    explanation:`Comparing ${arr[left]} and ${arr[right]}.`

                });

                if(arr[left]<=arr[right]){

                    temp.push(arr[left++]);

                }
                else{

                    temp.push(arr[right++]);

                }

            }

            while(left<=mid){

                temp.push(arr[left++]);

            }

            while(right<=high){

                temp.push(arr[right++]);

            }

            for(let i=low;i<=high;i++){

                arr[i]=temp[i-low];

            }

            steps.push({

                array:[...arr],

                compare:[],

                swap:true,

                variables:{low,mid,high},

                explanation:`Merged subarrays from ${low} to ${high}.`

            });

        }

        function mergeSort(low,high){

            if(low>=high) return;

            let mid=Math.floor((low+high)/2);

            mergeSort(low,mid);

            mergeSort(mid+1,high);

            merge(low,mid,high);

        }

        mergeSort(0,arr.length-1);

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