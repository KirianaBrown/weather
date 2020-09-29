// MODEL IMPORTS
import Search from './models/Search';

// VIEW IMPORTS
import { elements } from './views/base';
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
    // 1. Get user input
    const query = searchView.getInput();

    if (query) {
        // 1. Create new Search Obj
        state.search = new Search(query);
        // 2. Prepare UI
        searchView.clearInput();
        console.log('New Search with Query')

    }



}


// EVENT LISTENERS
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    searchControl();
})