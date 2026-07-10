class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let output = [];
        nums.forEach((num1, i) => {
            if(output.length) return;
            nums.forEach((num2, j) => {
                if(i!=j && num1+num2 == target) {
                    output.push(i);
                    output.push(j);
                    return;
                }
            })
        })
        return output;
    }
}
