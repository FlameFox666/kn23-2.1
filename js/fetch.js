const button = document.getElementById('fetchButton');
const img = document.getElementById('dogImage');

// Функция для получения случайного изображения
async function fetchRandomDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        img.src = data.message; 
        img.alt = 'Випадкове фото собаки';
    } catch (error) {
        console.error('Помилка у запиті:', error);
        img.alt = 'Не вдалося загрузити зображення';
    }
}

// Привязываем обработчик события к кнопке
button.addEventListener('click', fetchRandomDogImage);
