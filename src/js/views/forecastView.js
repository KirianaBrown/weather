import { elements } from "./base";

export const renderForecast = (forecast, symbol) => {
    const html = `
   <div class="container-action-forecast-day">
                    <h6>${formatDateTime(forecast.dateTime)}</h6>
                    <p>${Math.floor(forecast.temp)}&#0176;${symbol}</p>
                </div>`;

    elements.forecastList.insertAdjacentHTML("beforeend", html);
};

const formatDateTime = (dt) => {
    const unixTimeStamp = dt;
    const milliseconds = unixTimeStamp * 1000;
    const newDateVar = new Date(milliseconds);
    const humanStringForm = newDateVar.toLocaleString("en-US", {
        weekday: "short",
        // month: 'long',
        // day: 'numeric'
    });

    return humanStringForm;
};