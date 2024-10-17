const speedLimit = 70;

function speedDetector(speed){
if(speed < 70){
console.log("ok");

}else{
const demeritPoints = Math.floor((speed - speedLimit)/5);
console.log(`points: ${demeritPoints}`);

if(demeritPoints > 12){
    console.log("License suspended");

}

}
}

speedDetector(40);
speedDetector(90);
speedDetector(140);