let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");

cel.addEventListener('input',function(){
    let c = this.value;
    let f = (c*9/5)+32;
    let k = (c*1)+273;
    if(!Number.isInteger(f)){
        f= f.toFixed(3);
    }
    if(!Number.isInteger(k)){
        k= k.toFixed(3);
    }
    fah.value=f;
    kel.value=k;

});

fah.addEventListener('input',function(){
    let f = this.value;
    let c = (f-32)*5/9;
    let k = ((f-32)/1.8)+273;
    if(!Number.isInteger(c)){
        c= c.toFixed(3);
    }
    
    if(!Number.isInteger(k)){
        k= k.toFixed(3);
    }
    cel.value=c;
    kel.value=k;

});

kel.addEventListener('input',function(){
    let k = this.value;
    let f = (k-273) * 9/5 + 32;
    let c = k-273;

    if(!Number.isInteger(f)){
        f= f.toFixed(3);
    }
    if(!Number.isInteger(c)){
        c= c.toFixed(3);
    }
    fah.value=f;
    cel.value=c;

});

