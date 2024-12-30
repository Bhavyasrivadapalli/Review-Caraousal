const reviews=[{


    id:1,
    name:"Bhavyasri Vadapalli",
    job:'Web Develepor',
    img: '5.jpg',
    text:
     "lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..., when an unknown printer took a galley of type and scrambled it to make a type ...",
},
{


    id:2,
    name:"Rajesh Nimmalapudi",
    job:'Data scientist',
    img: '2.jpg',
    text:
     "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..., when an unknown printer took a galley of type and scrambled it to make a type ...",
},
{


    id:3,
    name:"Vishnu Arja",
    job:'Python Develepor',
    img: '3.jpg',
    text:
     "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..., when an unknown printer took a galley of type and scrambled it to make a type ...",
},
{


    id:4,
    name:"Sirisha Bavirthi",
    job:'Web Develepor',
    img: '4.jpg',
    text:
     "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..., when an unknown printer took a galley of type and scrambled it to make a type ...",
},
{


    id:5,
    name:"Abhinaysri Sanamsetti",
    job:'Machine Learning Developer',
    img: '6.jpg',
    text:
     "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..., when an unknown printer took a galley of type and scrambled it to make a type ...",
}
];
const img=document.getElementById('i1');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');
const prev=document.querySelector('#btn1');
const next=document.querySelector('#btn2');
const button=document.querySelector('#btn');

let curr=0;
/* window.addEventListener('DOMContentLoaded',function(){
  
  paste(curr);
}); */

function paste(curr){
    const item=reviews[curr];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
next.addEventListener('click',function(){
    curr++;
    if(curr>reviews.length-1){
        curr=0;
    }
    paste(curr);
})
prev.addEventListener('click',function(){
    curr--;
    if(curr<0){
        curr=reviews.length-1;
    }
    paste(curr);
})
button.addEventListener('click',function(){
    let ra=Math.floor(Math.random()*reviews.length);
    paste(ra);
})