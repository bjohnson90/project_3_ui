//Add grabber for number fields and send to app.py
$("#submit").click(function() {
  var twist = $('#twisty_input').val();
  var cuddle = $('#cuddly_input').val();
  var push = $('#pushy_input').val();
  var grease = $('#greasy_input').val();
  var zap = $('#zappy_input').val();
  $.get({
    url: "https://bj-project-3-api.herokuapp.com/model/"+twist+"/"+cuddle+"/"+push+"/"+grease+"/"+zap,
    success: function( response ) {
      if (response['prediction'] == 1){
        alert("This combination would make an effective vaccine according to our model!");
      }
      else{
        alert("This combination would make an ineffective vaccine according to our model. Change the values and try again!");
      }
        
    }

});
});
