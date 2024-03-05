
// Анимация медленного появления при обновлении страницы
// Максимально ограничение 200 символов
// Если пустая строка то влючается анимация
// lazy load
// Сделать фильтр на HTML символы
// Переключение на светлую и темную тему 
// Переключение языков

const result = document.getElementById('result')
const button = document.getElementById('button')
const input = document.getElementById('input')

const reverseWord = () => { result.innerText = input.value.split('').reverse().join('') }

button.addEventListener('click', reverseWord)

document.addEventListener('keydown', ({ code }) => { 
    if(code === 'Enter') { 
        reverseWord() 
    } 
})