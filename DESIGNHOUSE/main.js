var a=document.querySelector(".menu");
console.log(a);
var b=document.getElementById("navul");
console.log(b);
a.addEventListener('click',()=>{

    console.log("clicked");
    if(b.style.display==="none")
    {
        b.classList.toggle(".active");
        b.style.display="unset";
    }
    else{
        b.style.display="none";
    }
    
})