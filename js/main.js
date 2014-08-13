// JavaScript Document
$( document ).ready( function() {

//on pageload
headerTextResize();


//on window resize
$(window).resize( function() {
	headerTextResize();
	footerMenu();
});


//header text resize on window resize
var sizeText;
var scalingText;

function headerTextResize() {		
	fittextContainerSize = $('.header-callout').width();
	fittextSize = fittextContainerSize*0.12;
	$('.header-callout h2').css('font-size',fittextSize+'px');
};


//.stickynav color change
var distFromTop = $('#posts').offset().top;
$(window).scroll(function(){
    if($(this).scrollTop() > distFromTop)
    {   
        $('#stickynav').addClass('fullColor');
    } else {
		$('#stickynav').removeClass('fullColor');
	}
});


//read more blog post
$('p.page-post-content').hide();
$('.page-post-more').click(function(e) {
	  e.preventDefault();
	  if ($(this).text() == 'Read More') {
		  $(this).text('Close');
		  $(this).parentsUntil('col-sm-4').siblings('.col-sm-4 ').fadeOut(150);
		  $(this).parentsUntil('col-sm-4 ').toggleClass('fullpost', 400, 'easeOutSine');
		  $(this).parentsUntil('col-sm-4 ').find('p.page-post-content').delay(750).slideDown(500);
	  }
	  else {
		  $(this).text('Read More');
		  $(this).parentsUntil('col-sm-4').find('p.page-post-content').slideUp(500);
		  $(this).parentsUntil('col-sm-4').toggleClass('fullpost', 400, 'easeOutSine');
		  $('.col-sm-4').delay(800).fadeIn(800);
	  }
});

//footer menus
footerMenu();
function footerMenu() {
	if ($('.container-fluid').width() < 700) {
		$('#collapseOne, #collapseTwo, #collapseThree').addClass('collapse');
		$('footer').addClass('mobile');
	} else {
		$('#collapseOne, #collapseTwo, #collapseThree').removeClass('collapse');
		$('footer').removeClass('mobile');
	}
	
	$('footer.mobile .panel-title>a').click(function() { 
		$('footer.mobile .panel-heading').removeClass('colorStay');
		if ($(this).hasClass('collapsed')==true){
			$(this).parentsUntil('footer.mobile .panel').addClass('colorStay');
		} else {
			$(this).parentsUntil('footer.mobile .panel').removeClass('colorStay');
		}
	});
};



//raaaaawwwwrrrrr animation
var currentLetter = 1;
var letterToAimate = "header h2 :nth-child("+ currentLetter +")";

interval = setInterval(rawr,100);

function rawr() {
	$(letterToAimate).addClass('flying');
	currentLetter ++;
	letterToAimate = "header h2 :nth-child("+ currentLetter +")";
	if (currentLetter > 15) {
		clearInterval(interval);
		$('header h2').html('Raaaaaawwrrrrr!');	  
	}
};




}); //end document ready
