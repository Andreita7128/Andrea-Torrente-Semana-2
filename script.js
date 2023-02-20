image = document.getElementById("imageOn");

function changeImage(temp) {
    image.src = `/Images/${temp}.webp`
}

selectTemp = document.getElementsByClassName('select')

function changeTextStyle(nameClass){
    if(nameClass === 'select'){
        selectTemp.class = "temp"
    } else {
        selectTemp.class = "select"
    }
}