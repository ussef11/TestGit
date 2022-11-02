
let changed = true
setInterval(()=>{
    if(changed){
        let title = document.getElementById("h1")
        title.setAttribute("class" , "red")
        changed = false
    }else{
        document.getElementById("h1").setAttribute("class" , "yellow")
        changed = true
    }
} , 1000)