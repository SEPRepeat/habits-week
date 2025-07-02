const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const generateBtn = document.getElementById('generate');
const habitSelect = document.getElementById('habit');
const list = document.getElementById('schedule');

generateBtn.addEventListener('click', () => {
  list.innerHTML = '';
  const habit = habitSelect.value;

  days.forEach(day => {
    const hour = Math.floor(Math.random() * 4) + 17; // 17–20
    const minute = Math.random() < 0.5 ? '00' : '30';
    const time = `${hour}:${minute}`;

    const li = document.createElement('li');
    li.textContent = `${day}: ${habit} в ${time}`;
    list.appendChild(li);
  });
});