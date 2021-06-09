// MODEL IMPORTS
import Search from "./models/Search";
import Weather from "./models/Weather";
import Saved from "./models/Saved";
import Current from "./models/Current";
import Forecast from "./models/Forecast";

// VIEW IMPORTS
import {
    elements,
    renderLoader,
    clearLoader,
    renderErrorMessage,
    clearErrorMessage,
} from "./views/base";
import * as searchView from "./views/searchView";
import * as weatherView from "./views/weatherView";
import * as savedView from "./views/savedView";
import * as forecastView from "./views/forecastView";
import * as unitView from "./views/unitView";

// IMPORT STYLESHEETS
import "../sass/main.scss";

// STATE
/*
    1. Search Object
    2. Current Weather Object
    3. Forecast Weather Object
    4. Saved Location Object
    5. Units / symbol

*/
const state = {
    unit: "metric", // imperial
    symbol: "C", // F
};

const weatherController = async(query) => {
    if (!query) {
        // renderErrorMessage();
        console.log("Render Error Message");
    } else {
        state.weather = new Weather(query, state.unit);
        // 2. Prepare the UI
        // searchView.clearUI();
        searchView.clearInput();
        // searchView.clearError();
        // searchView.clearForecast();
        // 3. Render loader
        // renderLoader(elements.resultsContainer);
        // 3. Call the getResults method
        try {
            await state.weather.getWeather();
            // clearLoader();
            // weatherView.renderWeather(
            //     state.weather.results,
            //     state.symbol,
            //     state.saved.isSaved(state.weather.id)
            // );
            // forecastController(state.weather.results.name, state.unit);
        } catch (err) {
            console.log(err);
            clearLoader();
            renderErrorMessage();
        }
    }
};

const forecastController = async(location) => {
    state.forecast = new Forecast(location, state.unit);
    try {
        await state.forecast.getForecast();
        state.forecast.forecastWeather.forEach((el) =>
            forecastView.renderForecast(el, state.symbol)
        );
    } catch (err) {
        console.log(err);
        console.log("Error getting forecast");
    }
};

const currentController = async(lat, lon) => {
    if (!lat && !lon) {} else {
        state.current = new Current(lat, lon);
        try {
            await state.current.getCurrentLocation();
            weatherController(state.current.location);
        } catch (err) {
            console.log(`Error with current ${err}`);
        }
    }
};

const savedController = () => {
    const currentId = state.weather.id;

    if (!state.saved.isSaved(currentId)) {
        // 1. Create new item
        const newSavedItem = state.saved.addSaved(
            currentId,
            state.weather.results.name,
            state.weather.results.main.temp,
            state.weather.results.weather[0].icon
        );
        // 2. Toggle saved button
        savedView.toggleSavedButton(true);
        // 3. Render to List
        savedView.renderItem(newSavedItem);
    } else {
        savedView.toggleSavedButton(false);
        savedView.deleteItem(currentId);
        state.saved.deleteSaved(currentId);
    }
};

// Event Listeners

elements.searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let query = searchView.getInput();
    weatherController(query);
});

elements.celsiusBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (state.unit === "imperial") {
        unitView.celsiusHandler(e, state);
        weatherController(state.weather.query);

        if (state.saved) {
            state.saved.saved.forEach((el) => {
                savedView.deleteItem(el.id);
                el.temp = unitView.convertToCelsius(el.temp);
                savedView.renderItem(el);
            });
        }
    }
});

elements.farenheitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (state.unit === "metric") {
        unitView.farenheitHandler(e, state);
        weatherController(state.weather.query);

        if (state.saved) {
            state.saved.saved.forEach((el) => {
                savedView.deleteItem(el.id);
                el.temp = unitView.convertToFarenheit(el.temp);
                savedView.renderItem(el);
            });
        }
    }
});

// Handling non-render details events.
elements.resultsContainer.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.matches(".error__btn, .error__btn *")) {
        clearErrorMessage();
    } else if (e.target.matches(".results__love, .results__love *")) {
        savedController();
    }
});

elements.savedContainer.addEventListener("click", (e) => {
    if (e.target.closest(".saved__item, .saved__item *")) {
        const parentEl = e.target.parentNode;
        const location = parentEl.dataset.itemlocation;
        if (location) {
            weatherController(location);
        }
    }
});

window.addEventListener("load", () => {
    state.saved = new Saved();
    state.saved.readStorage();

    state.saved.saved.forEach((el) => {
        savedView.renderItem(el);
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat, lon;
            [lat, lon] = [position.coords.latitude, position.coords.longitude];
            currentController(lat, lon);
        });
    }
});