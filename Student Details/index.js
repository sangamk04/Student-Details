document.querySelector("#form").addEventListener("submit",formSubmit);
var formArr = JSON.parse(localStorage.getItem("studentDataBase")) || [];

function formSubmit(event){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var number = document.querySelector("#number").value;
    var city = document.querySelector("#city").value;
  

    var formObj = {
        formName:name,
        formNumber:number,
        formCity:city,
       

    };

    formArr.push(formObj);
    localStorage.setItem("studentDataBase",JSON.stringify(formArr));


}