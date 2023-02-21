image = document.getElementById("imageOn");

function changeImage(temp) {
    image.src = `/Images/${temp}.webp`
}


function changeClass(event) {
    let spans = document.getElementsByClassName("try");
    for (let i = 0; i < spans.length; i++) {
        spans[i].className = "try temp"
        
    }
    if (event.target.classList.contains("temp")){
        event.target.className = "try select"
    }
}