export const convertToFarenheit = (celsius) => {
    return Math.floor(celsius * 9 / 5 + 32)
}

export const convertToCelsius = (farenheit) => {
    return Math.floor((farenheit - 32) * 5 / 9);
}