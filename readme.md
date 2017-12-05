# Storms of First December Exercise

Using a weather API (darksky):
- Create model to store weather data such as rainfall and a city
- Slurp data from an existing API to give you some data, and put it into your database
- Perform queries on *your* data to do averages*
- Create seeds.rb that populates Melbourne, Sydney, and Wellington from a weather API
- Create a function to return the rainfall in a month in a given city
- Create a function to work out the mean (average), median, and maximum rainfall in a month in a given city
- Create RESTful APIs for the above

## Steps

### Create project
- make a root directory (weather-project)
- make folders for both the backend (/api) and frontend (/react-web)
- cd into /api and initialise the project
```
yarn init
```


### Setup boilerplate code
- create server.js
- install express
- install mongoose
- install nodemon
- install 
- create scripts in package.json
```
  "scripts": {
    "dev": "nodemon server.js",
    "seed": "node models/seeds.js"
  }
```


