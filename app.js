/*$(document).ready(function(){
  $.get('https://swapi.co/api/films/7/', function(data){
    console.log(data);
    let firstHeader = $("<h3></h3>")[0];
    $(firstHeader).text(data.title);
    $('.movie')[0].append(firstHeader);
    let opening = $("<p></p>")[0];
    $(opening).text(data.opening_crawl);
    $('.movie')[0].append(opening);
  })
})*/
$(document).ready(function(){

  for(let i=0; i<6; i++){
    $.get(('https://swapi.co/api/films/'+(i+1)+'/'), function(data){
      console.log(data);
      let header = $('<h3></h3>')[0];
      console.log(header);
      $(header).text(data.title);
      let container = $('.movie')[i];
      $(container).append(header);
      let p = $('<p></p>')[0];
      $(p).text(data.opening_crawl);
      $('.movie')[i].append(p);
      var showPplBtn = $("<button></button")[0];
      var planetBtn = $("<button></button>")[0];
     $('.movie')[i].append(showPplBtn);
     $('.movie')[i].append(planetBtn);
     $(showPplBtn).text('People');
     $(planetBtn).text('Planets');
     $(showPplBtn).click(function(){
       let pple = $('<p></p>');
       let pple2 = $('<p></p>');
       let pple3 = $('<p></p>');
       $(people).empty();
       $.get((data.characters[0]), function(info){
         $(pple).text(info.name);
       })
       $.get((data.characters[1]), function(info2){
         $(pple2).text(info2.name);
       })
       $.get((data.characters[2]), function(info3){
         $(pple3).text(info3.name);
       })
       $(people).append(pple);
       $(people).append(pple2);
       $(people).append(pple3);

     })
     $(planetBtn).click(function(){
       let plan = $('<p></p>');
       $(planets).empty();
       $.get((data.planets[0]), function(stuff){
         $(plan).text(stuff.name);
       })
       $(planets).append(plan);
     })
   })
 }


})
