import { expect, test } from "bun:test"
import { LinkedList } from "./single_linked_list.js"

test("can append one element", () => {
    const l = new LinkedList()
    l.append('A')
    expect(l.get_count()).toBe(1)
})

test("can append one element and get one element", () => {
    const l = new LinkedList()
    l.append('A')
    expect(l.get_count()).toBe(1)
    const r = l.get(0)
    expect(r).toBe('A')
    const head = l.get_head()
    expect(head).toBe('A')
    const tail = l.get_tail()
    expect(tail).toBe('A')
})


test("can append four element and get one element at index 3", () => {
    const l = new LinkedList()
    l.append('A')
    l.append('B')
    l.append('C')
    l.append('D')
    expect(l.get_count()).toBe(4)
    var r = l.get(0)
    expect(r).toBe('A')
    r = l.get(1)
    expect(r).toBe('B')
    r = l.get(2)
    expect(r).toBe('C')
    r = l.get(3)
    expect(r).toBe('D')
})

test("can prepend four element and get one element at index 3", () => {
    const l = new LinkedList()
    l.prepend('A')
    l.prepend('B')
    l.prepend('C')
    l.prepend('D')
    expect(l.get_count()).toBe(4)
    var r = l.get(0)
    expect(r).toBe('D')
    r = l.get(1)
    expect(r).toBe('C')
    r = l.get(2)
    expect(r).toBe('B')
    r = l.get(3)
    expect(r).toBe('A')
})
