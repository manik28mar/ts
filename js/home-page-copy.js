
// Initializing the carousels

$('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    autoPlay: 5000,
    freeScroll: true,
    wrapAround: true,
  });

  $('.mini-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    autoPlay: 900,
    freeScroll: true,
    wrapAround: true,
    fade: true
  

  });







    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('desktop-nav-bar').style.top = "0";
      } else if (prevScrollpos < currentScrollPos){
        document.getElementById('desktop-nav-bar').style.top = "-135px";
      }

      if (prevScrollpos > currentScrollPos) {
        document.getElementById('mobile-nav-logo').style.top = "0";
      } else if (prevScrollpos < currentScrollPos){
        document.getElementById('mobile-nav-logo').style.top = "-90px";
      }

      if (prevScrollpos > currentScrollPos) {
        document.getElementById('nav-bar-icon').style.top = "10px";
      } else if (prevScrollpos < currentScrollPos){
        document.getElementById('nav-bar-icon').style.top = "-55px";
      }

      prevScrollpos = currentScrollPos;
    }



  
  
    function openNav() {
      document.getElementById("nav-bar").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("nav-bar").style.width = "0%";
    }












    // Get the modal1
var modal1 = document.getElementById("modal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var conference_box1 = document.getElementById("conference-content-box1");

conference_box1.onclick = function(){
  modal1.style.display = "block";
}

// Get the <span> element that closes the modal
var span1 = document.getElementById("span1");

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}






// Get the modal2
var modal2 = document.getElementById("modal2");
var conference_box2 = document.getElementById("conference-content-box2");
var span2 = document.getElementById("span2");

conference_box2.onclick = function(){
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}



// Get the modal3
var modal3 = document.getElementById("modal3");
var conference_box3 = document.getElementById("conference-content-box3");
var span3 = document.getElementById("span3");

conference_box3.onclick = function(){
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}



// Get the modal4
var modal4 = document.getElementById("modal4");
var conference_box4 = document.getElementById("conference-content-box4");
var span4 = document.getElementById("span4");

conference_box4.onclick = function(){
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}




















