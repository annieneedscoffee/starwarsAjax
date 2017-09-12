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
     $('.movie')[i].append(showPplBtn);
     $('button').text('People');
     $('button').click(function(){
       let pple = $('<p></p>');
       let pple2 = $('<p></p>');
       let pple3 = $('<p></p>');
       $(people).empty();
       $(pple).text(data.characters[0]);
       $(pple2).text(data.characters[1]);
       $(pple3).text(data.characters[2]);
       $(people).append(pple);
       $(people).append(pple2);
       $(people).append(pple3);
     })
   })
 }
})
