const formElement = document.querySelector('#form')

const urlPageLetter = '../carta-san-valentin/index.html'

formElement.addEventListener('submit', (event)=>{
  event.preventDefault()

  const formData = new FormData(formElement)
  const messageValue =  formData.get('message')
  const messageValueEncoded = encodeURI(messageValue)

  const urlSearchParams = new URLSearchParams()

  urlSearchParams.append('message', messageValueEncoded)
  
  const urlGenerated = urlPageLetter + '?' + urlSearchParams.toString()

  const linkGeneratedElement = document.querySelector('#linkGenerated')
  linkGeneratedElement.textContent = urlGenerated
  linkGeneratedElement.href = urlGenerated
  

})