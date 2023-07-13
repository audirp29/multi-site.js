let test = prompt("Entrez le nom de la ville ou vous souhaitez voir la meteo :");
test = test.charAt(0).toUpperCase() + test.slice(1).toLowerCase();



$(document).ready(function() {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Acq,fr&appid=67650783563069701696bbe0037ffe19';
    var apiUrll = 'https://api.openweathermap.org/data/2.5/weather?q=Arras,fr&appid=67650783563069701696bbe0037ffe19';
    var apiUrlll = 'https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=67650783563069701696bbe0037ffe19';
    var sarah = 'https://api.openweathermap.org/data/2.5/weather?q=Tourcoing,fr&appid=67650783563069701696bbe0037ffe19';
    var addauto = `https://api.openweathermap.org/data/2.5/weather?q=${test},fr&appid=67650783563069701696bbe0037ffe19`;
  
    $.getJSON(apiUrl, function(data) {
      var weather = {
        city: data.name,
        temperature: Math.round(data.main.temp - 273.15), // Convertir de Kelvin à Celsius
        humidity: data.main.humidity,
        conditions: data.weather[0].description
      };
  
      var weatherHtml = '<h2 style="color: rgb(0, 12, 255);">' + weather.city + '</h2>';
      weatherHtml += '<h3 style="color: rgb(0, 12, 255);">Temperature: ' + weather.temperature + '&deg;C</h3>';
      weatherHtml += '<h3 style="color: rgb(0, 12, 255);">Humidity: ' + weather.humidity + '%</h3><br>';
      weatherHtml += '<h3 style="color: rgb(0, 12, 255);">Conditions: ' + weather.conditions + '</h3>';
    weatherHtml += '<img src="humi.jpg" alt="Humidity Image">';
    weatherHtml += '<img src="conds.jpg" alt="Conditions Image">';

    $('#weather').html(weatherHtml);


      $('#weather').html(weatherHtml);
      /*alert("la température est :" + weatherHtml);*/
      alert($('#weather').text());

      $.getJSON(apiUrll, function(data) {
        var weather = {
          city: data.name,
          temperature: Math.round(data.main.temp - 273.15), // Convertir de Kelvin à Celsius
          humidity: data.main.humidity,
        conditions: data.weather[0].description
        };
    
        var weatherHtmll = '<h2 style="color: rgb(255, 255, 255);">' + weather.city + '</h2>';
        weatherHtmll += '<h3 style="color: rgb(255, 255, 255);">Temperature: ' + weather.temperature + '&deg;C</h3>';
        weatherHtmll += '<h3 style="color: rgb(255, 255, 255);">Humidity: ' + weather.humidity + '%</h3><br>';
        weatherHtmll += '<h3 style="color: rgb(255, 255, 255);">Conditions: ' + weather.conditions + '</h3>';
  
  
        $('#weatherr').html(weatherHtmll);

        $.getJSON(sarah, function(data) {
          var weather = {
            city: data.name,
            temperature: Math.round(data.main.temp - 273.15), // Convertir de Kelvin à Celsius
            humidity: data.main.humidity,
        conditions: data.weather[0].description
          };
      
          var sara = '<h2 style="color: rgb(0, 189, 17);">' + weather.city + '</h2>';
          sara += '<h3 style="color: rgb(0, 189, 17);">Temperature: ' + weather.temperature + '&deg;C</h3>';
          sara += '<h3 style="color: rgb(0, 189, 17);">Humidity: ' + weather.humidity + '%</h3><br>';
          sara += '<h3 style="color: rgb(0, 189, 17);">Conditions: ' + weather.conditions + '</h3>';
    
    
          $('#wsara').html(sara);

          $.getJSON(addauto, function(data) {
            var weather = {
              city: data.name,
              temperature: Math.round(data.main.temp - 273.15), // Convertir de Kelvin à Celsius
              humidity: data.main.humidity,
              conditions: data.weather[0].description
            };
            var addautoo = '<h2 style="color: rgb(255, 0, 220);">' + weather.city + '</h2>';
            addautoo += '<h3 style="color: rgb(255, 0, 220);">Temperature: ' + weather.temperature + '&deg;C</h3>';
            addautoo += '<h3 style="color: rgb(255, 0, 220);">Humidity: ' + weather.humidity + '%</h3><br>';
            addautoo += '<h3 style="color: rgb(255, 0, 220);">Conditions: ' + weather.conditions + '</h3>';
          
            $('#wauto').html(addautoo);
          
            var uvUrll = 'https://api.openweathermap.org/data/2.5/uvi?appid=67650783563069701696bbe0037ffe19&lat=' + data.coord.lat + '&lon=' + data.coord.lon;
          
            $.getJSON(uvUrll, function(uvData) {
              var uvIndex = uvData.value;
              var uvRange = '';
              if (uvIndex >= 0 && uvIndex <= 5) {
                uvRange = '0 a 5 good';
              } else if (uvIndex >= 6 && uvIndex <= 10) {
                uvRange = '6 a 10 hot';
              } else {
                uvRange = '11 a + burn';
              }
              var uvHtmll = '<h3 style="color: rgb(255, 0, 220);">UV Index: ' + uvIndex + '</h3>';
              uvHtmll += '<h3 style="color: rgb(255, 0, 220);">UV Range: ' + uvRange + '</h3>';
              $('#wauto').append(uvHtmll);
            }).fail(function() {
              console.log("Erreur lors de la récupération de l'indice UV.");
            });
          });
        });
          

});


$.getJSON(apiUrlll, function(data) {
  var weather = {
      city: data.name,
      temperature: Math.round(data.main.temp - 273.15), // Convertir de Kelvin à Celsius
      humidity: data.main.humidity,
      conditions: data.weather[0].description
  };

  var weatherHtmlll = '<h2 style="color: rgb(255, 0, 0);">' + weather.city + '</h2>';
  weatherHtmlll += '<h3 style="color: rgb(255, 0, 0);">Temperature: ' + weather.temperature + '&deg;C</h3>';
  weatherHtmlll += '<h3 style="color: rgb(255, 0, 0);">Humidity: ' + weather.humidity + '%</h3><br>';
  weatherHtmlll += '<h3 style="color: rgb(255, 0, 0);">Conditions: ' + weather.conditions + '</h3>';

  $('#weatherrr').html(weatherHtmlll);

  var uvUrl = 'https://api.openweathermap.org/data/2.5/uvi?appid=67650783563069701696bbe0037ffe19&lat=' + data.coord.lat + '&lon=' + data.coord.lon;

  $.getJSON(uvUrl, function(uvData) {
      var uvIndex = uvData.value;
      var uvHtml = '<h3 style="color: rgb(255, 0, 0);">UV Index: ' + uvIndex + '</h3>';
      $('#weatherrr').append(uvHtml);
  }).fail(function() {
      console.log("Erreur lors de la récupération de l'indice UV.");
  });

});
});
});
