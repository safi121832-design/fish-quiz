document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const nickname = formData.get('nickname');
  const q1 = formData.get('q1');
  const q2 = formData.get('q2');
  const q3 = formData.get('q3');

  // Отправка данных в Google Sheets (см. ниже, как настроить)
  fetch('https://script.google.com/macros/s/AKfycbwmdFd0mexa3cAZZIU2d_XkFhx526VHKH6mCJmF05I_zO7qNNgU1SpRkyCfJKpnfjQN/exec', {
    method: 'POST',
    body: JSON.stringify({ nickname, q1, q2, q3 })
  });

  // Подсчёт результата
  const total = parseInt(q1) + parseInt(q2) + parseInt(q3);
  let result;

  if (total >= 6) result = 'Акула';
  else if (total >= 4) result = 'Меченосец';
  else result = 'Гуппи';

  document.getElementById('result').innerHTML = `<h2>Ты ${result}!</h2>`;
  document.getElementById('result').style.display = 'block';
});