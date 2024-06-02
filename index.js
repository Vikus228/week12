const button = document.getElementById('button');
const nameInput = document.getElementById('name');
const linkInput = document.getElementById('link');
const commentInput = document.getElementById('comment');
const allComments = document.getElementById('allComments');

function addComment(event) {
    event.preventDefault(); // Отменяем действие по умолчанию (отправку формы)

    const link = linkInput.value;
    const name = nameInput.value.trim();
    const cleanName = name.replace(/ /g, '');
    const newName = cleanName.toLowerCase();
    let newComment = commentInput.value.replace(/viagra/gi, '***');
    newComment = newComment.replace(/XXX/gi, '***');

    // Создаем новый элемент div
    const newElement = document.createElement('div');
    newElement.classList.add('comment');

    // Создаем новый элемент img для отображения фото
    const imgElement = document.createElement('img');
    imgElement.src = link; // Устанавливаем атрибут src на значение ссылки
    imgElement.alt = 'Фото пользователя'; // Устанавливаем альтернативный текст для изображения
    allComments.append(imgElement); // Добавляем img в div

    // Добавляем текст комментария в div
    newElement.textContent += `${newName.charAt(0).toUpperCase()}${newName.slice(1)} 
    ${newComment} `;

    // Добавляем новый элемент в контейнер комментариев
    allComments.append(newElement);

    // Очищаем поля формы после отправки
    nameInput.value = '';
    linkInput.value = '';
    commentInput.value = '';
}

button.addEventListener('click', addComment);