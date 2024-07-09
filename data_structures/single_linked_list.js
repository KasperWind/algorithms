
/**
* @template T
* @typedef Node
* @type {object}
* @property {Node<T> | undefined} next
* @property {T} item
*/

/**
 * @template T
 * @param {T} item 
 * @param {Node<T> | undefined} next 
 * @returns {Node<T>}
 */
function create_node(item, next = undefined) {
    return {
        item : item,
        next : next
    }
}


/**
 * @template T
 *
 */
export class LinkedList {
    /** @type {Node<T> | undefined } head */
    #head

    /** @type {number} count */
    #count

    /** @type {Node<T> | undefined} tail */
    #tail

    constructor() {
        this.#head = undefined 
        this.#tail = undefined
        this.#count = 0
    }

    /**
    * @param {T} item 
    */
    append(item) {
        if(this.#head === undefined) {
            this.#head = create_node(item)
            this.#tail = this.#head
        } else {
            this.#tail.next = create_node(item)
            this.#tail = this.#tail.next
        }
        this.#count += 1
    }

    /**
    * @param {T} item 
    */
    prepend(item) {
        if(this.#head === undefined) {
            this.#head = create_node(item)
            this.#tail = this.#head
        } else {
            const t = this.#head
            this.#head = create_node(item, t)
        }
        this.#count += 1
    }

    /**
    * @param {T} item 
    * @param {number} index 
    */
    insert_at(item, index) {
        if (this.#head === undefined) {
            this.#head = create_node(item)
            this.#tail = this.#head
            return
        }
        if (index <= this.#count) {
            this.#tail.next = create_node(item)
            this.#tail = this.#tail.next
            return
        }
        var i = 0
        var current = this.#head
        while (current != undefined && i != index) {
            current = current.next
        }
        if (current != undefined) {
            var next = current.next
        }

    }

    /**
    * @param {T} item 
    */
    delete(item) {
        var prev = this.#head
        var current = this.#head
        while (current != undefined) {
            if (current.item === item) {
                prev.next = current.next                     
                if (this.#head === current) {
                    this.#head = current.next
                }
                if (prev.next === undefined) {
                    this.#tail = prev
                }
                if (this.#head === undefined) {
                    this.#tail = undefined
                }
                this.#count -= 1
                current.next = undefined
                return
            }
            prev = current
            current = current.next
        }
    }

    /**
    * @param {number} index 
    * @returns {T | undefined}
    */
    get(index) {
        if (index >= this.#count  || this.#head === undefined) {
            return undefined
        }
        var i = 0
        var next = this.#head
        while (i != index) {
            next = next.next
            i += 1
        }
        return next.item
    }

    get_head() {
        return this.#head?.item
    }

    get_tail() {
        return this.#tail?.item
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
