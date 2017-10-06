$.global = new Object();

$.global.item = 1;
$.global.total = 0;

$(document).ready(function() 
	{
	
   $("#slides li:nth-child(1)").removeClass('buried');
    
	var SlideCount = $('#slides li').length;
	
   $.global.total = SlideCount; 

  $('#left').click(function() { Slide('back'); }); 
  $('#right').click(function() { Slide('forward'); }); 
    
  });

function Slide(direction)
	{
   
    if (direction == 'back') { var $target = $.global.item - 1; }
    if (direction == 'forward') { var $target = $.global.item + 1; }  
    
    if ($target == 0) { DoIt($.global.total); } 
    else if ($target > $.global.total) { DoIt(1); }  
    else { DoIt($target); }    
	}

function DoIt(target)
  {
  $('.slide').addClass('buried');
    $.global.item = target; 
  var $newtarget = $("#slides li:nth-child("+target+")");
  $newtarget.removeClass('buried');
  }


