document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const nickname = formData.get('nickname');
  const q1 = formData.get('q1');
  const q2 = formData.get('q2');
  const q3 = formData.get('q3');
  const q4 = formData.get('q4');
  const q5 = formData.get('q5');
  const q6 = formData.get('q6');
  const q7 = formData.get('q7');
  const q8 = formData.get('q8');
  const q9 = formData.get('q9');
  const q10 = formData.get('q10');

  // Отправка данных в Google Sheets (см. ниже, как настроить)
  fetch('https://script.google.com/macros/s/AKfycbxn5DhWsYhWN9-UwhDkozXQmuqez3blb3H0Go8pgbZG6G7T7k5FM2fK3cMjWi42_Ogs/exec', {
    method: 'POST',
    body: JSON.stringify({ nickname, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 })
  });

  // Подсчёт результата
  const total = parseInt(q1) + parseInt(q2) + parseInt(q3);
  let result;

  if (total >= 6) result = 'Акула';
  else if (total >= 4) result = 'Меченосец';
  else result = 'Гуппи';

  document.getElementById('fish-name').textContent = `Ты ${result}!`;
  document.getElementById('fish-image').src = `images/${result.toLowerCase()}.jpg`;
  document.getElementById('fish-image').style.display = 'block';
  document.getElementById('result').style.display = 'block';
});