//-------------------- Java Script --------------------//
let imageDiv = document.querySelectorAll(".image-div");

imageDiv.forEach((elem)=>{
    elem.addEventListener("click", ()=>{
        imageDiv.forEach((rev)=>{
            rev.classList.remove("active")
        })


        elem.classList.add("active");
    })
})