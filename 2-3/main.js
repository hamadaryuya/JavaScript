const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  let array = ["大吉","中吉","凶"];
  let random = Math.floor(Math.random() * 3);
  btn.textContent = array[random];
}, false);