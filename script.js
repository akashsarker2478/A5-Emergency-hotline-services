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

        //coin
        if(coin<20){
            alert('not enough coin')
            return;
        }
        coin -= 20;
        coinCount.innerText = coin;

         //history
         const now = new Date();
         const option = {
            timeZone : 'Asia/Dhaka',
            hour : '2-digit',
            minute : '2-digit',
            second : '2-digit',
         };
         const bdTime = now.toLocaleTimeString ('en-US',option);
         
         const cardTitle = card.getElementsByClassName("card-title")[0].innerText
         history.innerHTML += `<div  class="bg-gray-100 p-2 mt-2 rounded-lg mx-2">
         <b>${cardTitle}</b> <br>
            <div class="flex justify-between">
                <span>${number}</span>
                 <span>${bdTime}</span>
            </div>
         </div>`;
         alert(`calling ${name} at ${number} `)
    })
}
const clearButton = document.getElementById("clear-btn")
clearButton.addEventListener('click', function(){
    history.innerHTML='';
})
