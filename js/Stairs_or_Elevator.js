
http://codeforces.com/contest/1054/problem/A

(function (){
  function check(arr) {
    arr.forEach(element => {
      Math.abs(element); 
    });
    const [inFloor, outFloor, elevatorFloor, timeStairs, timeElevator, timeDoors] = arr;
    let floorCount = outFloor - inFloor;
    floorCount = Math.abs(floorCount);
  
    function calcElevator(){
      let targetFloor = inFloor > elevatorFloor ? inFloor - elevatorFloor : elevatorFloor - inFloor;
      let targetFloorTime = targetFloor * timeElevator;
  
      return targetFloorTime + timeDoors*2 + timeElevator*floorCount ;
    }
  
    function calcStairs(){
      return timeStairs * floorCount;
    }
  
    // True если на лифте быстрее, иначе false 
    return calcElevator() < calcStairs();
  }
  
  function main(str) {
    str =  str || prompt();
    const arr = str.split(' ');
    const output = check(arr) ? 'YES' : 'NO';
    console.log(output);
  }
  //main();
}())