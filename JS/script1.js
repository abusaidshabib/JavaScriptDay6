// console.log('test script 1')
// function bgChange(){
//     console.log('demo')
//     document.getElementById("main_body").style.color = "red"
// }

// const items = document.getElementById('items');
// items.addEventListener('click', function(){
    //             console.log("para_div")
    // })
//     const items = document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target)
//         console.log(items)
//     })
// }

document.getElementById('items').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
})

document.getElementById('add_items').addEventListener('click', function(){
    const MainContainer = document.getElementById("items");

    const li = document.createElement('li');
    li.innerText = "test List"
    li.classList.add('item')
    MainContainer.appendChild(li)
})

document.getElementById('color_btn1').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})
document.getElementById('color_btn2').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})
