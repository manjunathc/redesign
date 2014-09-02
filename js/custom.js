


//Create Parallax effect on the background image

var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});

$('#homepage-feature').carousel();
$('#homepage-feature1').carousel();

  
function getLocation()
{
	jQuery.ajax( { 
	  url: 'http://freegeoip.net/json/', 
	  type: 'POST', 
	  dataType: 'jsonp',
	  success: function(location) {
	    // example where I update content on the page.
	    var itunesURL = "https://itunes.apple.com/"+location.country_code+"/artist/manjula-gururaj/id311390530";
	    window.open(itunesURL, "iTunes");
	  }
	} );
}


function getfacebook()
{
	
	var facebookURL = "https://www.facebook.com/manjula.gururaj.7";
	window.open(facebookURL, "FaceBook");
	
}  

function getyoutube()
{
	
	var youtubeURL = "http://www.youtube.com/user/srilathapratap/videos";
	window.open(youtubeURL, "FaceBook");
	
} 
    

$('#itunes-button').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  getLocation();
});

$('#facebook').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  getfacebook();
});

$('#youtube').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  getyoutube();
});
