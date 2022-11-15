/* jesus garcia
lab 8
15/11/2022
*/

const tokens = ["rock","paper","scissors"]
const AI = tokens[Math.floor(Math.random()*tokens.length)]


function rock(){
   var token = document.getElementById("rock").innerHTML
    play(token)
}

function paper(){
    var token = document.getElementById("paper").innerHTML
     play(token)
 }

 function scissors(){
    var token = document.getElementById("scissors").innerHTML
     play(token)
 }



 function play(token) {
     if(token == "rock" && AI == "scissors"){
         alert("you beat " + AI)
     }else if(token == "rock" && AI == "paper"){
         alert("you lost against " + AI)
     }else if(token == "rock" && AI == "rock"){
         alert("draw")
     }else if(token == "paper" && AI == "rock"){
         alert("you beat " + AI)
     }else if(token == "paper" && AI == "scissors"){
         alert("you lost against " + AI)
     }else if(token == AI){
         alert("draw")
     }else if (token == "scissors" && AI == "paper"){
         alert("you beat " + AI)
     }else if(token == "scissors" && AI == "rock"){
         alert("you lost against " + AI)
     }else {
         alert("draw")
     }
 }


