function ageCalculate(){
    const DateInput=document.getElementById('data').value;
let result=document.getElementById('result')
if(!DateInput){
result.innerHTML="Please Selcet the valid date of birth"
return;
}

    let dod=new Date(DateInput);
    let toDate= new Date()
    let age = toDate.getFullYear() - dod.getFullYear();
    console.log(age)
    const monthDifference = toDate.getMonth() - dod.getMonth();
    console.log(monthDifference)
    result.innerHTML=`You are age is => ${age} `


}



