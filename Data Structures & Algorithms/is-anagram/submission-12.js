class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // best solution is to use one map instead of 2
        let mapping = new Map()

        for(const chr of s) {
            if (mapping.has(chr)) {
                mapping.set(chr, mapping.get(chr) + 1)
                continue;
            }
            mapping.set(chr, 1);
        }
        for(const chr of t) {
            if (mapping.has(chr)) {
                mapping.set(chr, mapping.get(chr) - 1)
                continue;
            }
            mapping.set(chr, 1);
        }

        // check if all values in mapping is 0, is anagram else not.
        for(const [key, value] of mapping) {
            if (value != 0) return false;
        }

        return true;
    }
}
