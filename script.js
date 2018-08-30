window.onload = function(){

  var playerTurn = document.getElementsByClassName("playerTurn")[0];
  var turn = 1; //1=X, 0=O
  var turnChar = ["O","X"];
  var turnText = ["It is O's turn","It is X's turn"];

  var clicked = [null,null,null,
                null,null,null,
                null,null,null];

  var boxes = document.getElementsByTagName("td");
  for(var box of boxes){
    box.className = "available";

    box.addEventListener("click",function(){
      if(this.classList.contains("available")){
        this.className = "";
        this.innerHTML = turnChar[turn];
        turn = (turn+1)%2;
        playerTurn.innerHTML = turnText[turn];
      }
    });
  }


















};
