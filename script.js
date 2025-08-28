//heart icon count
const heartCount = document.getElementById("heart-count")
const cardHearts = document.getElementsByClassName("card-heart")
for(let i = 0; i<cardHearts.length; i++){
    cardHearts[i].addEventListener('click', function(){
         const newHeartCount = parseInt(heartCount.innerText) + 1;
         heartCount.innerText = newHeartCount;
    })
}
//call button
let coin = 100;
const coinCount = document.getElementById("coin-count")
const history = document.getElementById("history");
const callButton = document.getElementsByClassName("call-btn");
for(let i = 0; i<callButton.length; i++){
    callButton[i].addEventListener('click', function(){
        const card = this.parentElement.parentElement;
        const name = card.getElementsByClassName("service-name")[0].innerText
        const number = card.getElementsByClassName("service-number")[0].innerText
        console.log('service name', name)
        console.log('service number',number)

        //coin
        if(coin<20){
            alert('not enough coin')
            return;
        }
        coin -= 20;
        coinCount.innerText = coin;

         //history
         const cardTitle = card.getElementsByClassName("card-title")[0].innerText
         history.innerHTML += `<p class="bg-gray-100 p-2 mt-2 rounded-lg mx-2"><b>${cardTitle}</b> <br> ${number}</p>`;
         alert(`calling ${name} at ${number} `)
    })
}
const clearButton = document.getElementById("clear-btn")
clearButton.addEventListener('click', function(){
    history.innerHTML='';
})
