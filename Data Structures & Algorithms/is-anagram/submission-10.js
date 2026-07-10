class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapping_s = new Map();
        let mapping_t = new Map();

        for(const chr of s) {
            if (mapping_s.has(chr)) {
                mapping_s.set(chr, mapping_s.get(chr) + 1)
                continue;
            }
            mapping_s.set(chr, 1);
        }
        for(const chr of t) {
            if (mapping_t.has(chr)) {
                mapping_t.set(chr, mapping_t.get(chr) + 1)
                continue;
            }
            mapping_t.set(chr, 1);
        }

        // compare two maps. if same, anagram else not
        if (mapping_s.size != mapping_t.size) return false;
        for (const chr of s) {
            if (mapping_s.get(chr) != mapping_t.get(chr)) return false
        }
        // console.log(mapping_s, mapping_t);

        return true;
    }
}
