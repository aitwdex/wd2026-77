const API_URL = "https://open-meteo.com";

export async function fetchTemperature() {
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    throw new Error("データが取れませんでした");
  }
  
  const data = await response.json();
  return data.current_weather.temperature;
}