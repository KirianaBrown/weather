import { elements } from './base';

export const convertToFarenheit = celsius => {
    return Math.floor(celsius * 9 / 5 + 32)
}

export const convertToCelsius = farenheit => {
    return Math.floor((farenheit - 32) * 5 / 9);
}

export const farenheitHandler = (e, state) => {
    console.log('farenhiet controller has been called')
    e.target.classList.add('selected');
    elements.celsiusBtn.classList.remove('selected')

    // Calc C - F
    if (state.unit === 'metric') {
        state.temperature = convertToFarenheit(state.weather.results.main.temp);
        state.unit = 'imperial';
        state.symbol = 'F'
        console.log(state.symbol);

    } else {
        console.log('state is alreay in imperial state')
    }
}

export const celsiusHandler = (e, state) => {
    e.target.classList.add('selected');
    elements.farenheitBtn.classList.remove('selected')

    if (state.unit === 'imperial') {
        state.temperature = convertToCelsius(state.weather.results.main.temp);
        state.unit = 'metric';
        state.symbol = 'C';

    } else {
        console.log('State is already in Celsius')
    }
}