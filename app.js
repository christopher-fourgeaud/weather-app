// 4cc4e8cd803054625c7ffdb841d01106 key api weather
$.ajax({
    url : "http://api.openweathermap.org/data/2.5/forecast?units=metric&id=6447020&APPID=4cc4e8cd803054625c7ffdb841d01106",
    success: function(data){
        $("#city1").html(data.city.name);
        $("#cond1").html(data.list[0].main.temp + "°C");
        $("#icon1").html("<img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'>")

        $("#cond2").html(data.list[6].main.temp + "°C");
        $("#icon2").html("<img src='http://openweathermap.org/img/w/" + data.list[6].weather[0].icon + ".png'>")

        $("#cond3").html(data.list[12].main.temp + "°C");
        $("#icon3").html("<img src='http://openweathermap.org/img/w/" + data.list[12].weather[0].icon + ".png'>")
        
    },
    error: function(){
        alert("Echec de la connexion !");
    }
})