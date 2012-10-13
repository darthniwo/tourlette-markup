$(function(){
	
  var pos = 0;
  setInterval(function(){
    var position = pos + 'px 0px';
    $('#pic-site').css('background-position', position);
    //if(pos > -1920){
      pos = pos - 10;
    //}else{
    //  pos = 0;
    //}
  },300);

  //star rating plugin implementation with rating Off
	$('.stars.no-rate').raty({
		readOnly : true,
		score    : 2,
		path: "/assets/",
		starOn  : "icons/starOn.png",
		starOff : "icons/starOff.png"
	});

	//star rating plugin implementation with rating On
	$('.stars.rate').raty({
		readOnly : false,
		score    : 2,
		path: "/assets/",
		starOn  : "icons/starOn.png",
		starOff : "icons/starOff.png"
	});

	//#Modernizr fallback for placeholder on ie
	 if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
				 if (input.val() == input.attr('placeholder')) {
							 input.val('');
							 input.removeClass('placeholder');
				 }
			 }).blur(function() {
				 var input = $(this);
				 if (input.val() == '' || input.val() == input.attr('placeholder')) {
							 input.addClass('placeholder');
							 input.val(input.attr('placeholder'));
				 }
			 }).blur();
			 $('[placeholder]').parents('form').submit(function() {
				 $(this).find('[placeholder]').each(function() {
							 var input = $(this);
							 if (input.val() == input.attr('placeholder')) {
								 input.val('');
							 }
				 })
			 });
	}

});