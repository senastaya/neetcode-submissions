class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }

        const hash = new Map();
        for (let i = 0; i < s.length; i++) {
            hash.set(
                s[i],
                (hash.get(s[i]) ?? 0) + 1
            )
        }
        for (let i = 0; i < t.length; i++) {
            if (!hash.has(t[i])) {
                return false;
            }

            const count = hash.get(t[i]);

            if (count === 1) {
                hash.delete(t[i]);
            } else {
                hash.set(t[i], count - 1)
            }
        };

        return hash.size === 0;
    }
}
