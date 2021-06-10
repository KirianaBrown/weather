import { elements } from "./base";

export const toggleSavedButton = (isLiked) => {
    // const iconString = isLiked ? 'icon-bookmark' : 'icon-bookmark-outlined';

    // document.querySelector('.results__love use').setAttribute('href', `img/icons.svg#${iconString}`);

    if (isLiked) {
        const favButton = document.querySelector("#favBtn");
        console.log(favButton);
        favButton.classList.add("container-results-date__favourite--btn--selected");
        favButton.classList.remove("container-results-date__favourite--btn");
    } else {
        const favButton = document.querySelector("#favBtn");
        console.log(favButton);
        favButton.classList.remove(
            "container-results-date__favourite--btn--selected"
        );
        favButton.classList.add("container-results-date__favourite--btn");
    }
};

export const renderItem = (item) => {
    const markup = `
    <li class="saved__item" data-itemid=${item.id} data-itemLocation=${
    item.location
  }>
        <a href="${item.id}" class="saved__link" data-itemLocation=${
    item.location
  }>
            <figure class="saved__fig" data-itemLocation=${item.location}>
                <img src="img/weather/${item.img}.svg" alt="Test Image">
            </figure>

            <p class="saved__location">${item.location}</p>
            <p class="saved__temp">${Math.round(item.temp)}&#0176;</p>
        </a>
    </li> 
  `;

    elements.savedList.insertAdjacentHTML("beforeend", markup);
};

export const deleteItem = (id) => {
    const item = document.querySelector(`.saved__item[data-itemid='${id}']`);

    if (item) {
        item.parentElement.removeChild(item);
    }
};