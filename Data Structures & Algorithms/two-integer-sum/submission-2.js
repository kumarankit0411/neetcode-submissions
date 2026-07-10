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
        let seen = {}
        let index = 0;
        let output;
        for(const num of nums) {
            if ((target - num) in seen) {
                return [seen[(target - num)], index]
            }
            seen[num] = index;
            index++;
        }
    }
}
