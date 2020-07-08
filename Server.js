var unirest = require('unirest');
var express = require('express');
var app = express();

app.get('/data/:city', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    var city=req.params.city
    unirest.get("https://community-open-weather-map.p.rapidapi.com/weather/")
      .header("X-RapidAPI-Key", "cb681f5d39mshf1e69d649d66e70p170ce0jsn961fce1d210f")
      .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
      .query({
          'q':city,
          'units': 'metric',
          'mode': 'json'
      })
      .end(function (result) {
          console.log(result.body);
          res.status(200).json(result.body);
      });
    })

    app.get('/data/:lat/:lon', function(req, res){
      res.setHeader('Access-Control-Allow-Origin', '*')
      var lat=req.params.lat;
      var lon=req.params.lon;
      unirest.get("https://community-open-weather-map.p.rapidapi.com/weather/")
        .header("X-RapidAPI-Key", "cb681f5d39mshf1e69d649d66e70p170ce0jsn961fce1d210f")
        .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
        .query({
            'lon': lon,
            'lat': lat,
            'units': 'metric',
            'mode': 'json'
        })
        .end(function (result) {
            console.log(result.body);
            res.status(200).json(result.body);
        });
      })


    app.listen(process.env.PORT || 3000, function(){
      console.log('Server running at https://127.0.0.1:3000/');
    })

    //cb681f5d39mshf1e69d649d66e70p170ce0jsn961fce1d210f
    //7d70134750mshf5f55603d8c630dp1ea343jsn18a600a5da3a