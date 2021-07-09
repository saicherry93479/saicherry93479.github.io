var a=document.querySelector(".bar");
// console.log(a)
var b=document.querySelector(".ul-header");

var j=0;
a.addEventListener('click',()=>{
    if(j%2===0)
    {
        b.style.display="unset";

    }
    else{
        b.style.display="none";
    }
    j++;
})