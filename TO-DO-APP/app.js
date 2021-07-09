let input=document.querySelector("#add");
    console.log(input);
    let list=document.querySelector("#list");
     console.log(list);
     let el=document.getElementsByTagName("li");
     console.log(el);
    






function addWork() {
    let txt=input.value;
    let li=document.createElement("li");
    li.innerHTML=txt;
    list.insertBefore(li,list.childNodes[0]);
    input.Value = "";
}
    

    
    
