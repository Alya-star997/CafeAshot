// 1. Укажите дату, до которой идет отсчет (Год, Месяц, День, Часы, Минуты, Секунды)
// Внимание: Месяцы считаются с 0 (0 - январь, 11 - декабрь)
// Пример: 31 декабря 2026 года, 23:59:59
const targetDate = new Date(2026, 10,18, 23, 59, 59).getTime();

// 2. Запускаем функцию обновления каждую секунду (1000 миллисекунд)
const timerInterval = setInterval(function() {
    
    // Текущее время
    const now = new Date().getTime();
    
    // Разница между нужной датой и текущим временем
    const distance = targetDate - now;

    // Если время вышло
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "Акция завершена!";
        return;
    }

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Выводим результат на страницу
    document.getElementById("countdown").innerHTML = 
        days + "д " + hours + "ч " + minutes + "м " + seconds + "с";
        
}, 1000); // 1000 мс = 1 секунда
