let aboutMeClicked = true

$('#myButton').click(function(){
    if(aboutMeClicked) {
        $.get("/aboutme", (data) => {
            console.log(data)
            $('#resultContainer').append("<div>"+data.firstName+" "+data.lastName)
        })
    }
    aboutMeClicked = !aboutMeClicked
    $('#resultContainer').text("")
    // $('#resultContainer').toggle()
    
})



       // create a link or a button once clicked
       // call a GET request with AJAX
       // that returns the about me info from the server
       // then take the response and display it on the page