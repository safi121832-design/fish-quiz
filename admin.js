async function loadData() {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxn5DhWsYhWN9-UwhDkozXQmuqez3blb3H0Go8pgbZG6G7T7k5FM2fK3cMjWi42_Ogs/exec');
    const data = await response.json();
    const list = document.getElementById('data-list');
    list.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
  } catch (error) {
    console.error('Ошибка:', error);
  }
}