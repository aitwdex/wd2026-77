import { fetchTemperature } from './weather.js';

const weatherButton = document.getElementById('get-weather-btn');
const tempDisplay = document.getElementById('temp-display');

weatherButton.addEventListener('click', async () => {
  weatherButton.disabled = true;
  tempDisplay.textContent = "読み込み中...";
  
  try {
    const temperature = await fetchTemperature();
    tempDisplay.textContent = `現在の気温は 【 ${temperature} ℃ 】 です。`;
  } catch (error) {
    console.error(error);
    tempDisplay.textContent = "エラーが発生しました。時間を置いてもう一度試してください。";
  } finally {
    weatherButton.disabled = false;
  }
});