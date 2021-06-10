export const elements = {
    // searchForm: document.querySelector('.search'),
    // searchInput: document.querySelector('.search__field'),
    // resultsContainer: document.querySelector('.results'),
    // errorBtn: document.querySelector('.error__btn'),
    // errorMessage: document.querySelector('.error'),
    // weatherDetails: document.querySelector('.results__container'),
    // savedContainer: document.querySelector('.saved'),
    // savedList: document.querySelector('.saved__list'),
    // forecastContainer: document.querySelector('.forecast'),
    // forecastList: document.querySelector('.forecast__list'),
    // celsiusBtn: document.querySelector('.celsius'),
    // farenheitBtn: document.querySelector('.farenheit')

    // 1. Search Form
    searchForm: document.querySelector(".container-action-search--form"),
    searchInput: document.querySelector(".container-action-search--input"),

    // 2. Render weather results
    weatherDetails: document.querySelector(".container-results"),
    weatherImage: document.querySelector(".weather-icon"),

    // 3. Control units
    celsiusBtn: document.querySelector(".container-controls__celsius"),
    farenheitBtn: document.querySelector(".container-controls__farenheit"),

    // Not done yet.
    // resultsContainer: document.querySelector(".results"),
    errorBtn: document.querySelector(".error__btn"),
    errorMessage: document.querySelector(".error"),

    savedContainer: document.querySelector(".saved"),
    savedList: document.querySelector(".saved__list"),
    forecastContainer: document.querySelector(".forecast"),
    forecastList: document.querySelector(".forecast__list"),
};

let isError = false;

export const elementStrings = {
    error: "error",
    loader: "loader",
};

export const renderLoader = (parentEl) => {
    const loader = `
    <div class = "${elementStrings.loader}" >
        <svg> 
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>  
    `;
    parentEl.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};

export const renderErrorMessage = () => {
    const parentEl = elements.errorMessage;
    const markUp = `
        <div class="${elementStrings.error}">
            <h1 class="error__heading">Oops!</h1>
            <h3 class="error__title">Location not found</h3>
            <p class="error__content">We had trouble finding the location you entered please try again</p>
            <button class="btn error__btn">
                Search Again
            </button>
        </div>
  `;

    parentEl.insertAdjacentHTML("afterbegin", markUp);

    isError = true;
};

export const clearErrorMessage = () => {
    elements.searchInput.focus();
    elements.errorMessage.innerHTML = "";
    console.log("Error Message to be cleared");
};