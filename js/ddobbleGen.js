$( document ).ready(function() {

/*Anchor offset correction*/
	/*Requires position relative on the elements and the subfix "A" in the index links*/
	$("section").each(function(index){
		var idElemento = $(this).attr('id');
		$(this).append("<div class='anchor' id='"+idElemento+"A'></div>")
	});
	
	//loadLatestTweet();

//alert('listo');
});

// twitter stream 

 
/*function loadLatestTweet(){
    var _url = 'https://stream.twitter.com/1.1/statuses/sample.json';
    $.getJSON(_url,function(data){
        var tweet = data[0].text;
        $("#twitter-feed").html('<p>'+tweet+'</p>');
    });
}*/