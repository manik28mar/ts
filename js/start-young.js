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
        document.getElementById('mobile-nav-logo').style.top = "-111px";
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

