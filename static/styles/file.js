document.querySelector('.burger-menu-btn').addEventListener('click', function() {
  document.querySelector('.burger-menu').classList.toggle('open');
});

document.querySelectorAll('.burger-menu-content ul li').forEach(item => {
  item.addEventListener('click', function(event) {
    const submenu = this.querySelector('ul');
    if (submenu) {
      event.stopPropagation(); // Предотвращаем всплытие события, чтобы не закрывать меню при клике на пункт подменю
      submenu.classList.toggle('open');
    } else {
      document.querySelector('.burger-menu').classList.remove('open');
    }
  });
});

document.querySelector('.burger-menu-btn').addEventListener('click', function(event) {
  event.stopPropagation(); // Предотвращаем всплытие события, чтобы не закрывать меню при клике на бургер
});

document.addEventListener('click', function() {
  document.querySelector('.burger-menu').classList.remove('open');
});