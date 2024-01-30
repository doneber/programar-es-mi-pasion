async function sleep(ms) {
  return await new Promise(resolve => setTimeout(resolve, ms));
}

const form = document.querySelector('form')

form.addEventListener('input', function (event) {
  const note = event.target.value
  const subjectState = note == 10 ? 'EXCELENTE' : note >= 9 ? 'MUY BIEN' : 'MAL AHÍ'
  const spanElement = event.target.parentNode.childNodes[5]
  spanElement.style.color = subjectState == 'EXCELENTE' ? 'green' : 'red'
  spanElement.innerHTML = subjectState
});

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  // get student info
  const studentName = document.querySelector('#alumno').value

  // loading
  const resultElement = document.querySelector('.result')
  resultElement.innerHTML = `
  <div class="box">
    <div class="loading"></div>
  </div>`


  // algorith
  const formData = new FormData(form)
  const iter = formData.entries()

  let result = iter.next()
  let sum = 0
  let counter = 0

  while (!result.done) {
    counter++
    sum = sum + Number(result.value[1])
    result = iter.next()
  }

  console.log({ sum, counter });

  const avg = parseFloat(sum / counter).toFixed(1)

  const state = avg == 10 ? 'APROBADO' : 'REPROBADO'


  await sleep(1000)

  resultElement.innerHTML = `
  <p style="color:red;">${studentName} esta ${state} con un promedio ${avg}</p>`

})