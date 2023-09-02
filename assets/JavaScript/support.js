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
  messageBlock.href = "./chatMessages.html"

  const dateTimeElement = document.createElement('p');
  dateTimeElement.classList.add('message-status-desc_date-time');
  dateTimeElement.textContent = getCurrentDateTime();

  const blockStatus = document.createElement('div');
  blockStatus.classList.add('block-status');

  const messageStatusDescBtn = document.createElement('div');
  messageStatusDescBtn.classList.add('message-status_desc-btn');
  messageStatusDescBtn.textContent = "Не обработано";

  blockStatus.appendChild(messageStatusDescBtn);
  messageBlock.appendChild(blockStatus);
  
  
  const messageElement = document.createElement('p');
  messageElement.classList.add('message-status_desc-problem');
  messageElement.textContent = topic;

  const blockDelete = document.createElement('div');
  blockDelete.classList.add('block-delete');

  const deleteButton = document.createElement('div');
  deleteButton.classList.add('message-status_desc-delete');
  deleteButton.textContent = "Удалить обращение";

  

  messageBlock.appendChild(dateTimeElement);
  messageBlock.appendChild(blockStatus);
  messageBlock.appendChild(messageElement);
  blockDelete.appendChild(deleteButton);
  messageBlock.appendChild(blockDelete);

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