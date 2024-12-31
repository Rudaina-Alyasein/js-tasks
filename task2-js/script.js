//part 1
let content = document.getElementsByClassName('content');

 function changeFont() {
        let options = document.getElementById('fontType'); 

        if (content.length > 0) {
            let selectedFont = options.value;
            content[0].style.fontFamily = selectedFont; 
        } else {
            console.error("No elements with the class 'content' found.");
        }
    }

function changeSize() {
    let options = document.getElementById('size');
    if (content.length > 0) {
        let selectedSize = options.value;
        content[0].style.fontSize = selectedSize; 
    } else {
        console.error("No elements with the class 'content' found.");
    }
}
function italic_function() {
    let content = document.getElementsByClassName('content');
    let italic_style=document.getElementById('italic-style');
    if (content.length > 0) {
        if(italic_style.checked){
            content[0].style.fontStyle = "italic";  
        }
     else{
        content[0].style.fontStyle = "normal";  

     }   
    
    }
}
function bold_function() {
    let content = document.getElementsByClassName('content');
    let bold_style=document.getElementById('bold-style');
    if (content.length > 0) {
        if(bold_style.checked){
            content[0].style.fontWeight = "bold";  

        }
        else{
            content[0].style.fontWeight = "normal";  

        }
        
        
    }
}
function underline_function() {
    let content = document.getElementsByClassName('content');
    let underline_style=document.getElementById('underline-style');

    if (content.length > 0) {
        if(underline_style.checked){
            content[0].style.textDecoration = "underline";  

        }
        else {
            content[0].style.textDecoration = "none";  

        }
    }
}
//part 2
function changeText(){
    let btn_text=document.getElementById('btn-text');
    btn_text.innerHTML="Hello World!"
}
function changeText2(){
    let btn_text=document.getElementById('btn-text');
    btn_text.innerHTML="Can I help you?";
}