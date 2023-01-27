/*
fetch("https://official-joke-api.appspot.com/random_joke")
.then(res =>res.json())
.then(data => console.log(data))
.catch(err=>console.log(err));*/
const tellajoke=document.getElementById("tellajoke");
const setup= document.querySelector(".setup")
const punchlinebtn=document.querySelector(".punchlinebtn")
let punchline=document.querySelector(".punchline");
const reset=document.querySelector(".reset")
let joke={}
let jokeimg=document.getElementById("joke-img")
tellajoke.addEventListener('click',function(){

    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res =>res.json())
    .then(data => (setup.innerHTML=data.setup ,punchlinebtn.style.display="inline-block",
    (joke=data)    
    ))
    .catch(err=>console.log(err))
});

punchlinebtn.addEventListener('click',function(){
   
    punchline.innerHTML=joke.punchline;
    tellajoke.style.display='none',
    reset.style.display='inline-block';
    jokeimg.src="https://media.tenor.com/3MuR9jIBtXEAAAAM/hahahaha-laughing-emoji.gif";
});

reset.addEventListener('click', function(){
    //tellajoke.classList.remove('punchlinebtn')
    tellajoke.style.display='inline-block',
   joke={};
    setup.innerHTML="";
    punchline.innerHTML="";
    reset.style.display='none'; 
    punchlinebtn.style.display='none' 
    jokeimg.src="https://media.tenor.com/rsc4BErBHpUAAAAi/kstr-kochstrasse.gif";
   
})