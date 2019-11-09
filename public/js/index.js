//MANIPULATING THE DOM

/*MENU SIDEBAR IN AND OUT*/ 

const bar=document.querySelector('.hamburger-button');
const sidebar=document.querySelector('.sidebar');
const main_content=document.querySelector('.content__main');
let open=false;
//active and inactive sidebar
bar.addEventListener('click',(e)=>{
    bar.classList.toggle('change');
    sidebar.classList.toggle('active');
    main_content.classList.toggle('side__active');
});
// function toggleMenu(){
//     if(!open){
//         bar.classList.add('change');
//         
//         open=true;
//     }
//     else{
//         bar.classList.remove('change');
//         sidebar.classList.remove('active');
//         open=false;

//     }

// }