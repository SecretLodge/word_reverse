/*
    // - БЭМ
    - Адаптивный дизай
    - Добавить meta-теги
    - Анимация медленного появления при обновлении страницы
    - Добавить модальное окно в свлучае ошибки
    - Сделать кнопочку копирования в буффер обмена
*/
const result = document.getElementById('result-text')
const button = document.getElementById('reverse-text')
const buttonImg = button.querySelector('img');
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
        buttonImg.classList.add(CLASS_OF_PENDING_ANIMATION)
        await delaySimulation(SECONDS_OF_DELAY)

        if(input.value.length !== 0) {
            result.textContent = input.value
                .split('')
                .reverse()
                .join('')
        }
        
        buttonImg.classList.remove(CLASS_OF_PENDING_ANIMATION)
    }
}

button.addEventListener('click', reverseWord)
document.addEventListener('keydown', reverseWord)