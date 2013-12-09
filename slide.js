$(document).ready(function()
{
	isOver=false;
	
	function onNext()
	{
		$(".slider").animate({"margin-left":"-34%"},200,function()
		{
			 $(".sliderContent:first-child").appendTo(".slider");
             $(".slider").css("margin-left", "0px");                

		});
	}

	function onPrev()
	{
			$(".sliderContent:last-child").prependTo(".slider");
			$(".slider").css("margin-left","-34%");

			$(".slider").animate({"margin-left":"0px"},200);
		
	
	}

$("#right").click(onNext);
$("#left").click(onPrev);

$(".contentSlider").hover(function()
			{
				$(this).find(".sliderContentBut").animate({ "padding-left": "25px" }, 200);
				if ($(".sliderContentBut").is(":visible")) 
					{
					$(this).css("cursor","pointer");
					$(this).animate({ marginTop: '260px' }, 200);
					} 
					else 
					{
					$(this).css("cursor","default");
					}
			}, function() 
				{
				$(this).animate({ "marginTop": "280px" }, 200);    
				$(this).find(".sliderContentBut").animate({ "padding-left": "15px" }, 200);    
				}); 

});