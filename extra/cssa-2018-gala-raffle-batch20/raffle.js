var max_num_winners = 20;
var cur_num_winners = 0;

var max_num_intervals = 30;
var cur_num_intervals = 0;

min = 1;
max = 630;

winner_set = new Set();

function getRandomInt() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function raffle(){
  if(cur_num_winners < max_num_winners){
    setTimeout(raffle, 50);
    cur_num_intervals += 1;
  }

  for(i = cur_num_winners; i < max_num_winners;  i++){
    var rdint = getRandomInt()
    $("#" + i.toString()).text(rdint.toString().padStart(3, "0"));
  }

  if (cur_num_intervals > max_num_intervals){
    for(;;){
      var rdint = getRandomInt();
      if(!winner_set.has(rdint)){
        $("#" + cur_num_winners.toString()).text(rdint.toString().padStart(3, "0"));
        console.log(rdint);
        winner_set.add(rdint);
        break;
      }
    }

    cur_num_intervals = 0;
    cur_num_winners += 1;

  }
}

$(document).ready(function () {

  $("#startButton").click(function() {
    raffle();
  });
});
