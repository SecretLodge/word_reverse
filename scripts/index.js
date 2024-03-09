/*
    // - БЭМ
    - Адаптивный дизай
    - Семантическая верстка
    - Анимация медленного появления при обновлении страницы
    - Добавить модальное окно в свлучае ошибки
*/
const result = document.getElementById('result-text')
const button = document.getElementById('reverse-text')
const button_img = button.querySelector('img');
const input = document.getElementById('input-text')

const SECONDS_OF_DELAY = 1;
const CLASS_OF_PENDING_ANIMATION = 'body__button-img__pending';

const delaySimulation = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}

const reverseWord = async (event) => {
    const { code } = event

    if(code && code === 'Enter' || !code) {
        event.preventDefault()
        button_img.classList.add(CLASS_OF_PENDING_ANIMATION)
        await delaySimulation(SECONDS_OF_DELAY)

        if(input.value.length !== 0) {
            result.textContent = input.value
                .split('')
                .reverse()
                .join('')
        }
        
        button_img.classList.remove(CLASS_OF_PENDING_ANIMATION)
    }
}

button.addEventListener('click', reverseWord)
document.addEventListener('keydown', reverseWord)