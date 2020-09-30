export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    resultsContainer: document.querySelector('.results'),
    errorBtn: document.querySelector('.error__btn'),
    errorMessage: document.querySelector('.error'),
}

let isError = false;

export const elementStrings = {
    error: 'error',
    loader: 'loader'
}

export const renderLoader = parentEl => {
    const loader = `
    <div class = "${elementString.loader}" >
        <svg> 
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>  
    `;
    parentEl.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
    const loader = document.querySelector('.loader');

    if (loader) {
        loader.parentElement.removeChild(loader);
    }
}


export const renderErrorMessage = () => {
    const parentEl = elements.resultsContainer;
    const markUp = `
        <div class="${elementStrings.error}">
            <h1 class="error__heading">Oops!</h1>
            <h3 class="error__title">Location not found</h3>
            <p class="error__content">We had trouble finding the location you entered please try again</p>
            <button class="btn error__btn">
                Search Again
            </button>
        </div>
  `

    parentEl.insertAdjacentHTML('afterbegin', markUp);

    isError = true;

}


export const clearErrorMessage = target => {

    if (target.classList.contains('error__btn')) {
        isError = false;
        elements.searchInput.focus()
        target.parentElement.remove()
    } else if (target.classList.contains('search') && isError === true) {
        document.querySelector('.error').remove();
        isError = false;
    } else {
        console.log('error removing error message')
    }
}