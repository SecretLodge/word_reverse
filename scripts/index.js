/*
    - БЭМ
    - Адаптивный дизай
    - Семантическая верстка
    - Анимация медленного появления при обновлении страницы
*/
const result = document.getElementById('result')
const button = document.getElementById('button')
const input = document.getElementById('input')

const SECONDS_OF_DELAY = 1;

const delaySimulation = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}

const reverseWord = async ({ code }) => { 
    if(code && code === 'Enter' || !code) {
        button.classList.add('pending')
        await delaySimulation(SECONDS_OF_DELAY)

        if(input.value.length !== 0) {
            result.textContent = input.value
                .split('')
                .reverse()
                .join('')
        }

        button.classList.remove('pending')
    }
}

button.addEventListener('click', reverseWord)
document.addEventListener('keydown', reverseWord)