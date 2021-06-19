import { elements } from "./base";

export const toggleSavedButton = (isLiked) => {
    if (isLiked) {
        const favButton = document.querySelector("#favBtn");
        favButton.classList.add("container-results-date__favourite--btn--selected");
        favButton.classList.remove("container-results-date__favourite--btn");
    } else {
        const favButton = document.querySelector("#favBtn");
        favButton.classList.remove(
            "container-results-date__favourite--btn--selected"
        );
        favButton.classList.add("container-results-date__favourite--btn");
    }
};

export const renderItem = (item) => {
    const html = `
    <li class="container-action-favourites-listItem  saved__item" data-itemid=${
      item.id
    } data-itemLocation=${item.location}>
    ${Math.round(item.temp)} ${item.location} 
                    </li>
    `;

    elements.savedContainer.insertAdjacentHTML("beforeend", html);
};

export const deleteItem = (id) => {
    const item = document.querySelector(`.saved__item[data-itemid='${id}']`);

    if (item) {
        item.parentElement.removeChild(item);
    }
};