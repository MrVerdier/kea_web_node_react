// 




setInterval(function(){ 

    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    console.log("The time is: " + time);
}, 1000);