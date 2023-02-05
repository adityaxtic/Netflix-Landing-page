const buttonEl = document.querySelectorAll('.btn-drop');
const buttontxtEl = document.querySelectorAll('.drop-txt');
const crossEl = document.querySelectorAll('.cross');

for (let i = 0; i < buttonEl.length; i++) {
    buttontxtEl[i].style.maxHeight = '0px';
    buttonEl[i].addEventListener('click', () => {
        const crossBt = crossEl[i];

        if (buttontxtEl[i].style.maxHeight != '0px') {
            buttontxtEl[i].style.maxHeight = '0px'; 
           crossBt.style.transform= "rotate(45deg)";
            return;
        }
        
        closeAllContent();
        closeCross()
        if (buttontxtEl[i].style.maxHeight)
            buttontxtEl[i].style.maxHeight = buttontxtEl[i].scrollHeight + "px";
             crossBt.style.transform= "rotate(0deg)";
        
    })
    
}

function closeAllContent() {
    for (let i = 0; i < buttontxtEl.length; i++) {
            buttontxtEl[i].style.maxHeight = 0; 
    }
}

function closeCross(){
    for (let index = 0; index < crossEl.length; index++) {
        const crossBt = crossEl[index];
        crossBt.style.transform= "rotate(45deg)";
        
    }
}
