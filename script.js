window.onload = function(){

  var playerTurn = document.getElementsByClassName("playerTurn")[0];
  var turn = 1; //1=X, 0=O
  var turnChar = ["O","X"];
  var turnText = ["It is O's turn","It is X's turn"];
  var winText1 = "The winner is ";
  var winText2 = "!!!";

  var pickedList = [[],[]];
  var boxes = document.getElementsByTagName("td");
  var reset = document.getElementById("reset");

  for(var box of boxes){
    box.className = "available";

    box.addEventListener("click",function(){
      if(this.classList.contains("available")){
        this.className = "";
        this.innerHTML = turnChar[turn];
        pickedList[turn].push(this.dataset.num);
        turn = (turn+1)%2;
        playerTurn.innerHTML = turnText[turn];
        console.log(pickedList);
      }
    });
  }

  reset.addEventListener("click",function(){
    turn = 1;
    playerTurn.innerHTML = turnText[1];
    pickedList = [[],[]];
    for(var box of boxes){
      box.innerHTML = "";
      box.className = "available";
    }
  });






};
