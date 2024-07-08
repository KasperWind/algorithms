import { expect, test } from "bun:test"
import { binary_search } from "./binary"

const array = [0, 1, 2, 3, 4, 5, 6, 7]

test("binary search can't find 8", () => {
    expect(binary_search(array, 8)).toBe(undefined)
})

test("binary search can find 2 at index 2", () => {
    expect(binary_search(array, 2)).toBe(2)
})

test("binary search can find 0 at index 0", () => {
    expect(binary_search(array, 0)).toBe(0)
})

test("binary search can find 7 at index 7", () => {
    expect(binary_search(array, 7)).toBe(7)
})

