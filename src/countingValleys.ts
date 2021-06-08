export default function execute (path: string) {
    let valleys = 0;
    let level = 0;
    for (const step of [...path]) {
        if (step === "D") {
            if (level === 0) valleys++;
            level--;
        } else {
            level++;
        }
    }
    if (level !== 0) throw new Error("Invalid path");
    return valleys;
}
