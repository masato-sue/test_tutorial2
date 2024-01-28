const btn = document.getElementById('button1');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}
const controller=new AbortController();

// btn.addEventListener('click', () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// },
// {signal: controller.signal}
// );

// btn.onclick=()=>{//この方法では複数のイベントを追加できない
//     const rndCol=`rgb(${random(255)},${random(255)},${random(255)})`;
//     document.body.style.backgroundColor=rndCol;
// };

//htmlに<button onclick="bgChange()">press me</button>のようにかくこともできるが自分ではやらない。（インラインイベントハンドラー）

function bgChange(e){
    const rndCol=`rgb(${random(255)},${random(255)},${random(255)})`;
    e.target.style.backgroundColor=rndCol;
    console.log(e);
}

function bgChange2(){
    const rndCol=`rgb(${random(255)},${random(255)},${random(255)})`;
    return rndCol;
}

btn.addEventListener("click",bgChange);

const textBox=document.querySelector("#textBox");
const output=document.querySelector("#output");
textBox.addEventListener("keydown",(event)=>{
    output.textContent=`"${event.key}が押されました。`;
});

const form=document.querySelector("form");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const para=document.querySelector("p");

form.addEventListener("submit",(e)=>{
    if(fname.value===""||lname.value===""){
        e.preventDefault();
        para.textContent="姓と名を両方入力してください。";
    }
});
//バブリングの例
const output2=document.querySelector("#output2");
function handleClick(e){
    output2.textContent+=`${e.currentTarget.tagName} 要素をクリックしました\n`;
}

const container=document.querySelector("#container");
// container.addEventListener("click",handleClick);
const button=document.getElementById("button2");

// document.body.addEventListener("click",handleClick);
// button.addEventListener("click",handleClick); //同時にイベントが発生するとき最内側から発生（バブルアップ）

const button3=document.getElementById("button3");
const box=document.getElementById("div2");
const video =document.querySelector("video");

button3.addEventListener("click",()=>box.classList.remove("hidden"));
video.addEventListener("click",(event)=>{
    event.stopPropagation();
    video.play();
});
box.addEventListener("click",()=>box.classList.add("hidden"));

//イベントキャプチャの例
// container.addEventListener("click",handleClick,{capture:true});
// document.body.addEventListener("click",handleClick,{capture:true});

container.addEventListener("click",(event)=>{
    event.target.style.backgroundColor=bgChange2();
});