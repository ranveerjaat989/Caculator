let buttons=document.querySelectorAll('button');
let string='';
let input=document.querySelector('input');
Array.from(buttons).forEach((e)=>{
    e.addEventListener('click',()=>{
        if(e.innerText==="="){
            string=eval(string);
            input.value=string;
        }
        else if(e.innerText==="AC")
        {
            string="";
            input.value=string;
        }
        else if(e.innerText==="x")
        {
            string=string+"*";
            input.value=string;
        }
        else if(e.innerText==="x2")
        {
            string=string+'*'+string;
            input.value=string;
        }
        else if(e.innerText==="π")
        {
            string=string+'*3.14';
            input.value=string;
        }
        else if(e.innerText==="CE")
        {
            string=string.slice(0,string.length-1)
            input.value=string;
        }
        else{
            string=string+e.innerText;
            input.value=string;
           
        }
    })
})
