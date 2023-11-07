
window.addEventListener("scroll", function(){
    let nav = document.querySelector(".nav").offsetHeight
    let container = document.querySelector(".site-container")
    let content = document.querySelector(".content")
    if(window.pageYOffset >= nav){
        container.classList.add("hide-text")
    }else {
        container.classList.remove("hide-text")
    }
})

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector("#form")
  const submitButton = document.querySelector(".submit")
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec'

  form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
      .then(response => {
        alert('Success!', response)
        submitButton.disabled = false
        console.log("hello")
        form.reset() 
      })
      .catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false
      })
  })
});