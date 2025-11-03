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

  // Отправка данных в Google Sheets
  fetch('https://script.google.com/macros/s/AKfycbxn5DhWsYhWN9-UwhDkozXQmuqez3blb3H0Go8pgbZG6G7T7k5FM2fK3cMjWi42_Ogs/exec', {
    method: 'POST',
    body: JSON.stringify({ nickname, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 })
  });

  // Простой подсчёт: считаем, какие ответы чаще всего
  let counts = {};
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10].forEach(q => {
    counts[q] = (counts[q] || 0) + 1;
  });

  let maxAnswer = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  let result;
  switch (maxAnswer) {
    case '1':
      result = 'Ты рыба-клоун — уютная, душевная, с внутренним светом';
      break;
    case '2':
      result = 'Ты акула — сильная, уверенная, энергичная';
      break;
    case '3':
      result = 'Ты меченосец — активный, искренний, открытый';
      break;
    case '4':
      result = 'Ты скат — мудрый, интуитивный, таинственный';
      break;
    case '5':
      result = 'Ты летучая рыба — мечтательная, лёгкая, свободолюбивая';
      break;
    case '6':
      result = 'Ты морская звезда — таинственная, глубокая, с внутренним ритмом';
      break;
    default:
      result = 'Ты уникальная рыба, не похожая ни на кого!';
  }

  document.getElementById('result').innerHTML = `<h2>${result}</h2>`;
  document.getElementById('result').style.display = 'block';
});