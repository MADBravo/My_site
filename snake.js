
$(document).ready(function(){
    var el = document.getElementById('text');


    function printThis(el){
      console.log($(this).text());
    }

    // $('#main').find('p').addClass('HAH');
    //This will find p elements and add a HAH class to them VERY IMPORTANT

    console.log($('.submenu a').first().text());
//this targetes the first list within the submenu of a; same can be done with LAST


    // console.log("El in Vanilla JS:", el);

    /* gQuery(".my-selector").addClass("MYNEWCLASS");

    gQuery("#main").addClass("HELLO");
    // console.log("El in jQuery:", $(el));
*/

    $(document).on('contextmenu', function(){
      return false;
    });


    $(document).on('mousedown', function(event) {


      if(event.which == 3) {

          $('.hidden').removeClass('shown');

          if($(event.target).is('img')) {
            $('.saveimg, .newtab').addClass('shown');
          } else if($(event.target).is('a')){
            $('.newtab').addClass('shown');
          }

          console.log(event.pageY, event.pageX);

          $('#context').css({
              top:event.pageY,
              left:event.pageX
          });

          $('#context').fadeIn();
          return false;
      }
        $('#context').fadeOut();
    /*  switch (event.which) {
        case 1:
          console.log("clicked left mouse button");
          break;
        case 2:
          console.log("clicked middle mouse button");
          break;
        case 3:
          console.log("clicked right mouse button");
          break;
      }

 switch can be used instead of IF. This determines which mouse buttons were clicked */
    });
 //end of Mouse Location/button seciton
  //this will act as an eventlistener
    $('#go-button').on('click', function(){
        alert("Fantastic job clicking that button!");
    });
// eventlistener in javascript: document.getElementById('go-button').addEventListener('clicked', alertMe);

// document.getElementByClassName('my-input')[#].value = "value of input"
    //$('.my-input').val("New input value");


    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        var submenu = $(this).parent().find('.submenu');
        submenu.addClass('active');

        $(this).on('mouseleave', function(){


          submenu.removeClass('active');
        });
    });


  $('[href="https://google.com"]').on('click', function(event){
    console.log("Linking to google?");



    return false;
    //preventDefault will prevent the hyperlink from opening up to google. or you can use return false/true
  });





  $('#prepend, #append, #replace').on('click', function(e){
      e.preventDefault();

      var el = $(e.currentTarget);
      var action = el.attr('id');
      var content = $('.text').val();

      if(action == "prepend") {
        console.log("Prepending. . .");
        $('#main').prepend(content);

      }else if(action == "append"){
        console.log("Appending. . .");
          $('#main').append(content);
          //        .append/prepend('<a href="#">' + content + '</a>'); can be used to add links later
      }else if(action == "replace"){
        console.log("Replacing. . .");
          $('#main').html(content);
          //this turns the content into an inner HTML
      }
      $('.text').val('');
      //This resets the text box to a cleared text box


//EACH selects multiple elements within an ARRAY using jQuery



  });

  $('textarea').focusin(function(){
    console.log("Focused in on the textarea");
  });
  $('textarea').focusout(function(){
    console.log("Focused out of the textarea");
  });

  $('p:contains("lorem")').html("This had lorem in it. Surprisingly it still does.");

//this targets the specific paragraph element that CONTAINS "lorem"

  if($(':contains("lorem")').is("p")){
    console.log("Lorem is in a paragraph");
  }
//returns a boolean
  if($(':contains("lorem")').hasClass('my-slector')){
    console.log("Lorem is inside a paragraph")};

    $('p').each(function(){
      console.log($(this).text());
    });

//CALLBACKS can be used to run code after you do something

$('p').each(printThis);
//this create the printThis which we need to write the code for at the beginning of the js document.ready

$('input').css({
    background: '#f00',
    padding: '10px',
    borderColor: '#000'
});
//This is how to write a CSS method within javascript


});
