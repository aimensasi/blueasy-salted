$(document).ready(function() {
  $('.animsition-link').click(function(e){
        e.preventDefault();
      
      if($(this).text() == 'HOME'){
          $('#home').animatescroll({scrollSpeed:800,easing:'easeInSine'});
      }else if($(this).text() == 'PORTFOLIO'){
          $('#portfolio').animatescroll({scrollSpeed:800,easing:'easeInSine'});
      }else if($(this).text() == 'SERVICES'){
          $('#services').animatescroll({scrollSpeed:800,easing:'easeInSine'});
      }else if($(this).text() == 'CONTACT'){
          $('#contact').animatescroll({scrollSpeed:800,easing:'easeInSine'});
      }
                    
                    
      
  });
});