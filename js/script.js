$(document).ready(function(){

  $('.next').click(pulsanteNext); //funzione di callback che parte dopo il click

    $('.prev').click(pulsantePrev);
    // a click function for the previous button

  $('.nav i').click(function(){
    var circlButton =  $('.nav i.active');
circlButton.removeClass('active');
    $(this).addClass('active');


  });

});

function pulsanteNext(){

  // in questo modo non capisce più quale immagine è attiva
  // $('.images img.active').removeClass('active');
  // $('.images img.active').next().addClass('active');

  var imgAttiva = $('.images img.active');
  console.log(imgAttiva);
  //è importante usare la variabile

  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.next().addClass('active');

  if(imgAttiva.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}

// function for previous button
function pulsantePrev(){

var prevButton = $('.images img.active')
console.log(prevButton);

var pallinodue = $('.nav i.active');


prevButton.removeClass('active');
prevButton.prev().addClass('active');
console.log(prevButton);

pallinodue.removeClass('active');
pallinodue.prev().addClass("active");

if (prevButton.hasClass('first')){
  $('.images img.last').addClass('active');
  $('.nav i.last').addClass('active')
}













}
// ss
