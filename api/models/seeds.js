
const mongoose = require('./init')
const Record = require('../models/record');

// 32d0988dc1e92701571405b0121b40ef

const axios = require('axios');

// Melbourne
for (var i = 1; i < 31; i++) {
  axios.get(`https://api.darksky.net/forecast/32d0988dc1e92701571405b0121b40ef/-37.8142,144.9632,2017-11-${i < 10 ? '0' + i : i}T00:00:00+1100?exclude=currently,flags,hourly&units=si`)
    .then((res) => {
      seedData(res.data)
    })
}

// Sydney
for (var i = 1; i < 31; i++) {
  axios.get(`https://api.darksky.net/forecast/32d0988dc1e92701571405b0121b40ef/-33.8688,151.2092,2017-11-${i < 10 ? '0' + i : i}T00:00:00+1100?exclude=currently,flags,hourly&units=si`)
    .then((res) => {
      seedData(res.data)
    })
}

// Wellington
for (var i = 1; i < 31; i++) {
  axios.get(`https://api.darksky.net/forecast/32d0988dc1e92701571405b0121b40ef/-41.2864,174.7762,2017-11-${i < 10 ? '0' + i : i}T00:00:00+1100?exclude=currently,flags,hourly&units=si`)
    .then((res) => {
      seedData(res.data)
    })
}

function seedData(data) {
  console.log(data)
  const precipitation = data.daily.data[0].precipIntensity ? data.daily.data[0].precipIntensity : 0;
  const city = data.timezone;
  const date = new Date (data.daily.data[0].time * 1000);

  Record.create({
    name: city,
    rainFall: precipitation,
    date: date
  })
    .then((record) => {
      console.log(`Entry created: ${city}, ${date}`)
    })

}