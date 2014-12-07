// BACK TO TOP

var $ = jQuery;
var wstheme = jQuery;

wstheme(document).ready(function(){"use strict";
 
	wstheme('.service').hover(function (){
		var t = wstheme(this);
		t.find('h3').hide();
	
		wstheme(this).parent().find('.header-bg').stop(true,true).animate({
			width: '100%'
		}, 'fast', function (){ t.find('h3').addClass('active').fadeIn('fast') })
	},function (){
	var t = wstheme(this);
	
		t.find('h3').hide();
	
		t.parent().find('.header-bg').stop(true,true).animate({
			width: 60
		}, 'fast', function (){ t.find('h3').removeClass('active').fadeIn('fast') });
	});  
});

wstheme('.demoserver').popover({
	html: true
});

wstheme('body').on('click', function (e) {
    wstheme('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!wstheme(this).is(e.target) && wstheme(this).has(e.target).length === 0 && wstheme('.popover').has(e.target).length === 0) {
            wstheme(this).popover('hide');
        }
    });
});


wstheme('.hasTooltip').tooltip({animation:false,html:true});