const dishes = [
  { name: "Пити", img: "piti.jpg", sostav: "мясо курицы/свинины", oldPrice: 500, newPrice: 400 },
  { name: "Шашлык", img: "shah.jpg", sostav: "мясо курицы/свинины", oldPrice: 450, newPrice: 350 },
  { name: "Долма", img: "dolma.jpg", sostav: "мясной фарш, виноградные листья", oldPrice: 450, newPrice: 350 },
  { name: "Хинкали", img: "hinkali.jpg", sostav: "тесто, мясо", oldPrice: 450, newPrice: 360 }
];

const today = new Date().getDay(); 
const dishOfTheDay = dishes[today % dishes.length];

document.getElementById('dotd-name').textContent = dishOfTheDay.name;
document.getElementById('dotd-img').src = dishOfTheDay.img;
document.getElementById('dotd-sostav').textContent = "Состав: " + dishOfTheDay.sostav;
document.getElementById('dotd-old-price').textContent = dishOfTheDay.oldPrice + ' ₽';
document.getElementById('dotd-new-price').textContent = dishOfTheDay.newPrice + ' ₽';

function updateTimer() {
  const now = new Date();
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  
  const diff = endOfDay - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const format = (num) => String(num).padStart(2, '0');
  
  document.getElementById('countdown').textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

setInterval(updateTimer, 1000);
updateTimer();