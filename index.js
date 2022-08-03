let body=document.getElementById("body");
console.log(body);
sayHello();
function sayHello() {
    document.write("Hello to all programmers");
}

const br=document.createElement("br");
body.appendChild(br);

function morning(a,b) {
     document.write(a-b);

}
morning(6,3);
const br1=document.createElement("br");
body.appendChild(br1);



const b=()=>{
    document.write("Hello to all learners");
}
b();


const br2=document.createElement("br");
body.appendChild(br2);

const square=(numbers)=>{
document.write(numbers*numbers);
}
square(6);
const br3=document.createElement("br");
body.appendChild(br3);

function myNumber(x,y) {
return x*x*y*2;
}
document.write(myNumber(6,7));

let myfamily= {
    me:"parfaite",
    sister:"keza",
    brother:"tom"
};
myfamily.me;