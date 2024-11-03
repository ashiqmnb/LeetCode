/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // return s.split("").sort().join("") == goal.split("").sort().join("")
    if (s.length !== goal.length) return false;
    let doubled = s + s;
    return doubled.includes(goal);
};