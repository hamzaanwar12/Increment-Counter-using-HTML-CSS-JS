
//It is also uite good but the later is quite impressive

let h1 =Array.from( document.querySelectorAll("h1")),i=1;
console.log(h1)

let increment = ()=>
{
    h1[0].textContent = `${Math.ceil(i*2.4*8)}`
    h1[1].textContent = `${Math.ceil(i*8)}`
    h1[2].textContent = `${Math.ceil(i*1.5*8)}`
    i++;
}

let incrementation = setInterval(() => {
    if(i>625)
        clearInterval(incrementation)
    else
        increment()
    
}, 0);


/*
let h1 = Array.from( document.querySelectorAll("h1"));
console.log(h1)
h1.forEach(element => {
    let increment = () => 
    {
        console.log(element.hasAttribute("data-target"))
        console.log(element.getAttribute("data-target"))
        let target = +element.getAttribute("data-target")
        let increment = target / 200;
        let value = +element.innerText;
        console.log(value)
       
        
        console.log(target)
        console.log(increment)
       
        if (value < target) 
        {
            value += increment
            element.textContent = Math.ceil( value);

            setTimeout (increment,1000); 
        }
    }

    increment()


})
*/