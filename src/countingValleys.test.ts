import countingValleys from "./countingValleys";

test("DDUU", function () {
    const path = "DDUU";
    const valleys = countingValleys(path);
    expect(valleys).toBe(1);
});

test("DDDUUU", function () {
    const path = "DDDUUU";
    const valleys = countingValleys(path);
    expect(valleys).toBe(1);
});

test("DDUUDDUUDDUU", function () {
    const path = "DDUUDDUUDDUU";
    const valleys = countingValleys(path);
    expect(valleys).toBe(3);
});

test("DDUUUDDDUUUDDDUUUDDU", function () {
    const path = "DDUUUDDDUUUDDDUUUDDU";
    const valleys = countingValleys(path);
    expect(valleys).toBe(4);
});

test("DDU", function () {
    const path = "DDU";
    expect(() => countingValleys(path)).toThrow(new Error("Invalid path"));
});
