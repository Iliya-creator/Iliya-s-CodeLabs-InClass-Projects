function changeBackgroundAndTextColors(){
    let color1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    let color2 = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.querySelector("*").style.color = color1;
    document.querySelector("*").style.backgroundColor = color2;
    document.querySelector("button").style.color = color1;
    document.querySelector("button").style.backgroundColor = color2;
    
}
