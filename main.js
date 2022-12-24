// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.querySelector('#modal')


// Your JavaScript code goes here!

const hearts = document.getElementsByClassName('like-glyph')

for (const heart of hearts){
  heart.addEventListener('click', (e) => {
    mimicServerCall()
    .then(() => {
      if (heart.innerHTML === FULL_HEART){
        heart.innerHTML = EMPTY_HEART
        heart.className= 'like-glyph'
      } else {
        heart.innerHTML = FULL_HEART
        heart.className = 'activated-heart'
      }
    })
    .catch(error =>{
      modal.hidden = false
      const modalMessage = document.getElementById('modal-message')
      setTimeout(()=>{
        modal.hidden = true
      }, 300)
    } )
  })
}







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
