
/**
* Performs a linear serach over an array of numbers.
*
* @param {number[]} haystack 
* @param {number} needle 
* @returns {number|undefined} - returns the index if number is found 
*
*/
export function linear_search(haystack, needle) {

    for (var i = 0; i < haystack.length; ++i) {
        if (needle === haystack[i]) {
            return i
        }
    }

    return undefined
}

