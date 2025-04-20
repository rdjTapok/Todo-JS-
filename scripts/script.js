function updateDate() {
    const dateElement = document.getElementById('dateMain');
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    dateElement.textContent = `Сегодня ${new Date().toLocaleDateString('ru-RU', options)}`;
}

document.querySelector('.task-butt ul').addEventListener('click', (e) => {
    const clickedItem = e.target.closest('li');
    if (!clickedItem) return;

    document.querySelectorAll('.task-butt li.active').forEach(el => el.classList.remove('active'));
    clickedItem.classList.add('active');

    const notification = document.querySelector('.main-notification');
    const wrapper = document.querySelector('.notification-wrapper');
    
    if (notification && wrapper) {
        notification.style.opacity = '0';
        wrapper.style.height = '0';
        wrapper.style.margin = '0';
        setTimeout(() => wrapper.remove(), 300);
    }
});

document.addEventListener('DOMContentLoaded', updateDate);