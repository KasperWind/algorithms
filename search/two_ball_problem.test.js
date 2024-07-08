import { expect, test } from "bun:test"
import { two_crystal_balls } from "./two_ball_problem"

test("crystal wont break", () => {
    const breaks = [false,false,false,false,false,false,false,false,false,false,false,false,false,]
    expect(two_crystal_balls(breaks)).toBe(undefined)
})

test("crystal will break at 6", () => {
    const breaks = [false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,]
    expect(two_crystal_balls(breaks)).toBe(6)
})

test("crystal will break at 0", () => {
    const breaks = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,]
    expect(two_crystal_balls(breaks)).toBe(0)
})

test("crystal will break at 1", () => {
    const breaks = [false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,]
    expect(two_crystal_balls(breaks)).toBe(1)
})
test("crystal will break at 13", () => {
    const breaks = [false,false,false,false,false,false,false,false,false,false,false,false,false,true]
    expect(two_crystal_balls(breaks)).toBe(13)
})
