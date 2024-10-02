let string="";


let buttons=document.querySelectorAll("button");
Array.from(buttons).forEach((itme)=>{
    itme.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string)
            let input1=document.querySelector(".input");
            input1.value=string;

        } else if(e.target.innerHTML=='AC'){
            string=""
            let input1=document.querySelector(".input");
            input1.value=string;

        }
        else if(e.target.innerHTML=='mic'){
           string=string.substring(0,string.length-1)
            let input1=document.querySelector(".input");
            input1.value=string;

        }
        else{
            string= string + e.target.innerHTML
            let input1=document.querySelector(".input");
input1.value=string;
        }
    })
})
