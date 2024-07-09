import { expect, test } from "bun:test"
import { Queue } from "./queue.js"

test("can enque and queue elements", () => {
    const q = new Queue()
    q.enque('A')
    expect(q.get_count()).toBe(1)
    q.enque('B')
    q.enque('C')
    q.enque('D')
    expect(q.get_count()).toBe(4)
    expect(q.deque()).toBe('A')
    expect(q.get_count()).toBe(3)
    expect(q.deque()).toBe('B')
    expect(q.get_count()).toBe(2)
    expect(q.deque()).toBe('C')
    expect(q.get_count()).toBe(1)
    expect(q.deque()).toBe('D')
    expect(q.get_count()).toBe(0)
    expect(q.deque()).toBe(undefined)
    expect(q.get_count()).toBe(0)
    expect(q.deque()).toBe(undefined)
    expect(q.get_count()).toBe(0)
})
