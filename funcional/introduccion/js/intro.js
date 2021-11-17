//IMPERATIVA

const hola = "Angela";
const decirHola =()=>{
    console.log(`Hi ${hola}`)
    //return function(){abcd};
}
//decirHola();


//FUNCIONAL

const dHI = (n)=>`Hi ${n}`;
//console.log(dHI("Rubí"));
//console.log(dHI(hola));


const sum = (a,b) => a + b;
/*let cachar = sum(2,2);
console.log(cachar);
console.log(sum(2,2));*/
const sum2 = (a,b) => a - b;
const suma = (a,b,rrrr) => rrrr(a,b);

console.log(suma(2,2,sum2));