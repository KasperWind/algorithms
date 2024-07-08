import { expect, test } from "bun:test"
import { linear_search } from "./linear"

const array = [0, 1, 2, 3, 4, 5, 6, 7]

test("linear search can't find 8", () => {
    expect(linear_search(array, 8)).toBe(undefined)
})

test("linear search can find 2 at index 2", () => {
    expect(linear_search(array, 2)).toBe(2)
})

test("linear search can find 0 at index 0", () => {
    expect(linear_search(array, 0)).toBe(0)
})

test("linear search can find 7 at index 7", () => {
    expect(linear_search(array, 7)).toBe(7)
})

