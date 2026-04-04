class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      
      
        const map = new Map()

        for(let i = 0 ; i < strs.length; i++){
            const sortedString=[...strs[i]].sort().join('')
         
            if(map.has(sortedString)){
               
                map.get(sortedString).push(strs[i])
            }
            else{
               
                map.set(sortedString, [strs[i]])
            }
        }
        return Array.from( map.values())
      
    }
}
