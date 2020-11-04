import { elements } from './base';

// CLEAR UI
export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';
export const clearUI = () => elements.resultsContainer.innerHTML = '';


// RENDER WEATHER
export const renderWeather = weather => {
    console.log('6. Render Weather');
    console.log(weather.temp)
}