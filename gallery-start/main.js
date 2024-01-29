const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];
/* Declaring the alternative text for each image file */
const alts=["Closeup of a human eye","wave","flower","wall picture in Egypt","batterfly"];

/* Looping through images */
for (let i=0;i<5;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `${images[i]}`);
    newImage.setAttribute('alt', `${alts[i]}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",(e)=>{
        displayedImage.setAttribute("src",e.target.src);
        displayedImage.setAttribute("alt",e.target.alt);
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",()=>{
    const btnclass=btn.getAttribute("class");
    if(btnclass==="dark"){
        btn.setAttribute("class","light");
        btn.textContent="Lighten";
        overlay.style.backgroundColor="rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute("class","dark");
        btn.textContent="Darken";
        overlay.style.backgroundColor="rgba(0,0,0,0)";
    }
})