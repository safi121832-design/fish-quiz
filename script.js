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
  fetch('https://script.google.com/macros/s/AKfycbwDqzjMBJd4_4-jvL42FRaf9zaPUxuhkZGghxp9MCjxJ387_W2kUqvLKVXxqTf34RXE/exec', {
    method: 'POST',
    body: JSON.stringify({ nickname, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 })
  });

  // Факторы: A - уют/интровертность, B - активность, C - творчество, D - вкус, E - эмоции/душа, F - свобода
  let factors = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

  // q1
  if (q1 === '1') { factors.A += 2; factors.B += 1; factors.F += 1; }
  if (q1 === '2') { factors.A += 1; factors.B += 2; factors.C += 1; factors.D += 1; }
  if (q1 === '3') { factors.C += 2; factors.D += 1; factors.E += 1; }
  if (q1 === '4') { factors.A += 2; factors.E += 1; }
  if (q1 === '5') { factors.A += 1; factors.C += 1; factors.E += 2; factors.F += 1; }
  if (q1 === '6') { factors.B += 1; factors.D += 2; factors.E += 1; factors.F += 2; }

  // q2
  if (q2 === '1') { factors.C += 2; factors.D += 2; }
  if (q2 === '2') { factors.D += 1; }
  if (q2 === '3') { factors.A += 1; }

  // q3
  if (q3 === '1') { factors.F += 1; }
  if (q3 === '2') { factors.A += 1; }
  if (q3 === '3') { factors.C += 2; }
  if (q3 === '4') { factors.A += 1; factors.B += 1; }
  if (q3 === '5') { factors.B += 1; factors.E += 1; }

  // q4
  if (q4 === '1') { factors.D += 2; }
  if (q4 === '2') { factors.D += 2; factors.B += 1; }
  if (q4 === '3') { factors.D += 1; factors.A += 1; }
  if (q4 === '4') { factors.D += 1; factors.A += 1; }
  if (q4 === '5') { factors.D += 2; factors.E += 1; }

  // q5
  if (q5 === '1') { factors.E += 2; factors.A += 1; }
  if (q5 === '2') { factors.B += 2; factors.F += 1; }
  if (q5 === '3') { factors.E += 1; factors.A += 1; }
  if (q5 === '4') { factors.E += 2; factors.F += 1; }
  if (q5 === '5') { factors.E += 1; factors.C += 1; }

  // q6
  if (q6 === '1') { factors.A += 1; factors.E += 1; }
  if (q6 === '2') { factors.B += 2; }
  if (q6 === '3') { factors.A += 1; factors.E += 1; }
  if (q6 === '4') { factors.D += 1; factors.B += 1; }
  if (q6 === '5') { factors.A += 1; factors.F += 1; }

  // q7
  if (q7 === '1') { factors.C += 1; factors.E += 1; }
  if (q7 === '2') { factors.E += 2; }
  if (q7 === '3') { factors.B += 1; factors.F += 1; }
  if (q7 === '4') { factors.A += 1; factors.C += 1; }

  // q8
  if (q8 === '1') { factors.A += 1; factors.C += 1; }
  if (q8 === '2') { factors.B += 1; factors.F += 1; }
  if (q8 === '3') { factors.A += 1; }
  if (q8 === '4') { factors.B += 1; }

  // q9
  if (q9 === '1') { factors.A += 2; }
  if (q9 === '2') { factors.B += 2; }
  if (q9 === '3') { factors.E += 1; factors.B += 1; }
  if (q9 === '4') { factors.A += 1; }

  // q10
  if (q10 === '1') { factors.C += 2; factors.A += 1; }
  if (q10 === '2') { factors.C += 1; factors.E += 1; }
  if (q10 === '3') { factors.B += 2; }
  if (q10 === '4') { factors.D += 1; factors.A += 1; }
  if (q10 === '5') { factors.C += 1; factors.F += 1; }
  if (q10 === '6') { factors.F += 1; }

  // Находим фактор с наибольшим значением
  let maxFactor = Object.keys(factors).reduce((a, b) => factors[a] > factors[b] ? a : b);

  let result;
  switch (maxFactor) {
    case 'A':
      result = 'Ты рыба-клоун — уютная, душевная, с внутренним светом';
      break;
    case 'B':
      result = 'Ты акула — сильная, уверенная, энергичная';
      break;
    case 'C':
      result = 'Ты меченосец — творческий, яркий, искренний';
      break;
    case 'D':
      result = 'Ты скат — чувственный, гурман, с тонким вкусом';
      break;
    case 'E':
      result = 'Ты летучая рыба — эмоциональная, чувственная, вдохновляющая';
      break;
    case 'F':
      result = 'Ты морская звезда — свободолюбивая, таинственная, с внутренним ритмом';
      break;
    default:
      result = 'Ты уникальная рыба, не похожая ни на кого!';
  }

  document.getElementById('result').innerHTML = `<h2>${result}</h2>`;
  document.getElementById('result').style.display = 'block';
});