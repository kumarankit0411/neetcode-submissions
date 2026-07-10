class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let deduplicated_nums = new Set(nums);
        if(nums.length > deduplicated_nums.size) return true;
        return false;
    }
}
