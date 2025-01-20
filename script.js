function submitHandler(){
    debugger;
let outputdate=document.querySelector(".outputdate");
let inputdate=document.querySelector(".inputdate");
console.log("inputdate", inputdate.value);
let formattedDate=new Date(inputdate.value).toLocaleDateString();
outputdate.value=formattedDate;
}