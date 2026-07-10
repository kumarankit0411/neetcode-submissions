class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let deduplicated_nums = new Set(nums);
        // if(nums.length > deduplicated_nums.size) return true;
        // return false;
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true; // Found a duplicate early!
            }
            seen.add(num);
        }
        return false;
    }
}
