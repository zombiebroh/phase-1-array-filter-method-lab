

function findMatching (names) {
    return drivers.filter(names => names === "Bobby")
}

console.log(findMatching(drivers));