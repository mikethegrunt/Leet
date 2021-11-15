/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    
    const dfs = (curCandidates, curTarget, value) => {
        if (curTarget === 0) result.push(value);
        if (curTarget < 0) return;
        for(let i = 0; i < curCandidates.length; i++) {
            dfs(curCandidates.slice(i), curTarget - curCandidates[i], [...value, curCandidates[i]])
        }
    }
    
    dfs(candidates, target, [])
    
    return result;
};