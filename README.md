<h1 align="center">
  <br>
  <a href="https://kb-weatherapp.netlify.app" target="__blank"><img src="/dist/img/icons/sun.svg" alt="Weather Forecastr" width="200"></a>
  <br>
  <a href="https://kb-weatherapp.netlify.app" target="__blank">Suns Out Buns Out</a>
  <br>
</h1>

###### 🌤 Suns Out Buns Out - Weather App powered by [Openweathermap](https://openweathermap.org/api).

[![Netlify Status](https://api.netlify.com/api/v1/badges/031ef24b-d318-4211-9e18-629ff9cbf9f8/deploy-status)](https://app.netlify.com/sites/kb-weatherapp/deploys)

Get an up to date weather report for your location or one of your previously searched locations! Including a 5 day forecast so you will never be caught out in the rain again.

![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![image](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![image](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

## 🏓 Tech Stack

- Html
- SCSS
- Javascript feat ES6 modules for MVC structure
- Webpack as bundle manager
- Babel for ES6 conversion
- Axios for API fetching
- Hosted on Netlify

## 🥎 Summary

<img align='center' src="/dist/img/readme1.png" alt="Weather | Suns out Buns Out">

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
