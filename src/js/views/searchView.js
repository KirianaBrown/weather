import { elements } from "./base";

// form inputs
export const getInput = () => elements.searchInput.value;
export const clearInput = () => (elements.searchInput.value = "");
// clear results window

export const clearError = () => (elements.errorMessage.innerHTML = "");
export const clearForecast = () => (elements.forecastList.innerHTML = "");

export const clearUI = () => {
    const cntnt = elements.weatherDetails;

    if (process.env.MY_ENV === "development") {
        console.log("development");
        if (cntnt.childNodes.length === 5) {
            // Default setting
            return;
        }

        while (cntnt.childNodes.length > 5) {
            // Remove all but the main containers
            cntnt.removeChild(cntnt.lastChild);
        }
    } else {
        const container = document.querySelector(".container-results");
        if (container) {
            console.log(container);
            console.log(container.childNodes.length);
        } else {
            console.log("no container");
        }
    }
};