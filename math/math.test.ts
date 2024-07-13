import { describe, test, expect } from "vitest";

import { add } from "./add.js";
import { sub } from "./sub.js";
import { mul } from "./mul.js";
import { div } from "./div.js";
import { isPalindrome } from "./palindrom.js";
import { reverseString } from "./reverse.js";

describe("Math functions", () => {
    test("should add correctly", () => {
        const a = 1;
        const b = 1;

        const result = add(a, b);

        expect(result).toBe(2);
    });

    test("should subtract correctly", () => {
        const a = 5;
        const b = 3;

        const result = sub(a, b);

        expect(result).toBe(2);
    });

    test("should multiply correctly", () => {
        const a = 5;
        const b = 5;

        const result = mul(a, b);

        expect(result).toBe(25);
    });

    test("should divide correctly", () => {
        const a = 5;
        const b = 5;

        const result = div(a, b);

        expect(result).toBe(1);
    });

    test("isPalindrom", () => {
        const s="tut"

        const result = isPalindrome(s)

        expect(result).toBe(true);
    });

    test("Reverse to word",()=>{
        const w="salom"

        const result=reverseString(w)

        expect(result).toBe("molas")
    })

});
