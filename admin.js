async function loadData() {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwmdFd0mexa3cAZZIU2d_XkFhx526VHKH6mCJmF05I_zO7qNNgU1SpRkyCfJKpnfjQN/exec');
    const data = await response.json();
    const list = document.getElementById('data-list');
    list.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
  } catch (error) {
    console.error('Ошибка:', error);
  }
}