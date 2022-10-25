const add=()=>{
    const a = parseInt(document.getElementById('first').value);
    const b = parseInt(document.getElementById('second').value);

    document.getElementById('result').innerHTML= a+"+"+b+"="+(a+b);
   }