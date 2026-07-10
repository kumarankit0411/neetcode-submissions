class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let deduplicated_nums = Array.from(new Set(nums));
        if(nums.length > deduplicated_nums.length) return true;
        return false;
    }
}
