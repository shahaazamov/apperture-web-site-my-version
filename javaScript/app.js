const body =  document.querySelector('body')
const darkBtn =  document.querySelector('.dark-mode-btn')


darkBtn.addEventListener("click" , () =>{
    if(body.classList.toggle("light-btn")){
        darkBtn.textContent =  'WHITE MODE'
    }else{
        darkBtn.textContent =  'DARK MODE'
    }
    
});
