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

        fore1 ='<div class="tile"><i class="icon" data-icon="'+weather.forecast[1].code+'"></i>'
                +weather.forecast[1].high+'&deg;'+weather.units.temp+'<div class="date">'+weather.forecast[1].date+'</div></div>'
        $("#fore1").html(fore1);
        fore2 ='<div class="tile"><i class="icon" data-icon="'+weather.forecast[2].code+'"></i>'
                +weather.forecast[2].high+'&deg;'+weather.units.temp+'<div class="date">'+weather.forecast[2].date+'</div></div>'
        $("#fore2").html(fore2);
        fore3 ='<div class="tile"><i class="icon" data-icon="'+weather.forecast[3].code+'"></i>'
                +weather.forecast[3].high+'&deg;'+weather.units.temp+'<div class="date">'+weather.forecast[3].date+'</div></div>'
        $("#fore3").html(fore3);

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