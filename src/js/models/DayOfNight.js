/*
recieve the weather and calc if time of day is true for day
returns a bool

*/

export const calcTimeOfDay = (weather) => {
    console.log("Calc Time of Day called");
    console.log(weather);
    // 1. Get sunrise and sunset
    const sunrise = convertUnix(weather.sys.sunrise, "calcTime");
    const sunset = convertUnix(weather.sys.sunset, "calcTime");

    // 2. Calc the current timezone location
    const currentTimeInLocation = setDate(weather.timezone, "calcTime");

    // console.log(sunrise[0] + sunrise[1]);

    console.log(`sunrise: ${sunrise}`);
    console.log(`sunset: ${sunset}`);
    console.log(`current time: ${currentTimeInLocation}`);

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

const convertUnix = (unixTime, use = "format") => {
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

const setDate = (timezone, use = "format") => {
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