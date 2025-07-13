const inputbox = document.querySelector(".adder_input");
const listcontainer = document.querySelector(".todo");
   
function addTask(){
if(inputbox.value === ''){
    alert("you must write stn!");
}
else{
    let divelement = document.createElement("div");
    divelement.className = "tod";
    let divtxt = document.createElement("h3");
    divtxt.className = "text";
    divtxt.innerHTML = inputbox.value;
    let iconcontainer = document.createElement("div");
    iconcontainer.className = "butt";
    let deleteicon = document.createElement("img");
    deleteicon.className  = "ibutton";
    deleteicon.src = "images/X.png";
    let editicon = document.createElement("img");
    editicon.className = "ibutton1"
    editicon.src = "images/edit.png"
    
    iconcontainer.appendChild(editicon);
    iconcontainer.appendChild(deleteicon);
    divelement.appendChild(divtxt);
    divelement.appendChild(iconcontainer);
    listcontainer.appendChild(divelement);
     

inputbox.value = '';

deleteicon.addEventListener("click",function(){
    divelement.remove()

});
   
}
}


// save
