<h1 align="center">
  <br>
  <a href=""><img src="/dist/img/logo.png" alt="Weather Forecastr" width="200"></a>
  <br>
  Weather Forecastr
  <br>
</h1>

# 🌤 Weather App powered by [Openweathermap](https://openweathermap.org/api).

Get an up to date weather report for your location or one of your previously searched locations! Including a 5 day forecase so you will never be caught out in the rain again.

## 🏓 Tech Stack

- Html
- SCSS
- Javascript feat ES6 modules for MVC structure
- Webpack as bundle manager
- Babel for ES6 conversion
- Axios for API fetching

## 🥎 Summary

<img align='center' src="/dist/img/readMe.jpg" alt="Weather Forecastr">

This project was structured using the MVC model enabled with the help of ES6 modules. The models (search, forecast, weather) are seperated out from the views rendered and this is all controlled by the central index.js file.

Data (search / weather) are stored as objects in a local state variable to be passed throughout the various models & views all handled by the controller index.js.

Local storage is implemented to set and get previous searched 'saved' locations.

## 🚀 You can clone the repository and use the following commands:

Note: Be sure to signup and request your API key [see this guide](https://home.openweathermap.org/users/sign_in) from openweathermap.

##### To install run

```shell
npm init
```

##### To run development mode

```shell
npm run start
```

##### To run build mode

```shell
npm run build
```

##### Create local environments

```shell
Create a .env file to store your API_URL & API_KEY
```
