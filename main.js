var exchangeForm=document.querySelector(".exchangeForm");
var info=[];
exchangeForm.onsubmit=function(e){
e.preventDefault();
var elements=e.target.elements;
var data ={
amount:elements[0].value,
exchange:elements[1].value,
}
info.push(data);
print();
}
function print(){
    var d=``;
for(var i=0;i<info.length ; i++){
    if(info[i].exchange == "dollar"){
        d+=`
        <p>${info[i].amount * 3.5}</p>
        
        `;
 }else if(info[i].exchange == "dinar"){
    d+=`
    <p>${info[i].amount * 5}</p>
    
    `;
 }
 else{

    d+=`
    <p>${info[i].amount * 1}</p>
    
    `;
 }
 
}
document.querySelector("p").innerHTML=d;

}