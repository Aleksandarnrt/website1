$(function(){
    smoothScrool(300);
    mobileNav();
})

function smoothScrool(duration){
    $('a[href^="#"]').on('click', function(event){
        var target = $( $(this).attr('href'));
        if(target.length){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    })
}

 


function mobileNav(){
     
    $('.mobile-nav-toggle').on('click',function(){
        
        var status= $(this).hasClass('is-open');
        if(status)
            $('.mobile-nav-toggle, .mobile-nav, .logo, .logo-dark').removeClass('is-open');
        else
            $('.mobile-nav-toggle, .mobile-nav, .logo, .logo-dark').addClass('is-open');
        
    });
    
}



$(window).ready(function(){
    
    setTimeout(function(){
              $('.logo, nav, h1, .kicker, .mobile-kicker').addClass('is-showing'); 
          },150);
    
});

$(window).scroll(function(){
    
    var wScroll= $(this).scrollTop();
    console.log(wScroll);
    
    
   if(wScroll> $('.book-wrapper').offset().top-($(window).height()/1.5)){
        $('img').each(function(i){
            
          setTimeout(function(){
              $('.book-wrapper>img').eq(i).addClass('is-showing'); 
          },250*(i+1));
        });
    }
    
    if(wScroll> $('.prints-wrapper').offset().top-($(window).height()/1.5)){
        $('img').each(function(i){
            
          setTimeout(function(){
              $('.prints-wrapper>img').eq(i).addClass('is-showing'); 
          },250*(i+1));
        });
    }
    
    
    
    
});