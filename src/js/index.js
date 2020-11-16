// MODEL IMPORTS
import Search from './models/Search';
import Weather from './models/Weather';

// VIEW IMPORTS
import { elements, renderLoader, clearLoader, renderErrorMessage, clearErrorMessage } from './views/base';
import * as searchView from './views/searchView';
import * as weatherView from './views/weatherView';



// IMPORT STYLESHEETS
import '../sass/main.scss';

// STATE
/*
    1. Search Object
    2. Current Weather Object
    3. Forecase Weather Object
    4. Saved Location Object

*/
const state = {}

const weatherController = async() => {
    const query = searchView.getInput();
    // 1. Create new Weather Obj
    state.weather = new Weather(query);
    // 2. Prepare the UI
    searchView.clearUI();
    searchView.clearInput();
    searchView.clearError();
    // 3. Render loader
    renderLoader(elements.resultsContainer);
    // 3. Call the getResults method
    try {
        await state.weather.getWeather();
        clearLoader();
        weatherView.renderWeather(state.weather.results)

    } catch (err) {
        console.log(err)
        clearLoader();
        renderErrorMessage();
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    weatherController();
})


// Handling non-render details events.
elements.resultsContainer.addEventListener('click', e => {
    if (e.target.matches('.error__btn, .error__btn *')) {
        clearErrorMessage();
    }
});