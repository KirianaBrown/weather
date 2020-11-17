// MODEL IMPORTS
import Search from './models/Search';
import Weather from './models/Weather';
import Saved from './models/Saved';

// VIEW IMPORTS
import { elements, renderLoader, clearLoader, renderErrorMessage, clearErrorMessage } from './views/base';
import * as searchView from './views/searchView';
import * as weatherView from './views/weatherView';
import * as savedView from './views/savedView';



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

const weatherController = async(query) => {

    if (!location) {
        renderErrorMessage();
    } else {
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
            weatherView.renderWeather(state.weather.results, state.saved.isSaved(state.weather.id));
        } catch (err) {
            console.log(err)
            clearLoader();
            renderErrorMessage();
        }
    }
}

const savedController = () => {
    const currentId = state.weather.id;

    if (!state.saved.isSaved(currentId)) {
        // 1. Create new item
        const newSavedItem = state.saved.addSaved(
                currentId,
                state.weather.results.name,
                state.weather.results.main.temp,
                '10d'
            )
            // 2. Toggle saved button
        savedView.toggleSavedButton(true);
        // 3. Render to List
        savedView.renderItem(newSavedItem);
    } else {
        savedView.toggleSavedButton(false);
        savedView.deleteItem(currentId);
        state.saved.deleteSaved(currentId);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    let query = searchView.getInput();
    weatherController(query);
})


// Handling non-render details events.
elements.resultsContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.matches('.error__btn, .error__btn *')) {
        clearErrorMessage();
    } else if (e.target.matches('.results__love, .results__love *')) {
        savedController();
    }
});

elements.savedContainer.addEventListener('click', e => {
    if (e.target.closest('.saved__item, .saved__item *')) {
        const parentEl = e.target.parentNode;
        const location = parentEl.dataset.itemlocation

        if (location) {
            weatherController(location)
        }
    }
})


window.addEventListener('load', () => {
    state.saved = new Saved();
})