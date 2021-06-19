import { convertUnix, setDate } from "../views/base";

export const calcTimeOfDay = (weather) => {
    // 1. Get sunrise and sunset
    const sunrise = convertUnix(weather.sys.sunrise, "calcTime");
    const sunset = convertUnix(weather.sys.sunset, "calcTime");

    // 2. Calc the current timezone location
    const currentTimeInLocation = setDate(weather.timezone, "calcTime");

    let dayTime = true;

    if (
        currentTimeInLocation[0] > sunrise[0] &&
        currentTimeInLocation[0] < sunset[0]
    ) {
        dayTime = true;
    } else if (
        currentTimeInLocation[0] === sunrise[0] &&
        currentTimeInLocation[1] > sunrise[1]
    ) {
        dayTime = true;
    } else if (
        currentTimeInLocation[0] === sunset[0] &&
        currentTimeInLocation[1] < sunset[1]
    ) {
        dayTime = true;
    } else {
        dayTime = false;
    }

    // 4. return true or false
    return dayTime;
};