export const elements = {
    // errorBtn: document.querySelector('.error__btn'),
    // errorMessage: document.querySelector('.error'),

    // 1. Search Form
    searchForm: document.querySelector(".container-action-search--form"),
    searchInput: document.querySelector(".container-action-search--input"),

    // 2. Render weather results
    weatherDetails: document.querySelector(".container-results"),
    weatherImage: document.querySelector(".weather-icon"),

    // 3. Control units
    celsiusBtn: document.querySelector(".container-controls__celsius"),
    farenheitBtn: document.querySelector(".container-controls__farenheit"),

    // 4. Saved container
    savedContainer: document.querySelector(".container-action-favourites-list"),

    // 5. Forecast List
    forecastList: document.querySelector(".container-action-forecast"),

    // 6. Error
    errorMessage: document.querySelector(".error"),
};

let isError = false;

export const elementStrings = {
    error: "error",
    loader: "loader",
};

export const renderLoader = () => {
    const loader = `
    <div class='loader'>
    <svg>
             <use href="img/icons.svg#icon-cw"></use>
         </svg>
    </div>
    `;

    elements.weatherDetails.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.parentElement.removeChild(loader);
    }
};

// export const renderLoader = (parentEl) => {
//     const loader = `
//     <div class = "${elementStrings.loader}" >
//         <svg>
//             <use href="img/icons.svg#icon-cw"></use>
//         </svg>
//     </div>
//     `;
//     parentEl.insertAdjacentHTML("afterbegin", loader);
// };

// export const clearLoader = () => {
//     const loader = document.querySelector(".loader");

//     if (loader) {
//         loader.parentElement.removeChild(loader);
//     }
// };

// export const renderErrorMessage = () => {
//     const parentEl = elements.errorMessage;
//     const markUp = `
//         <div class="${elementStrings.error}">
//             <h1 class="error__heading">Oops!</h1>
//             <h3 class="error__title">Location not found</h3>
//             <p class="error__content">We had trouble finding the location you entered please try again</p>
//             <button class="btn error__btn">
//                 Search Again
//             </button>
//         </div>
//   `;

//     parentEl.insertAdjacentHTML("afterbegin", markUp);

//     isError = true;
// };

export const renderErrorMessage = () => {
    console.log("render error called");

    const markup = `
    <img class="error__img" src="img/icons/error.svg" alt="error image">
    <h1 class="error__heading"> Oops! We couldn't find your search </h1>
    <button class='error-button error__btn'> Search Again </button>

    `;
    document.querySelector(".error").insertAdjacentHTML("afterbegin", markup);
};

export const clearErrorMessage = () => {
    elements.searchInput.focus();
    document.querySelector(".error").innerHTML = "";
    console.log("Error container cleared");
};

export const convertUnix = (unixTime, use = "format") => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const d = date.getDate();
    const month = date.getMonth();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let timeUnit = hours >= 12 ? "PM" : "AM";

    let formattedTime = `${days[day]} ${d} ${months[month]} ${hours}:${minutes} ${timeUnit}`;

    if (use === "format") {
        return formattedTime;
    } else {
        return [hours, minutes, timeUnit];
    }
};

export const setDate = (timezone, use = "format") => {
    // core with all locale
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const dateTime = utc + 1000 * timezone;
    const date = new Date(dateTime);

    const hours = date.getHours();
    const day = date.getDay();
    const dayofMonth = date.getDate();
    const month = date.getMonth();

    let minutes = date.getMinutes();
    if (minutes < 10) {
        let newMin = minutes.toString();
        minutes = `0${minutes}`;
    }

    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let timeUnit = hours >= 12 ? "PM" : "AM";

    let formattedTime = `${days[day]} ${dayofMonth} ${months[month]} ${hours}:${minutes} ${timeUnit}`;

    if (use === "format") {
        return formattedTime;
    } else {
        return [hours, minutes, timeUnit];
    }
};