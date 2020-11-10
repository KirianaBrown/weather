// MODEL IMPORTS
import Search from './models/Search';
import Weather from './models/Weather';

// VIEW IMPORTS
import { elements, renderLoader, clearLoader, renderErrorMessage, clearErrorMessage } from './views/base';
import * as searchView from './views/searchView';
import * as weatherView from './views/weatherView';


// IMPORT STYLESHEETS
import '../sass/main.scss';
import { search } from 'core-js/fn/symbol';


// STATE
/*
    1. Search Object
    2. Current Weather Object
    3. Forecase Weather Object
    4. Saved Location Object

*/
// const state = {}

// const searchControl = async() => {
//     console.log('2. Success the search controller has been called')

//     // Get user input
//     console.log('3. Get the User Input from the the form')
//     const query = searchView.getInput();

//     if (query) {
//         console.log(`4. The search result is ${query}`);

//         // 1. Create new search object
//         // state.search = new Search(query);
//         state.weather = new Weather(query);
//         // 2. Prepare UI
//         searchView.clearInput();
//         searchView.clearUI();
//         // 3. Render Loader
//         renderLoader(elements.resultsContainer);

//         try {
//             // await state.search.getResults();
//             await state.weather.getWeather();
//             clearLoader();
//             // searchView.renderWeather(state.search.results);
//             // weatherController(state.search.results);
//         } catch (err) {
//             console.log(err)
//             console.log('ERROR: no results returned')
//             clearLoader();
//             renderErrorMessage();
//         }


//     } else {
//         console.log('ERROR: there is NO form input')
//     }
// }


// // const weatherController = async(weatherObject) => {
// //     // 1. create new weatherObj
// //     state.weather = new Weather(weatherObject);
// //     state.weather.setMetric();
// //     state.weather.showWeatherTemp();

// //     // 2. Prepare the UI

// //     // 3. Render the results
// //     weatherView.renderWeather(state.weather);

// // }


// // EVENT LISTENERS
// elements.searchForm.addEventListener('submit', e => {

//     e.preventDefault();
//     console.log('1. Success form has been submitted')
//     searchControl();
//     // const target = e.target;
//     // clearErrorMessage(target);


// })

// elements.resultsContainer.addEventListener('click', e => {
//     e.preventDefault();
//     const target = e.target;
//     // clearErrorMessage(target);
//     console.log(target);
// })

// // elements.errorMessage.addEventListener('click', e => {
// //     e.preventDefault();
// //     const target = e.target;
// //     console.log(target)
// // })


const state = {}

const weatherController = async() => {
    const query = searchView.getInput();
    // 1. Create new Weather Obj
    state.weather = new Weather(query);
    // 2. Prepare the UI
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    weatherController();
})