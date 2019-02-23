
// 2 event listeners for the wager clicks
document.getElementById('wagerOne').addEventListener('click', function(){
  alert(works)
  //set reel values
  var reel1 = randomReel()
  var reel2 = randomReel()
  var reel3 = randomReel()
  //conditional to update values
  if ( match ){
    total = total + 25;
  }else{
    total = total - 1;
  }
  //update dom with new playerscore
  document.getElementById(playerscore).innerHTML = playerscore
});
document.getElementById('wagerOne').addEventListener('click', function(){
  alert(works)
  //set reel values
  //conditional to update values
});
//choose tandom value for the reel
function randomReel(){
  //1 out 0f 5
  //return the value
  var choice = Math.random()
  if ( choice <= .2){
    choice = "cherry"
  }
  else if (choice <= .4){
    choice = ""
  }
  else if (choice <= .4){
    choice = ""
  }else if (choice <= .4){
    choice = ""
  }
}
