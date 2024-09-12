const codeOfAdvice = document.getElementById("advice-code");
const adviceTextEl = document.getElementById("advice-text");
const getAdviceBtn = document.getElementById("get-advicebtn");

getAdviceBtn.addEventListener("click", function(){
    let url = `https://api.adviceslip.com/advice`
    fetch(url)
    .then(res => res.json())
    .then((data) =>{
        codeOfAdvice.textContent = `#${data.slip.id}`
        adviceTextEl.textContent = `"${data.slip.advice}"`
    }) 
    console.log(data)
})