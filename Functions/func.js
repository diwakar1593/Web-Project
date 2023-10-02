let system=document.getElementById("system");
let btn=document.getElementById("btn");
let system2=document.getElementById("system2");
let output=document.getElementById("output");
let warn=document.getElementById("warn");
let ok=document.getElementById("ok");

btn.addEventListener("click",()=>{
    let feet=document.getElementById("feet").value;
    let inch=document.getElementById("inch").value;
    let weight=document.getElementById("weight").value;

    const length=((feet*12)+Number(inch));
    const height=(length*2.54)/100;
    const bmi=(weight / (height*height));
    output.innerText=("Your BMI is :"+"\n"+  bmi.toFixed(3));
    system2.style.display="block"; 
    system.style.display="none";
if(bmi<18.5)
{
    warn.innerText="Your are Underweight...";
}
else if( bmi>18.5 && bmi<25)
{
    warn.innerText="You are a Healthy Person...";
}
else{
    warn.innerText="You are Overweight...";
}

if(feet=="" || inch==""  || weight=="")
{
    location.reload();
}
});
ok.addEventListener("click",()=>{
    location.reload();
})