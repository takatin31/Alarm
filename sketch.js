var counter = 0;
var timeleft = 10;

function convertSeconds(s)
{
	var min = floor(s / 60);
	var sec = s % 60;
	return (nf(min,2)+':'+nf(sec,2));
}

var ding;
function preload()
{
	ding = loadSound("alarm.mp3");
}

function setup()
{
	noCanvas();

	var parms = getURLParams();
	if (parms.min)
	{
		var m = parms.min;
		timeleft = m * 60;
	}



	var timer = select('#timer');
	timer.html(convertSeconds(timeleft - counter));

	var interval = setInterval(timeIt, 1000);

	function timeIt()
	{
		counter++;
		timer.html(convertSeconds(timeleft - counter));
		if (counter == timeleft)
		{
			ding.play();
			clearInterval(interval);
			//counter = 0;
		}
	}
}
