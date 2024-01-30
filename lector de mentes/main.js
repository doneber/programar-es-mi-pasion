

const btnElement = document.querySelector('#leerMenteBtn')

async function sleep(ms) {
  return await new Promise(resolve => setTimeout(resolve, ms));
}

async function leerMente() {
  const dialogElement = document.querySelector('.dialog')
  const messageElement = document.querySelector('.mensaje')
  
  dialogElement.style.display = 'flex'
  messageElement.textContent= 'Analizando el pensamiento..'
  await sleep(1000)
  messageElement.textContent= 'Procesando memoria..'
  await sleep(1000)
  // 2s después
  messageElement.textContent= 'Renderizando conexión cognitiva...'
  await sleep(1000)
  messageElement.textContent= 'Proyección cerebral casi completa...'
  await sleep(1000)
  
  await sleep(200)
  // Recuperamos el número del input
  const numeroElement = document.querySelector('#numero')
  const valorNumero = numeroElement.value

  // dialogElement.style.display = 'none'
  const prcoessElement = document.querySelector('.process')
  prcoessElement.textContent = 'Pensaste en ' + valorNumero

}

btnElement.addEventListener('click', (e)=>{
  e.preventDefault()
  leerMente()
})