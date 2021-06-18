export const renderDayOrNight = (isDay) => {
    const body = document.getElementById("body");
    if (isDay) {
        body.classList.remove("night");
        body.classList.add("day");
    } else {
        body.classList.remove("day");
        body.classList.add("night");
    }
};