
	function callRow(){
	while(true){
		var numbRow = prompt("Wrin the nuber of cell in row");
			if(!isNumeric(numbRow)){
				alert("Wrong value, pleas type a number");
			}else{
				return numbRow;
				break;
			}
		}	

	}

	function isNumeric(n) {
  			return !isNaN(parseFloat(n)) && isFinite(n);
	}


$(document).ready(function(){

	
	function creatGrid(a){
		var cellW = (960/a)-6 + 'px';
		var $grid = $(".grids");

		for(var i = 0 ; i < a ; i++){
			for(var j =0; j < a ; j++){
				$grid.append("<div class='row'></div>");
			};

			$grid.append('</br>');
		};
		var $row   = $('.row');
		$row.css({'width': cellW, 'height' : cellW});
	}



	creatGrid(15);

	$('.color').on('click',function(){
			

			$('.grids').on('mouseenter','.row',function(){
				var arr = [];
			for(var i = 0 ; i<3;i++){
				arr.push(Math.floor(Math.random()*255));
			}

			var rgb = "rgb(" + arr[0] +","+arr[1]+","+arr[2]+")"
			
			$(this).css('background-color',rgb);
		});


	});

	$('.gradient').on('click',function(){
		
			$('.grids').on('mouseenter','.row',function(){
				var nop = $(this).css('opacity');
				$(this).css('opacity',nop-0.1);
			});
		});


	$('.grids').on('mouseenter','.row',function(){
		$(this).addClass('highlight');
	});

	$('.clear').on('click',function(){
		$('.grids').empty();
		
		creatGrid(callRow());

	});

	

});