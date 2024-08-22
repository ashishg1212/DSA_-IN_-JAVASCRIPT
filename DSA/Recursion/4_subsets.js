// Question : Subsets ( Backtracking Algorithm using recursion )
// Given an Integer array nums of unique elements, return all posible subsets (the power set). 
// The solution set must not contain duplicate subsets. Return the solution in any order

// Input = [1, 2, 3] --------->>>> Output : [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
// Input = [0] ----------->>>> output : [[], [0]]

function subsets(nums) {
    let result = [];
    let temp = [];

    function recursiveSubset(nums, i) {
        if(i === nums.length) {
            return result.push([...temp]);
        }
        temp.push(nums[i]);
        recursiveSubset(nums, i+1);
        temp.pop();
        recursiveSubset(nums, i+1);
    }

    recursiveSubset(nums, 0);
    return result;
}

console.log(subsets([1, 2]));
