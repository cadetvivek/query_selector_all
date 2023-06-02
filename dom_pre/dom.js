// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// //document.title=123
// console.log(document.head)
// console.log(document.doctype)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)

// GETELEMENTBYID

// var headTitle = document.getElementById('head-title')
// var header = document.getElementById('main-header')

// header.style.borderBottom='solid 5px #000'
// var heading = document.querySelector('.title');
// heading.style.color='green'
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[2])
// items[2].style.fontWeight='bold'
// items[1].style.fontWeight='bold'
// items[1].style.color='blue'
// items[2].style.backgroundColor='green'

// if we want to give all background color so we need to for loop
//  for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor='yellow'
//  }
//GETELEMENTBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li[2])
// li[2].style.fontWeight='bold'
// li[1].style.fontWeight='bold'
// li[1].style.color='blue'
// li[2].style.backgroundColor='green'

// //if we want to give all background color so we need to for loop
//  for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='yellow'
//  }
// QUERYSELECTOR 
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='green'
// QUERYSELECTOR all
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var  i=0;i<odd.length;i++){
odd[i].style.backgroundColor='green'
}

for(var  i=0;i<even.length;i++){
   even[i].style.backgroundColor='orange'
   }