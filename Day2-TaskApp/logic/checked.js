export function checked(e){
    if(e.target.tagName === "LI"){
        return e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        return e.target.parentElement.remove();
    } 
}