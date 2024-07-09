
/**
* Performs a bubble sort for an array of numbers
*
* @param {number[]} array 
*
*/
export function bubble_sort(array) {

    for (var i = 0; i < array.length; ++i) {
        for (var j = 0; j < array.length - 1 - i; ++j) {
            if (array[j] > array[j + 1]) {
                const tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }
}

