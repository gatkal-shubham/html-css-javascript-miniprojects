// const listContainer=document.getElementById("list-contanier");
// const inputBox=document.getElementById("input-box");

// function addTask(){

//     if(inputBox.value === ''){
//         alert("Enter Some Data in Input Box");
//     }else{
//         let li=document.createElement("li");
//         li.innerHTML=inputBox.value;
//         listContainer.appendChild(li);
       
       
//     }
// }

const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask(){

    if(inputBox.value === ''){
        alert("Enter Some Data");
    }else{
        console.log(inputBox.value);
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span=document.createElement("span");
        span.innerHTML="\u00d7"; // \u00d7-this is code for cross symbol()
        li.appendChild(span);


    }
    inputBox.value='';
    saveTask();

}

listContainer.addEventListener("click",function(event){
    // listContainer.remove(this);

    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveTask();
    }else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveTask();
    }
})
function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();