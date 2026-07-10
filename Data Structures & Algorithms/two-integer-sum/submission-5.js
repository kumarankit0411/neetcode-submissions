class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // nums.forEach((num1, i) => {
        //     if(output.length) return;
        //     nums.forEach((num2, j) => {
        //         if(i!=j && num1+num2 == target) {
        //             output.push(i);
        //             output.push(j);
        //             return;
        //         }
        //     })
        // })
        // for(let i = 0; i < nums.length; i++) {
        //     for(let j = i+1; j < nums.length; j++) {
        //         if(nums[i] + nums[j] == target) return [i, j]
        //     }
        // }
        // optimum solution is using hash map
        let seen = new Map();
        let index = 0;
        for(const num of nums) {
            let complement = target - num;
            if (seen.has(complement)) {
                return [seen.get(complement), index]
            }
            seen.set(num, index)
            index++;
        }
    }
}
