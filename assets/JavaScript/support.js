// Получаем ссылку на контейнер для блоков сообщений
const messageStatusContainer = document.querySelector('.message-status');

// Функция для получения текущей даты и времени в формате "dd.mm.yyyy, hh:mm"
function getCurrentDateTime() {
  let currentDateTime = new Date();
  let day = String(currentDateTime.getDate()).padStart(2, '0');
  let month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
  let year = currentDateTime.getFullYear();
  let hours = String(currentDateTime.getHours()).padStart(2, '0');
  let minutes = String(currentDateTime.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
}

// Добавляет блок сообщения в контейнер с заполненными значениями
function addMessageBlock(topic, message) {
  const messageBlock = document.createElement('a');
  messageBlock.classList.add('message-status_content');
  messageBlock.href = "./chat-messages.html";

  const dateTimeElement = document.createElement('p');
  dateTimeElement.classList.add('message-status-desc_date-time');
  dateTimeElement.textContent = getCurrentDateTime();

  const topicElement = document.createElement('button');
  topicElement.classList.add('message-status_btn');
  topicElement.textContent = "Не обработано";

  const messageElement = document.createElement('p');
  messageElement.classList.add('message-status_desc-problem');
  messageElement.textContent = topic;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('message-delete_btn');
  deleteButton.textContent = "Удалить обращение";

  messageBlock.appendChild(dateTimeElement);
  messageBlock.appendChild(topicElement);
  messageBlock.appendChild(messageElement);
  messageBlock.appendChild(deleteButton);

  messageStatusContainer.appendChild(messageBlock);

  // Добавляем обработчик события клика на кнопку "Delete"
  deleteButton.addEventListener('click', function() {
    messageStatusContainer.removeChild(messageBlock);
  });
}

// Получаем ссылку на кнопку "Отправить сообщение"
const sendMessageBtn = document.querySelector('.form-btn_message');

// Добавляем обработчик события клика на кнопку "Отправить сообщение"
sendMessageBtn.addEventListener('click', function() {
  const topic = document.querySelector('.input-topic').value;
  const message = document.querySelector('.input-message').value;

  addMessageBlock(topic, message);
});