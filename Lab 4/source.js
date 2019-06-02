document.getElementById("resetBtn").addEventListener("click", function (){
document.getElementById('resultsWrapper').innerHTML = "<p> No text to show</p>";
document.getElementById('resetBtn').disabled = true;
});
document.getElementById('runBtn').addEventListener('click',function (){
fetch('http://libertyville.rice.iit.edu/scripts/4565_lab4.php')
.then(function(response){
    return response.json();
})
.then(function(myJson){
  //Cleaning the resultsWrapper field
  document.getElementById('resultsWrapper').innerHTML = "";
  let table = document.createElement('table');
  table.id = 'tableResults';
  let row1 = document.createElement('tr');
  row1.id = 'row1';
  const enumHeader= {1:'Id',2:'First Name',3:'Last Name',4:'Title',5:'Email',6:'Gender',7:'Active'};
  for(let i=1;i<=enumHeader.length;i++){
    console.log('Llega aqui');
    let (col+i) = document.createElement('th');
    (col+i).appendChild(document.createTextNode(enumHeader.i));
    row1.appendChild(col+i);
  }
  document.getElementById('tableResults').appendChild('row1');

  document.getElementById('resultsWrapper').appendChild('tableResults');
  document.getElementById('resetBtn').disabled = false;
});//end then

});//END function handleClick
document.getElementById('resultsWrapper').innerHTML = "<p> No text to show</p>";
document.getElementById('resetBtn').disabled = true;
