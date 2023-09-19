function toggleMode() {
    let html = document.documentElement 
    html.classList.toggle('light')
}




const images = [
    {'id': '1', 'url':'./web/1.png'},
    {'id': '2', 'url':'./web/2.png'},
    {'id': '3', 'url':'./web/3.png'},
    {'id': '4', 'url':'./web/4.png'},
    {'id': '4', 'url':'./web/5.png'},
]
const container = document.querySelector('.container-items');
   for (const image of images){
    container.innerHTML += `
    <div class ='item'>
      <img src ='${image.url}'
      </div>
    `
} 

let items = document.querySelectorAll('.item');

document.querySelector('#next').addEventListener('click', ()=>{
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
});

document.querySelector('#previous').addEventListener('click', ()=> {
    const lastItem = items[items.length - 1];
    container.insertBefore(lastItem, items[0] );
    items = document.querySelectorAll('.item');
});




