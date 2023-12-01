Given an integer n, return a counter function. This counter function initially returns n
and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


SOLUTION:

function createCounter(n, operations) {
    const results = [];
    let current = n;

    for (const operation of operations) {
        if (operation === "call") {
            results.push(current);
            current++;
        }
    }

    return results;
}
