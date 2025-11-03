async function loadData() {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwDqzjMBJd4_4-jvL42FRaf9zaPUxuhkZGghxp9MCjxJ387_W2kUqvLKVXxqTf34RXE/exec');
    const data = await response.json();
    const list = document.getElementById('data-list');
    list.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
  } catch (error) {
    console.error('Ошибка:', error);
  }
}