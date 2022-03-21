var adminarr = JSON.parse(localStorage.getItem("studentDataBase"));



adminarr.map(function(elem){
    var row = document.createElement("tr");

    var col1=document.createElement("td");
    col1.innerText=elem.formName;

    var col2=document.createElement("td");
    col2.innerText=elem.formNumber;

    var col3=document.createElement("td");
    col3.innerText=elem.formCity;

   

row.append(col1,col2,col3);
document.querySelector("#body").append(row);


});
