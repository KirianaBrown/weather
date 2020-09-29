export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    resultsContainer: document.querySelector('.results')
}

export const renderLoader = parentEl => {
    console.log(parentEl);
    const loader = `
    <div class = "loader" >
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