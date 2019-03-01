var gameMarker = "X"
function changeMarkerToX(){
     gameMarker = "X"
    console.log("The x button was clicked!")
 };
function changeMarkerToO(){
     gameMarker = "O"
    console.log("The o button was clicked!")
 };
 function placeMark(myDiv){ 
    console.log("The square was clicked!")
    document.getElementById(myDiv).innerHTML=gameMarker;
 }
 
// function getWinner() {
//  let box1 = document.getElementById ("box1"),
//    box2 = document.getElementById ("box2"),
//    box3 = document.getElementById ("box3"),
//    box4 = document.getElementById ("box4"),
//    box5 = document.getElementById ("box5"),
//    box6 = document.getElementById ("box6"),
//    box7 = document.getElementById ("box7"),
//    box8 = document.getElementById ("box8"),
//    box9 = document.getElementById ("box9");

// if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML && box3.innerHTML)
// console.log("win!");
// else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML && box6.innerHTML)
// console.log("win!");
// }
