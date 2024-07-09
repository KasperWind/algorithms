/**
* @template T
* @typedef Node
* @type {object}
* @property {Node<T> | undefined} next
* @property {Node<T> | undefined} prev
* @property {T} item
*/

/**
 * @template T
 * @param {T} item 
 * @param {Node<T> | undefined} next 
 * @returns {Node<T>}
 */
function create_node(item, next = undefined, prev = undefined) {
    return {
        item : item,
        next : next,
        prev : prev
    }
}

/**
 * @template {T}
 *
 */
export class Queue {
    #count
    #head
    #tail
    constructor() {
        this.#count = 0
        this.#head = undefined
        this.#tail = undefined
    }

    /**
    * @param {T} item 
    */
    enque(item) {
        this.#count += 1
        const h = this.#head
        const node = { item: item, next: h}
        if (h !== undefined) {
            h.prev = node
        }
        this.#head = node

        if (this.#tail === undefined) {
           this.#tail = this.#head 
        }
    }

    /**
    * @returns {T | undefined} - va 
    */
    deque() {   
        if(this.#tail) {
            const t = this.#tail
            this.#count -= 1
            this.#tail = this.#tail.prev
            if (this.#tail) {
                this.#tail.next = undefined
            }

            t.next = undefined
            t.prev = undefined
            return t.item
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
        var next = this.#head
        while (next != undefined) {
            console.log(`element: {item: ${next.item}}`)
            next = next.next
        }
        console.log('-----------------------------------')
        console.log(`tail: {item: ${this.#tail?.item}}`)
        console.log('===================================')
    }

}
