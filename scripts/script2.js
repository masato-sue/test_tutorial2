const para=document.querySelector("p");
para.addEventListener("click",updateName);

function updateName(){
  const name=prompt("名前を入力してください");
  para.textContent= `Player 1: ${name}`;
}