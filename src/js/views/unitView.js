import { elements } from "./base";

export const setActiveState = (unit, symbol) => {
    if (unit === "metric" && symbol === "C") {
        elements.celsiusBtn.classList.add("container-controls-selected");
        elements.farenheitBtn.classList.remove("container-controls-selected");
    } else {
        elements.celsiusBtn.classList.remove("container-controls-selected");
        elements.farenheitBtn.classList.add("container-controls-selected");
    }
};

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
        updateUnitsLocalStorage(state.unit, state.symbol);
    }
};

export const celsiusHandler = (e, state) => {
    e.target.classList.add("container-controls-selected");
    elements.farenheitBtn.classList.remove("container-controls-selected");

    if (state.unit === "imperial") {
        state.temperature = convertToCelsius(state.weather.results.main.temp);
        state.unit = "metric";
        state.symbol = "C";
        updateUnitsLocalStorage(state.unit, state.symbol);
    }
};

export const updateUnitsLocalStorage = (unit, symbol) => {
    localStorage.setItem("unit", JSON.stringify(unit));
    localStorage.setItem("symbol", JSON.stringify(symbol));
};

export const readUnitsStorage = () => {
    const unit = JSON.parse(localStorage.getItem("unit"));

    if (unit) {
        return unit;
    } else {
        return "metric";
    }
};

export const readSymbolStorage = () => {
    const symbol = JSON.parse(localStorage.getItem("symbol"));

    if (symbol) {
        return symbol;
    } else {
        return "C";
    }
};