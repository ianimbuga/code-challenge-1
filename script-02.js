function speedDetector(speed) {
    const speedLimit = 70;

    if (speed < speedLimit) {
        console.log("Ok")
    } else {
        const speedDemeritPoint = 5
        const demeritPoints = Math.floor((speed - speedLimit) / speedDemeritPoint);

        if (demeritPoints > 12) {
            console.log("License Suspended")
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}
console.log(speedDetector(100))