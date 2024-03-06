/*
    - Анимация медленного появления при обновлении страницы
    - Максимально ограничение 200 символов
        - Pending
        - Success 
        - Error
    - lazy load
    - Сделать фильтр на HTML символы
    - Переключение на светлую и темную тему 
    - Переключение языков
    - Автоматическое копирование в буфер обмена и всплывающее модальное окно которое об это мообщает
*/
const result = document.getElementById('result')
const button = document.getElementById('button')
const input = document.getElementById('input')

const longRuntimeSimulation = (seconds) => {
    return new Promise((resolve) => [
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    ])
}

const reverseWord = async ({ code }) => { 
    if(code && code === 'Enter' || !code) {
        button.classList.add('pending')
        
        const text = input.value.split('')

        await longRuntimeSimulation(2)

        if(text.length > 1000) {
            // Границы поля ввода граснеют и всплывает подсказка, что максимальное кол-во символов это 1000
        }
        else {
            result.textContent = text
                .reverse()
                .join('')
        }

        button.classList.remove('pending')
    }
}

button.addEventListener('click', reverseWord)
document.addEventListener('keydown', reverseWord)