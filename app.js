// 4cc4e8cd803054625c7ffdb841d01106 key api weather
$.ajax({
    url : "http://api.openweathermap.org/data/2.5/forecast?units=metric&id=6447020&APPID=4cc4e8cd803054625c7ffdb841d01106",
    success: function(data){
        $("#test").html(data.city.name + "<br>" + data.list[6].main.temp + "°C" +"<img src='http://openweathermap.org/img/w/" + data.list[6].weather[0].icon + ".png'>");
        console.log(data);
    },
    error: function(){
        alert("Echec de la connexion !");
    }
})