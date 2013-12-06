$(document).ready(function()
{
	
	function onNext()
	{
		$(".slider").animate({"margin-left":"-34%"},200,function()
		{
			 $(".slider img:first-child").appendTo(".slider");
             $(".slider").css("margin-left", "0px");                

		});
	}

	function onPrev()
	{
			$(".slider img:last-child").prependTo(".slider");
			$(".slider").css("margin-left","-34%")

			$(".slider").animate({"margin-left":"0px"},200);
		
	
	}

$("#right").click(onNext);
$("#left").click(onPrev);

});