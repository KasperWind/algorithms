
/**
* Performs a binary serach over an sorted array of numbers.
*
* @param {number[]} haystack 
* @param {number} needle 
* @returns {number|undefined} - returns the index if number is found 
*
*/
export function binary_search(haystack, needle) {
    var hi = haystack.length
    var lo = 0
    var middle = Math.floor(lo + (hi - lo) / 2)

    while (lo < hi) {
        middle = Math.floor(lo + (hi - lo) / 2)
        const v = haystack[middle]
        if (v === needle) {
            return middle
        } else if (needle > v) {
            lo = middle + 1
        } else {
            hi = middle
        }
    }
    return undefined
}
