$(document).ready(function(){

  $('.next').click(pulsanteNext); //funzione di callback che parte dopo il click

    $('.prev').click(pulsantePrev);
    // a click function for the previous button

  $('.nav i').click(pulsanteButtonnext);

// $('.nav i').click(pulsanteButtonprev);

// Prova a capire che numero di pallino è (ad esempio il 2) e quindi poi ad aprire l'immagine giusta




});



// function for little molecules buttons
function pulsanteButtonnext(){
 var elementbtn = $('.images img.active');
console.log(elementbtn);

var specialBtn1 = $('.nav i.active');

specialBtn1.removeClass('active');
elementbtn.removeClass('active');

elementbtn.next().addClass('active');
specialBtn1.next().addClass('active');

if (elementbtn.hasClass('last')){
  $('.images img.first').addClass('active');
  $('.nav i.first').addClass('active');
}


}
// function for little molecules buttons



// function for next button
function pulsanteNext(){



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
