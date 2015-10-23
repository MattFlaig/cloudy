(function() {
  var app = angular.module('cloudy', []);

  app.getWeather = function(myCity){
    $.simpleWeather({
      location: myCity,
      woeid: '',
      unit: 'c',
      success: function(weather) {
        html = '<h2><i class="icon" data-icon="'+weather.code+'"></i>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        $("#weather").html(html);

        yourPlace = '<div class="yourPlace">' +weather.city +' ('+ weather.country +')'+'</div>';
        $("#yourPlace").html(yourPlace);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  };


  $(document).ready(function() {
    app.getWeather('Berlin');

    $('#show').on('click', function(){
      var myCity = $('#city').val();
      if (myCity === ""){ myCity = "Berlin";}
      app.getWeather(myCity);
    });
  });
})();