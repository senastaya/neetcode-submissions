class Solution {
    /**
     * @param {string} str
     * @return {string}
     */
    private getHash(str: string): string {
        const hash: Record<string, number> = {};

        for (let i = 0; i < str.length; i++) {
            hash[str[i]] = (hash[str[i]] ?? 0) + 1;
        };

        return Object.keys(hash).sort().map(char => char + hash[char]).join('');
    }
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupped = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const hash = this.getHash(strs[i]);
            const list = groupped.has(hash) ? groupped.get(hash) : [];
            list.push(strs[i]);

            groupped.set(hash, list);
        }

        return Array.from(groupped.values());
    }
}
