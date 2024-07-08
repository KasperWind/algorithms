/**
 * @param {boolean[]} breaks
 * @returns {number|undefined} 
 */
export function two_crystal_balls(breaks) {
    var x = 1
    var jmp_amount = Math.floor(Math.sqrt(breaks.length))
    var i = jmp_amount
    for(; i < breaks.length; i += jmp_amount) {
        if(breaks[i]) {
            console.log(`crystal ${x} broken at i[${i}]`)
            x += 1
            break
        }
    }

    i -= jmp_amount

    for (; i < breaks.length; ++i) {
        if(breaks[i]) {
            console.log(`crystal ${x} broken at i[${i}]`)
            x += 1
            return i
        }
    }

    return undefined
}
