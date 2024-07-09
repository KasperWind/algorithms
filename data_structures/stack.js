/**
* @template T
* @typedef Node
* @type {object}
* @property {Node<T> | undefined} prev
* @property {T} item
*/

/**
 * @template {T}
 *
 */
export class Stack {
    #count
    #head
    constructor() {
        this.#count = 0
        this.#head = undefined
    }

    /**
    * @param {T} item 
    */
    push(item) {
        this.#count += 1
        const node = {item: item, prev: this.#head }
        this.#head = node
    }

    /**
    * @returns {T | undefined} - va 
    */
    pop() {
        if(this.#head) {
            this.#count -= 1
            const h = this.#head
            this.#head = h.prev 
            h.prev = undefined
            return h.item
        }
        return undefined
    }

    get_count() {
        return this.#count
    }

    print() {
        console.log('-----------------------------------')
        console.log(`list count: ${this.#count}`)
        console.log(`head: {item: ${this.#head?.item}}`)
        console.log('-----------------------------------')
        var prev = this.#head
        while (prev != undefined) {
            console.log(`element: {item: ${prev.item}}`)
            prev = prev.prev
        }
        console.log('===================================')
    }

}
