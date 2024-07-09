import { expect, test } from "bun:test"
import { bubble_sort } from "./bubble_sort.js"

test("sorting array 1", () => {
    var array = [0, 1, 9, 2, 7, 2, 1]
    bubble_sort(array)
    expect(array).toStrictEqual([0,1,1,2,2,7,9])
})
