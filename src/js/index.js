// MODEL IMPORTS
import Search from './models/Search';

// VIEW IMPORTS
import { elements, renderLoader, clearLoader, renderErrorMessage, clearErrorMessage } from './views/base';
import * as searchView from './views/searchView';


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

const searchControl = async() => {
    console.log('2. Success the search controller has been called')

    // Get user input
    console.log('3. Get the User Input from the the form')
    const query = searchView.getInput();

    if (query) {
        console.log(`4. The search result is ${query}`);

        // 1. Create new search object
        state.search = new Search(query);
        // 2. Prepare UI
        searchView.clearInput();
        searchView.clearUI();
        // 3. Render Loader
        renderLoader(elements.resultsContainer);
        // 4. Get the results
        try {
            await state.search.getResults();
            clearLoader();
        } catch (err) {
            console.log(err)
            console.log('ERROR: no results returned')
            clearLoader();
            renderErrorMessage();

        }


    } else {
        console.log('ERROR: there is NO form input')
    }



    // if (query) {
    //     // 1. Create new Search Obj
    //     state.search = new Search(query);
    //     // 2. Prepare UI
    //     searchView.clearInput();
    //     searchView.clearUI();
    //     // 3. Add a Loader
    //     renderLoader(elements.resultsContainer)
    //         // 4. Get Results
    //     try {
    //         await state.search.getResults()
    //         clearLoader();
    //     } catch (err) {
    //         // 1. Clear Loader
    //         clearLoader();
    //         // 2. Add Error Message
    //         renderErrorMessage();
    //     }

    //     console.log('New Search with Query')
    // }
}

// EVENT LISTENERS
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('1. Success form has been submitted')
    searchControl();
    // const target = e.target;
    // clearErrorMessage(target);


})

elements.resultsContainer.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    clearErrorMessage(target);
})