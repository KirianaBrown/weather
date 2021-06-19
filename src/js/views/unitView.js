import { elements } from "./base";

export const convertToFarenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
};

export const convertToCelsius = (farenheit) => {
    return ((farenheit - 32) * 5) / 9;
};

export const farenheitHandler = (e, state) => {
    e.target.classList.add("container-controls-selected");
    elements.celsiusBtn.classList.remove("container-controls-selected");

    // Calc C - F
    if (state.unit === "metric") {
        state.temperature = convertToFarenheit(state.weather.results.main.temp);
        state.unit = "imperial";
        state.symbol = "F";
    }
};

export const celsiusHandler = (e, state) => {
    e.target.classList.add("container-controls-selected");
    elements.farenheitBtn.classList.remove("container-controls-selected");

    if (state.unit === "imperial") {
        state.temperature = convertToCelsius(state.weather.results.main.temp);
        state.unit = "metric";
        state.symbol = "C";
    }
};